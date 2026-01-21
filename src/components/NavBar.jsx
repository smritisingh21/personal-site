import React, { useState, useEffect } from 'react';
import { FaHome, FaXingSquare } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Changes the navbar style when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'HOME', href: '#hero-section' },
    { name: 'ABOUT', href: '#about-section' },
    { name: 'SKILLS', href: '#skills-section' },
    { name: 'PROJECTS', href: '#projects-section' },
    { name: 'CONTACT', href: '#contact-box' },
  ];

  return (
    <header 
      id="nav" 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-black/40 backdrop-blur-xl border-b border-white/10' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-black tracking-tighter text-white">
          SMRITI<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav id="part2" className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[10px] font-bold tracking-[0.3em] text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaXingSquare size={24} /> : <FaHome size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Glassmorphism Slide) */}
      <div 
        className={`
          md:hidden absolute top-full left-0 w-full 
          bg-black/90 backdrop-blur-2xl border-b border-white/10
          transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col p-8 gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold tracking-[0.4em] text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;