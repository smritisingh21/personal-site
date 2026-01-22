import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Target, Plus } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);



  const educationData = [
    {
      id: "01",
      title: "Bachelor's  Degree",
      specialization: " Btech in Information Science Engineering",
      location: "Jain University , Bengaluru , India",
      year: "2023 — 2027",
      grade: "9.48 / 10 CGPA ",
    },
    {
      id: "02",
      title: "Senior Secondary / 12th",
      specialization: "PCMC (Physics, Chem, Math, CS)",
      location: "Saint Joseph's School, NTPC , Kahalgaon",
      year: "2023",
    },
    {
      id: "03",
      title: "Secondary School / 10th",
      location: "Saint Joseph's School, NTPC , Kahalgaon",
      year: "2021",
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="relative min-h-screen py-24 px-8 bg-transparent overflow-hidden"
    >
      {/* Constrained Container */}
      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-4">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-stone-500">Academics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono text-yellow-100 font-bold tracking-tight uppercase mb-4 leading-none">
            Educational background  <span className="text-stone-500 italic font-serif lowercase tracking-normal"></span>
          </h2>
        </div>

        {/* The Node Graph (Left Aligned) */}
        <div className="relative pl-8 md:pl-12">
          
          {/* Vertical Thread */}
          <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-stone-900">
             <div className={`absolute top-0 left-0 w-full bg-gradient-to-b from-stone-400 to-transparent transition-all duration-[1500ms] ease-out ${isVisible ? 'h-full' : 'h-0'}`} />
          </div>

          <div className="space-y-16">
            {educationData.map((node, index) => (
              <div 
                key={node.id}
                className={`
                  relative transition-all duration-1000 transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Node Point */}
                <div className="absolute -left-8 md:-left-12 top-1.5 z-20">
                   <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border border-stone-800 flex items-center justify-center group hover:border-white transition-all">
                      <div className="w-1.5 h-1.5 bg-stone-700 group-hover:bg-white transition-all" />
                   </div>
                </div>

                {/* Content */}
                <div className="group cursor-crosshair">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="text-[10px] font-black text-stone-100 tracking-widest tabular-nums">{node.year}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl md:text-3xl font-black text-stone-200 uppercase tracking-tighter group-hover:text-white transition-colors">
                      {node.title}
                    </h3>
                    <p className="flex items-center gap-1.5  text-stone-400 text-sm md:text-base font-medium leading-snug max-w-lg">
                      <MapPin size={10} /> {node.location}{'   '}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-1">
                      <div className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                        {node.specialization? node.specialization : ""}
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-stone-300 uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        <Target size={10} className="text-stone-600" /> {node.grade? node.grade :''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Decoration */}
        <div className={`mt-20 transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
           <div className="text-stone-900">
              <Plus size={16} strokeWidth={2} />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Education;


