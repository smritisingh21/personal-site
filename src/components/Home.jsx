import React, {useRef } from 'react'
import './Home.css'
import './NavBar.css'
import Socials from './Socials';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const gsapRef= useRef();

  useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

    gsap.to(gsapRef.current, {
      opacity:0.6,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gsapRef.current,
        start: "top 80%",
      }
    });

    gsap.from('.name', {
      y: 50,
      duration: 1,
      opacity: 0,
      ease: "slow",
      stagger: 1,
      scrollTrigger: {
        trigger: gsapRef.current,
        start: "top 80%",
      }
    });
       gsap.from('#hero-text', {
        y: 50,
        duration: 1,
        opacity: 0,
        ease: "slow",
        scrollTrigger: {
          trigger: gsapRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })

  }, [gsapRef]);
  return (
    <>
        <section id="hero-section">
          {/* <img src="fantasy-style-galaxy-background.jpg" alt="" id='bg'/> */}
          <video src="planet.mp4" autoPlay loop muted id='bg' ></video>
            {/* <img  ref={gsapRef}id="grad-ball1"src="public/moon.png" alt="" /> */}
            {/* <img ref={gsapRef}id="grad-ball2"src="public/earth.png" alt="" /> */}

          <div id="hero-text">  
            <div id="heading">Welcome to the space of<br/><span className="name">SMRITI SINGH </span>
              <p id='sub-heading'>I make pixel-perfect websites!</p></div>
            {/* <a id="hire-button" href="#hire-me-text">Hire me</a> */}
            <Socials/>
        </div>
     </section>

     </>
  );
}
export default Home;