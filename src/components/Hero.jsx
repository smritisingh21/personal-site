import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin , FaGithub , FaEnvelope ,FaTwitter } from "react-icons/fa6";


const Socials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <FaLinkedin size={20} />, color: 'hover:text-emerald-400' },
    { name: 'Twitter', href: '#', icon: <FaTwitter size={20} />, color: 'hover:text-emerald-400' },
    { name: 'GitHub', href: '#', icon: <FaGithub size={20} />, color: 'hover:text-stone-100' },
    { name: 'Email', href: '#', icon: <FaEnvelope size={20} />, color: 'hover:text-amber-400' },
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 mt-2">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href}
          className={`
            group relative p-3.5 bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-full 
            text-stone-400 ${link.color} transition-all duration-500 hover:bg-white/[0.08] 
            hover:border-emerald-500/30 hover:-translate-y-2
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {link.icon}
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-stone-900/90 rounded text-[9px] font-black uppercase tracking-widest text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};

// --- MAIN COMPONENT: Home ---
const Hero = () => {
  return (
    <div id="home-wrapper" className="relative bg-black overflow-x-hidden">
      
      <div className="sticky top-0 h-screen w-50 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
        <div className="relative w-[60vw] h-[60vh] md:w-[70vw] md:h-[70vh] overflow-hidden rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.9)]">
          <video 
            src="planet.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full "
          />
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          
        </div>
      </div>

      <section className="relative z-10 h-screen flex flex-col items-center justify-center -mt-[100vh] px-6 pointer-events-none">
        <div className="
          hero-content-box 
          pointer-events-auto
          w-full max-w-4xl text-center
          p-8 md:p-16
          bg-white/[0.02] backdrop-blur-3xl
          rounded-[3rem] border border-emerald-500/10
          shadow-[0_40px_100px_rgba(0,0,0,0.7)]
          animate-up
        ">
         
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-stone-100 leading-[0.95] mb-8 uppercase">
            Smriti Singh
            <br/>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-emerald-400 to-amber-200 py-2">
              Full-stack developer
            </span>
          </h1>

          <p className="text-stone-400 text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            I craft <span className="text-stone-100 border-b border-emerald-500/20">pixel-perfect</span> digital experiences where clean code meets cinematic art.
          </p>

          <div className="flex flex-col items-center gap-8">
            
            <div className="mt-8 animate-bounce opacity-40">
              <div className="w-px h-16 bg-gradient-to-b from-emerald-500 to-transparent mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Extra space to demonstrate the scroll effect */}
      <div className="h-[50vh] bg-gradient-to-b from-transparent to-black relative z-20" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up { 
          from { opacity: 0; transform: translateY(100px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-up { 
          animation: slide-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .text-glow { 
          text-shadow: 0 0 25px rgba(52, 211, 153, 0.3); 
        }
      `}} />
    </div>
  );
};

export default Hero;