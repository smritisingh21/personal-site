import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Code2, 
  Activity, 
  ArrowUpRight,
  Target,
  Trophy,
  Linkedin,
  Twitter,
  Mail,
  Instagram
} from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const BentoStats = () => {
  const [time, setTime] = useState('');
  const [maxStreak, setMaxStreak] = useState('...');
  const githubUsername = "smritisingh21";

  // Mock social links for the "Find me here" block to ensure it works without external files
  const socialLinks = [
    { name: 'Github', href: `https://github.com/${githubUsername}`, icon: <Github size={20} /> },
    { name: 'LinkedIn',    href: 'https://www.linkedin.com/in/smriti-singh-a06685257/', icon: <Linkedin size={20} /> },
    { name: 'Twitter',       href: 'https://x.com/sillymilllly',  icon: <FaXTwitter size={20} /> },
    { name: 'Email', href: 'smritiiisinghh@gmail.com', icon: <Mail size={20} /> },
  ];

  // 1. Update local time for Bangalore (IST)
  useEffect(() => {
    const updateTime = () => {
      const options = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Fetch and Calculate Real GitHub Max Streak Data
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.deno.dev/${githubUsername}.json`);
        const data = await response.json();
        
        const allDays = data.contributions.flat();
        
        let max = 0;
        let tempMax = 0;
        allDays.forEach(day => {
          if (day.count > 0) {
            tempMax++;
            if (tempMax > max) max = tempMax;
          } else {
            tempMax = 0;
          }
        });
        setMaxStreak(max);

      } catch (error) {
        console.error("Error fetching GitHub streaks:", error);
        setMaxStreak("180"); 
      }
    };

    fetchGithubData();
  }, [githubUsername]);

  return (
    <section id="stats" className="py-12 px-8 md:px-16 lg:px-24 bg-transparent relative z-10">
      
      {/* Section Header */}
      <div className="mb-10 flex justify-between items-end pb-7 border-b border-stone-900/50">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-600 mb-6 flex items-center gap-3">
            <Activity size={12} strokeWidth={3} /> Scroll and get to know me better -
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end text-right">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">Synchronized</p>
          <p className="text-xs font-bold text-stone-400">Jan 2026</p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* CARD 1: Real GitHub Matrix (Wide) */}
        <div className="md:col-span-3 md:row-span-1 bg-white/[0.02] backdrop-blur-sm border border-stone-700
          rounded-[2.5rem] p-5 flex flex-col justify-between group hover:border-stone-100/20 
          transition-all duration-700">

          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
               <Github size={20} className="text-stone-500 group-hover:text-stone-100 transition-colors" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">Github Contributions</span>
            </div>
            <a 
              href={`https://github.com/${githubUsername}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-800 hover:text-stone-100 transition-all"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>
          
          <div className="h-full flex items-center overflow-hidden">
            <img 
              src={`https://ghchart.rshah.org/40c463/${githubUsername}`} 
              alt={`${githubUsername}'s Github Chart`}
              className="w-full transition-all duration-700"
              style={{ maxHeight: '100px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* CARD 5: Max Streak */}
        <div className="md:col-span-1 md:row-span-1 bg-white/[0.02] backdrop-blur-sm border border-stone-700 rounded-[2.5rem] p-8 flex flex-col justify-between group
         hover:border-stone-100/20 transition-all duration-700">
           <div className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-600 flex items-center gap-2">
             <Trophy size={12} className="text-amber-500" /> Max Streak
           </div>
           <div>
              <div className="text-5xl font-black text-stone-100 leading-none tracking-tighter">{maxStreak}</div>
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mt-1 italic">days in a row</p>
           </div>
        </div>

        {/* CARD 3: About Me (Large) */}
        <div className="md:col-span-2 md:row-span-2 bg-white/[0.02] backdrop-blur-sm border border-stone-700 
        rounded-[2.5rem] p-6 flex flex-col justify-between group hover:border-stone-100/20 transition-all duration-700">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-4">
               <Code2 size={20} className="text-stone-500 group-hover:text-stone-100 transition-colors" />
               <span className="text-[8px] font-black uppercase tracking-[0.4em] text-stone-400 mb-2">A little about me</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center py-12">
             <div className="relative w-full h-48 flex items-center justify-center tracking-tight text-white/50 text-xs md:text-base leading-tight">
                I am an engineering student (currently in 6th sem) interested in roles related to Backend development or software engineering.<br/><br/>
                I am also looking forward to expand my horizons and explore other stuff like mobile-app dev, DevOps and System design.<br/><br/>
                I've also worked previously as a video-editor, graphic designer, so yeah you can say that I have a knack for taking challenges and learning new things.
                Looking for internships/entry-level positions at the moment.
             </div>
          </div>
        </div>

        {/* CARD 4: Availability */}
        <div className="md:col-span-1 md:row-span-1 bg-stone-100/90 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl shadow-white/5 transition-transform duration-500 hover:scale-[1.02]">
          <div className="flex justify-between items-start text-stone-900 ">
             <Target size={20} strokeWidth={2.5} />
             <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,190,129,0.8)]" />
          </div>
          <div className="text-black">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-50">Current Status</p>
             <h3 className="text-3xl font-black uppercase tracking-tighter leading-none ">Open to<br/>Work</h3>
          </div>
        </div>

        {/* CARD 2: Current Location */}
        <div className="md:col-span-1 md:row-span-1 bg-white/[0.02] backdrop-blur-3xl border border-stone-700 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-stone-100/20 transition-all duration-700">
          <div className="text-[9px] font-black tracking-[0.4em] text-stone-400 uppercase">Bangalore, IN</div>
          <div>
            <div className="text-5xl font-black text-stone-100 tabular-nums leading-none tracking-tighter">{time}</div>
            <div className="text-[10px] font-bold text-stone-600 uppercase tracking-widest mt-2 italic">IST Timezone</div>
          </div>
        </div>

        {/* CARD 6: Find Me Here (Corrected Block) */}
        <div className="md:col-span-2 md:row-span-1 bg-white/[0.02] backdrop-blur-3xl border border-stone-700 rounded-[2.5rem] p-8 flex flex-col items-center justify-center group hover:border-stone-100/20 transition-all duration-700">
           <div className="text-center space-y-4 ">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-500">Find me here</span>
              <div className="flex items-center justify-center gap-8 ">
                {socialLinks.map((s, idx) => (
                    <a 
                      key={idx} 
                      href={s.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-stone-300 hover:text-white   transition-all transform hover:scale-110 hover:animate-ping
                      active:scale-95 border border-white/20 rounded-full p-2"
                    >
                        {s.icon}
                    </a>
                ))}
              </div>
              <p className='text-gray-300 text-xs tracking-tight'>
                Let us build something together, or maybe just be friends.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BentoStats;