import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="relative bg-[#0a0a0a] text-stone-200 selection:bg-stone-100 
    selection:text-black min-h-screen font-sans">

      <div className="fixed top-0 right-0 w-full md:w-[78vw] lg:w-[82vw] h-full z-0 p-4 md:p-8 flex
       items-center justify-center pointer-events-none">
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden ">
           <video 
              src="planet.mp4" 
              autoPlay loop muted playsInline 
              className="w-full h-full object-cover scale-110 blur-sm"
           />
        </div>
      </div>
      <Sidebar />

      <main className="relative z-10 md:ml-[22vw] lg:ml-[18vw] w-full md:w-[78vw] lg:w-[82vw]">
        {children}
      <Footer/>
      </main>

    </div>
  );}