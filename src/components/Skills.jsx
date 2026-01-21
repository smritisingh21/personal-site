import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillData = [
    { name: "Node.js", img: "node-js.png", color: "hover:border-emerald-500/40" },
    { name: "GitHub", img: "github.png", color: "hover:border-stone-400/40" },
    { name: "React", img: "react.svg", color: "hover:border-cyan-500/40" },
    { name: "JavaScript", img: "javascript.webp", color: "hover:border-yellow-500/40" },
    { name: "MongoDB", img: "monog.png", color: "hover:border-green-600/40" },
    { name: "TypeScript", img: "typescript.webp", color: "hover:border-blue-500/40" },
    { name: "Framer", img: "framer.jpg", color: "hover:border-purple-500/40" },
    { name: "Docker", img: "docekr.png", color: "hover:border-blue-400/40" },
    { name: "Next.js", img: "next.png", color: "hover:border-white/40" },
    { name: "Tailwind", img: "tailwind.png", color: "hover:border-teal-400/40" },
    { name: "Figma", img: "figma-logo-512.webp", color: "hover:border-orange-500/40" },
    { name: "Postman", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png", color: "hover:border-orange-600/40" },
  ];

  return (
    <section 
      id="skills-section" 
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 flex items-center justify-center bg-[#040504] overflow-hidden"
    >
      {/* Background Cinematic Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-600/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
            {/* <Sparkles size={14} className="text-amber-400" /> */}
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">Toolkit</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-100 tracking-tighter uppercase mb-6">
            Tools & <span className="text-emerald-400 text-glow">Technologies</span>
          </h2>
          
          <p className="text-stone-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Apart from the core tools below, I am constantly exploring <span className="text-amber-100/80 italic">emerging tech</span> to build more efficient and visually stunning products.
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          id="skills-container" 
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {skillData.map((skill, index) => (
            <div 
              key={index}
              className={`
                group relative flex flex-col items-center justify-center
                transition-all duration-700 transform
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Glass Tile */}
              {/* <div className={` */}
                {/* relative w-full aspect-square 
                bg-white/[0.02] backdrop-blur-xl 
                border border-white/5 rounded-3xl
                flex items-center justify-center
                transition-all duration-500
                group-hover:bg-white/[0.05] group-hover:-translate-y-2
                ${skill.color}
                shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)]
              `}> */}
                {/* <img 
                  src={skill.img} 
                  alt={skill.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="text-emerald-500/50"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>`;
                  }}
                /> */}
              {/* </div> */}

              {/* The "Small Tag" Name Badge */}
              
              <div className="mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <span className="
                  px-2.5 py-1
                  bg-stone-900/40 backdrop-blur-sm
                  border border-white/5 rounded-lg
                  text-[9px] font-black uppercase tracking-[0.2em] text-stone-300
                  group-hover:text-emerald-400 group-hover:border-emerald-500/20
                  transition-colors
                ">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow {
          text-shadow: 0 0 20px rgba(52, 211, 153, 0.3);
        }
      `}} />
    </section>
  );
};

export default Skills;