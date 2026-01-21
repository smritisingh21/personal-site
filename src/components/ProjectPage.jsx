
import React from "react";
import { FaGithub, FaLink, FaSpa } from "react-icons/fa";

export const ProjectPage = ({ project, onBack }) => {
  return (
    <section className="relative min-h-screen py-24 px-6 bg-[#040504] animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-amber-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header / Back Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-500 hover:text-white mb-16 transition-colors group"
        >
          {/* <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to projects */}
        </button>

        <div className="space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">
              <FaSpa size={14} /> {project.cat}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-stone-100 uppercase tracking-tighter leading-none mb-8">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tech.map(t => (
                <span key={t} className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-emerald-400">{t}</span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20"
            >
              Live Demo <FaLink size={16} />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              Source Code <FaGithub size={16} />
            </a>
          </div>

          {/* Detailed Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-stone-500">The Challenge</h3>
              <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-medium">
                {project.longDescription}
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-2">Role</h4>
                <p className="text-stone-100 font-bold">Lead Developer & Designer</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-2">Timeline</h4>
                <p className="text-stone-100 font-bold">2025 - Present</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl">
                <Globe size={24} className="text-amber-400 mb-4" />
                <p className="text-[10px] font-bold text-stone-400 uppercase leading-relaxed tracking-widest">
                  Successfully deployed to production and optimized for global edge delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;