import React, { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';


const Experience = () => {
  // Track which ID is currently expanded (null if none)
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
    { 
      id: '01', 
      role: 'Full stack developer', 
      company: 'Freelance', 
      year: '2024- present',
      description: 'Architecting high-performance web applications using the MERN stack and providing tech support. '
    },
    { 
      id: '02', 
      role: 'Creative head', 
      company: 'Altalune', 
      year: 'Oct,2023 - Dec,2023',
      description: 'Developed brand identities and lead teams for deigns and video-edits. My role also involved facing clients directly and collaborating to understand their needs and deliver results.'
    },
    { 
      id: '03', 
      role: 'Information Science', 
      company: 'B.Tech / BLR', 
      year: '2023 -2027',
      description: 'Specializing in core CS concepts and data structures at the heart of Bangalore’s tech ecosystem. Actively applying academic principles to real-world full-stack development challenges.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 md:px-16 lg:px-24 bg-black/50">
      <div className="max-w-5xl mx-auto">
        {/* Compact Header */}
        <div className="flex items-center gap-4 mb-12 border-b border-stone-900 pb-6">
          <h2 className="text-2xl font-black  tracking-tighter text-stone-100 italic font-serif "> Work experience</h2>
        </div>

        {/* Interactive List */}
        <div className="flex flex-col border-t border-stone-900">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`
                group border-b border-stone-900 transition-all duration-500 cursor-pointer
                ${expandedId === exp.id ? 'bg-white/[0.02] px-4' : 'hover:px-4'}
              `}
              onClick={() => toggleExpand(exp.id)}
            >
              {/* Visible Header Row */}
              <div className="flex items-center justify-between py-6">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-[10px] font-bold text-stone-800 group-hover:text-stone-400 transition-colors">
                    {exp.id}
                  </span>
                  <h3 className={`text-lg md:text-2xl font-black uppercase tracking-tight transition-colors ${
                    expandedId === exp.id ? 'text-stone-50' : 'text-stone-200 group-hover:text-stone-50'
                  }`}>
                    {exp.role}
                  </h3>
                </div>
                
                <div className="flex items-center gap-6 md:gap-12">
                  <p className="hidden md:block text-[10px] font-bold text-stone-600 uppercase tracking-widest italic">
                    {exp.company}
                  </p>
                  <p className="text-[11px] font-black text-stone-100 tabular-nums">
                    {exp.year}
                  </p>
                  <div className={`transition-transform duration-500 ${expandedId === exp.id ? 'rotate-180 text-stone-100' : 'text-stone-800 group-hover:text-stone-100'}`}>
                    {expandedId === exp.id ? <FaMinusCircle size={16} /> : <FaPlusCircle size={16} />}
                  </div>
                </div>
              </div>

              {/* Expandable Description Area */}
              <div className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${expandedId === exp.id ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="max-w-2xl ml-16 md:ml-24">
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed font-medium">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <div className="w-1 h-1 bg-stone-100 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;