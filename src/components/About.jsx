
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css'


const About =() => {
  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".intro", 
      { opacity: 0,
          x:50,
          duration:1,
          stagger:0.1,
          scrollTrigger:{
              trigger:"#intro-box",
              start: "top 60%",  
              toggleActions: "play none",
              end: "top 30%",
          }});

  gsap.from("#astronaut-img", {
      x: -100,
      y: 100,
      opacity: 0,
      duration: 2,
      transformOrigin: "center",
      rotate: -30,
      scale: 1,
      scrollTrigger: {
          trigger: "#about-container-top",
          start: "top 0%",
          ease: "power1.inOut",
      }
  });

 ScrollTrigger.refresh();

  }, []);

  return (
    <div> 
        <section id="about-section">
   
   <img src="" alt="" />
    {/* <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/space.mp4" type="video/mp4" />
      </video> */}
   <div id="about-container-bottom">
    
     <div id="about-container-top">

     <div id="intro-box"> 
        <p className="intro" id='whoami'> whoami </p>
        <p className="intro" id='fullstack'> <b> Full stack Develope</b>r</p>
        <p className="intro" id='about-line'> I bring ideas to life with code and creativity. <br /> Curious about emerging tech. </p>
        <p className="intro" id='stack'> I am primarily a web developer , who loves to explore different aspects in tech.
          <br />Previously , I've also been into creative roles like  <b>graphic designer and video editor.</b> 
          <br />Currently, I am pursuing my <b>Bachelor's of Technology</b> in Information Science in Bangalore, India.
        </p>
        <p className="intro" id='stack'> Please drop a message if you'd like to connect!</p>
        </div>
       <div id='astronaut-img'><img src="./astronaut.png" alt="" /></div>
                  
   </div>
    

    </div> 
   </section>
    </div>


  )
}
export default About;




 