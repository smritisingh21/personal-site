import React, { useEffect, useState, useRef } from 'react';
import { socialLinks } from '../SocialsData.jsx';

const Socials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div 
      id="contacts" 
      ref={containerRef}
      className="flex flex-col items-center justify-center py-20 px-6 bg-[#040504] relative overflow-hidden"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Title / Intro */}
      <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
          {/* <Sparkles size={12} className="text-amber-400" /> */}
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-400">Connection</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-stone-100 tracking-tighter uppercase">
          Let's <span className="text-emerald-400 text-glow">Connect</span>
        </h2>
      </div>

      {/* The Social Dock */}
      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-6">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`
            }}
          >
            {/* Background "Aura" - Hidden by default, reveals on hover */}
            <div className={`absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            {/* Glass Circle Wrapper */}
            <div className={`
              relative z-10 p-5 md:p-6
              bg-white/[0.03] backdrop-blur-2xl 
              border border-white/5 rounded-full 
              text-stone-400 ${link.color}
              transition-all duration-500 
              group-hover:bg-white/[0.08] 
              group-hover:border-emerald-500/30 
              group-hover:-translate-y-3
              shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              ${link.glow}
            `}>
              {link.icon}
            </div>

            {/* Floating Label Badge */}
            <div className="
              absolute -bottom-10 left-1/2 -translate-x-1/2 
              px-2.5 py-1
              bg-stone-900/60 backdrop-blur-md
              border border-white/5 rounded-lg
              opacity-0 group-hover:opacity-100 
              translate-y-2 group-hover:translate-y-0
              transition-all duration-300 pointer-events-none
            ">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-200 whitespace-nowrap">
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Call to Action */}
      <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-stone-500 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
          <div className="h-px w-8 bg-white/5" />
          Always open for collaborations
          <div className="h-px w-8 bg-white/5" />
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow {
          text-shadow: 0 0 15px rgba(52, 211, 153, 0.4);
        }
      `}} />
    </div>
  );
}

export default Socials;