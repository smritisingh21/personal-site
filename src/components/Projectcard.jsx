import React from "react";
import { FaChevronCircleRight , FaEnvelope} from "react-icons/fa";


const Projectcard = ({ project, onOpen, index }) => {
  return (
    <div 
      className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-emerald-500/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-12 fill-mode-both"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-start mb-10">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
          <FaEnvelope size={24} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">{project.cat}</span>
      </div>

      <h3 className="text-3xl font-black text-stone-100 uppercase tracking-tighter mb-4 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-stone-400 text-sm leading-relaxed mb-10 line-clamp-2">
        {project.description}
      </p>

      <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          {project.tech.slice(0, 2).map(t => (
            <span key={t} className="px-3 py-1 bg-stone-900/50 rounded-lg text-[9px] font-bold text-stone-500 border border-white/5 uppercase tracking-widest">{t}</span>
          ))}
        </div>
        
        <button 
          onClick={onOpen}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400 hover:text-amber-400 transition-colors"
        >
          View Details <FaChevronCircleRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default Projectcard;