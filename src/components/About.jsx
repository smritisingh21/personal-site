import React, { useEffect, useState, useRef } from 'react'

/**
 * THE DESIGN STRATEGY:
 * 1. COLOR PALETTE: Refined "Forest-Space" vibe. Deep Emerald, Moss, and Warm Stone (Cream/Yellowish).
 * 2. GLASSMORPISM: Semi-transparent panels with emerald-tinted borders and amber glows.
 * 3. ATMOSPHERE: Decorative background glows updated to match planetary lighting (Emerald + Amber).
 * 4. RESPONSIVE: Fully fluid layout for all devices.
 */

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about-section" 
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 overflow-hidden flex items-center justify-center bg-[#040504] transition-opacity duration-1000"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        {/* Cinematic Emerald Glow */}
        <div className="absolute top-[15%] right-[5%] w-[30rem] h-[30rem] bg-emerald-600/10 blur-[140px] rounded-full" />
        {/* Warm Amber/Yellowish Planetary Glow */}
        <div className="absolute bottom-[10%] left-[5%] w-[25rem] h-[25rem] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Astronaut Visualization */}
        <div className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="relative max-w-sm md:max-w-md pointer-events-none group">
            {/* Deep Emerald Aura */}
            <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full animate-pulse" />
            
            {/* Native CSS Floating Animation Wrapper */}
            <div className="animate-[bounce_5s_infinite] transition-transform duration-700 hover:rotate-6">
              <img 
                src="./astronaut.png" 
                alt="Astronaut floating in space" 
                className="relative z-10 w-full h-auto drop-shadow-[0_0_30px_rgba(16,185,129,0.2)] grayscale-[0.1] brightness-105"
                onError={(e) => {
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/2026/2026462.png"; // Fallback icon
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Text Box */}
        <div id="intro-box" className="order-1 lg:order-2">
          <div className={`
            p-8 md:p-14 
            bg-white/[0.02] backdrop-blur-2xl 
            border border-emerald-500/10 rounded-[3rem] 
            shadow-[0_25px_60px_rgba(0,0,0,0.5)]
            transition-all duration-1000 delay-300 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            {/* Section Tag */}
            <div className={`transition-all duration-700 delay-500 mb-6 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                whoami
              </span>
            </div>

            {/* Main Title */}
            <h2 className={`text-4xl md:text-6xl font-black text-stone-100 tracking-tighter mb-8 uppercase transition-all duration-700 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              Full Stack <span className="text-emerald-400 text-glow">Developer</span>
            </h2>

            {/* Description Body */}
            <div className="space-y-6 text-stone-300/80 text-base md:text-lg leading-relaxed font-medium">
              <p className={`transition-all duration-700 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                I bring ideas to life with <span className="text-amber-100 italic border-b border-amber-500/20">code and creativity</span>. 
                I am a builder deeply curious about the intersection of cinematic aesthetics and high-performance engineering.
              </p>

              {/* Decorative Accent Line */}
              <div className={`h-px w-16 bg-gradient-to-r from-emerald-500/50 to-transparent my-8 transition-all duration-1000 delay-800 ${isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'}`} />

              <p className={`transition-all duration-700 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                My journey started in the creative realms of <b className="text-stone-200">graphic design and video editing</b>. 
                This visual foundation allows me to approach every component with a filmmaker's eye for lighting and a developer's eye for logic.
              </p>

              <p className={`transition-all duration-700 delay-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                Currently, I am pursuing my <b className="text-stone-200">Bachelor's of Technology</b> in 
                Information Science in Bangalore—the silicon hub of India.
              </p>

              {/* Call to Action Link */}
              <p className={`pt-6 font-bold text-emerald-400 hover:text-amber-200 transition-all duration-700 delay-1100 cursor-pointer flex items-center gap-3 group ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                Let's build something extraordinary together.
                {/* <Sparkles size={20} className="group-hover:rotate-12 group-hover:scale-110 transition-all text-amber-300/80" /> */}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Global CSS for Vibe-specific effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(52, 211, 153, 0.4);
        }
      `}} />
    </section>
  )
}

export default About;