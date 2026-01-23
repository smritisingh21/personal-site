import React, { useEffect, useState, useRef } from 'react';
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Instagram, 
  Github, 
  Sparkles,
  ArrowRight,
  Send
} from 'lucide-react';

/**
 * THE CONTACT STRATEGY:
 * 1. FORM INTEGRATION: Adds a high-fidelity contact form to the existing Socials layout.
 * 2. GLASS UI: Minimalist inputs with high-contrast stone-900 borders and stone-100 focus states.
 * 3. TRANSPARENCY: Zero background color, allowing the fixed planetary video to show through.
 * 4. FEEDBACK: Integrated success/error messages with cinematic animations.
 */

const Socials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
  }, []);

  // Mock social links (matches your previous style)
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/smriti-singh-a06685257/', 
      icon: <Linkedin size={22} />, 
      color: 'group-hover:text-blue-400',
      glow: 'group-hover:shadow-blue-500/20'
    },
    { 
      name: 'Twitter', 
      href: 'https://x.com/sillymilllly', 
      icon: <Twitter size={22} />, 
      color: 'group-hover:text-emerald-400',
      glow: 'group-hover:shadow-emerald-500/20'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/smritisingh21', 
      icon: <Github size={22} />, 
      color: 'group-hover:text-stone-100',
      glow: 'group-hover:shadow-white/10'
    },
    { 
      name: 'Email', 
      href:"https://mail.google.com/mail/?view=cm&fs=1&to=smritiiisinghh@gmail.com" ,
      icon: <Mail size={22} />, 
      color: 'group-hover:text-amber-400',
      glow: 'group-hover:shadow-amber-500/20'
    },
   
  ];
  <a target="_blank">
  Email Us
</a>   

  // Handle form submission via Formspree (or similar)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    try {
      // REPLACE 'your_form_id' with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/mreppjwk", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div 
      id="contacts" 
      ref={containerRef}
      className="flex flex-col items-center justify-center py-32 px-6 bg-black/80 relative overflow-hidden"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
          <Sparkles size={12} className="text-amber-400" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Send me a mail</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-stone-100 tracking-tighter uppercase leading-none">
          Let's Start a <br/><span className="text-gray-400 italic font-thin lowercase tracking-normal">Conversation</span>
        </h2>
      </div>

      {/* Contact Form Section */}
      <div className={`max-w-2xl w-full mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[15px] font-black  text-stone-200 ml-4">Name</label>
              <input 
                type="text" name="name" required
                placeholder="John Doe"
                className="w-full bg-white/[0.02] border border-stone-900 focus:border-gray-500/50 rounded-2xl px-6 py-4 text-stone-100 outline-none transition-all placeholder:text-stone-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[15px] font-black  text-stone-200 ml-4">Email</label>
              <input 
                type="email" name="email" required
                placeholder="john@example.com"
                className="w-full bg-white/[0.02] border border-stone-900 focus:border-gray-500/50 rounded-2xl px-6 py-4 text-stone-100 outline-none transition-all placeholder:text-stone-500"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[15px] font-black  text-stone-200 ml-4">Your Message</label>
            <textarea 
              name="message" required rows="6"
              placeholder="What's on your mind?"
              className="w-full bg-white/[0.02] border border-stone-900 focus:border-gray-500/50 rounded-[2.5rem] px-6 py-6 text-stone-100 outline-none transition-all placeholder:text-stone-500 resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="group w-full py-6 bg-stone-100 text-black rounded-full font-black uppercase tracking-widest text-[10px] 
            flex items-center justify-center gap-4 hover:bg-transparent hover:text-white transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {isSubmitting ? 'Transmitting...' : (
              <>Send Transmission <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
            )}
          </button>

          {/* Feedback Status */}
          {status === 'success' && <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest text-center animate-pulse">Message Sent. I'll get back to you soon.</p>}
          {status === 'error' && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center">Transmission Failed. Please try again.</p>}
        </form>
      </div>

      {/* The Social Dock (The Original Logic Integrated) */}
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
            <div className={`absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
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
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-stone-900/60 backdrop-blur-md border border-white/5 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-200 whitespace-nowrap">{link.name}</span>
            </div>
          </a>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow { text-shadow: 0 0 15px rgba(52, 211, 153, 0.4); }
      `}} />
    </div>
  );
}

export default Socials;