import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // Default fallback image if none is provided
  const placeholderImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className="group relative w-full cursor-pointer">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 group-hover:border-stone-400 transition-all duration-700 ease-out">
        <img 
          src={project?.image || placeholderImage} 
          alt={project?.title || "Project Screenshot"}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out opacity-40 group-hover:opacity-100"
        />
        
        {/* Subtle Grain Overlay (Specific to the image) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        
        <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">
              {project?.category || "Development"}
            </span>
          </div>
        </div>
      </div>

      {/* 2. PROJECT META DATA */}
      <div className="mt-6 flex justify-between items-start px-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-stone-600 tabular-nums">
              {project?.id || "00"}
            </span>
            <h3 className="text-xl font-black uppercase tracking-tighter text-stone-200 group-hover:text-white transition-colors">
              {project?.title || "Project Title"}
            </h3>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-500 ml-8">
            {project?.year || "2026"} — Visual System
          </p>
        </div>

        {/* Action Icon */}
        <div className="w-10 h-10 rounded-full border border-stone-900 flex items-center justify-center text-stone-700 group-hover:border-stone-100 group-hover:text-stone-100 transition-all duration-500">
           <ArrowUpRight size={18} strokeWidth={2.5} />
        </div>
      </div>

      {/* 3. HOVER LINE DECORATION */}
      <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white/10 group-hover:w-full transition-all duration-1000 ease-in-out" />
    </div>
  );
};

export default ProjectCard;