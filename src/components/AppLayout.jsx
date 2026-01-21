import React from "react";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="relative bg-[#0a0a0a] text-stone-200 selection:bg-stone-100 selection:text-black min-h-screen font-sans">
      
      {/* Texture Layer */}
      <div className="fixed inset-0 z-[90] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Fixed Background Layer (The Space Window) */}
      <div className="fixed top-0 right-0 w-full md:w-[78vw] lg:w-[82vw] h-full z-0 p-4 md:p-8 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden grayscale opacity-[0.2]">
           <video 
              src="planet.mp4" 
              autoPlay loop muted playsInline 
              className="w-full h-full object-cover scale-110 blur-sm"
           />
           <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        </div>
      </div>

      <Sidebar />

      <main className="relative z-10 md:ml-[22vw] lg:ml-[18vw] w-full md:w-[78vw] lg:w-[82vw]">
        {children}
      </main>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #2a2a2a; }
      `}} />
    </div>
  );}