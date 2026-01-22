import React, { useState, useEffect } from 'react';
import Projectcard from "./Projectcard.jsx"
import ProjectPage from './ProjectPage';
import { FaLayerGroup } from 'react-icons/fa';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "COUNTRIES API PROJECT",
    cat: "Web Development",
    description: "A comprehensive explorer for world data, integrating real-time REST APIs with custom filtering and theme switching. Built to handle large data sets with optimized search indexing.",
    longDescription: "This project was a deep dive into asynchronous state management. I focused on creating a seamless user experience where data transitions feel organic. The UI utilizes a custom-built grid system that responds dynamically to different screen resolutions, ensuring a cinematic experience on both mobile and desktop.",
    tech: ["React", "Tailwind", "REST API", "Context"],
    live: "https://smriti-coutntries-api.netlify.app/",
    github: "https://github.com/smritisingh21/countries-api-project",
    color: "emerald"
  },
  {
    id: 2,
    title: "FOCUS ON TODAY",
    cat: "Productivity",
    description: "A minimalist daily planner designed to reduce cognitive load. Focuses on the single most important task of the day with a clean, distraction-free glassmorphism UI.",
    longDescription: "Productivity tools often suffer from feature-creep. 'Focus On Today' is my answer to that problem. By limiting the user to three primary goals, it encourages deep work. I implemented local-first persistence to ensure zero-latency when adding tasks, matching the speed of thought.",
    tech: ["JavaScript", "LocalStorage", "CSS3", "GSAP"],
    live: "https://focus-on-today-project-ss.netlify.app/",
    github: "https://github.com/smritisingh21/FocusProject",
    color: "amber"
  },
  {
    id: 3,
    title: "TIC TAC TOE",
    cat: "Game Dev",
    description: "An interactive, animated version of the classic game featuring a smart AI opponent and smooth state transitions.",
    longDescription: "This was a study in game logic and recursion. I built an AI that uses the Minimax algorithm to ensure the player is always challenged. The visual layer uses SVG animations and backdrop filters to elevate a simple game into a high-end digital experience.",
    tech: ["React", "Hooks", "SVG", "Animation"],
    live: "https://silver-paprenjak-775c2e.netlify.app",
    github: "https://github.com/user/project3",
    color: "cyan"
  },
  // Add more projects here following the same structure
];

// --- MAIN PROJECTS COMPONENT ---
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' | 'details'

  const handleOpenProject = (project) => {
    setActiveProject(project);
    setView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('grid');
    setActiveProject(null);
  };

  if (view === 'details' && activeProject) {
    return <ProjectPage project={activeProject} onBack={handleBack} />;
  }

  return (
    <section id="#projects-section" className="relative min-h-screen py-32 px-6 bg-[#040504] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
            <FaLayerGroup size={14} className="text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-stone-100 tracking-tighter uppercase mb-6">
            Previous <span className="text-emerald-400 text-glow">Works</span>
          </h2>
          <p className="text-stone-400 max-w-xl text-sm md:text-base leading-relaxed font-medium">
            A selection of projects where I've blended technical complexity with <span className="text-amber-100/80 italic">cinematic design</span>.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <Projectcard 
              key={project.id} 
              project={project} 
              index={idx}
              onOpen={() => handleOpenProject(project)} 
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow { text-shadow: 0 0 20px rgba(52, 211, 153, 0.3); }
      `}} />
    </section>
  );
}