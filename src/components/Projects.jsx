import React, { use } from 'react'
import './Projects.css'
import Projectcard from './Projectcard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Projects() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#projects-section", {
      opacity: 0,
      y: 10,
      scrollTrigger: {
        trigger: "#projects-section",
        start: "top 60%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".project-card", {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#projects-section",
        start: "top 60%",
        toggleActions: "play none none none",
      }
    });
  });
  return (
    <div className="projects-section" id="projects-section">
      <div className="projects-intro" id="projects-intro">PROJECTS</div>
    <Projectcard title="COUNTRIES API PROJECT" description="lorem ipsum" link1="https://smriti-coutntries-api.netlify.app/" link2="https://github.com/smritisingh21/countries-api-project" />
    <Projectcard title="FOCUS ON TODAY" description="Description for project 2" link1="https://focus-on-today-project-ss.netlify.app/" link2="https://github.com/smritisingh21/FocusProject"/>
    <Projectcard title="TIC TAC TOE" description="Description for project 3" link1="https://silver-paprenjak-775c2e.netlify.app" link2="https://github.com/user/project3"/>
    <Projectcard title="MY PORTFOLIO" description="Description for project 3" link1="https://silver-paprenjak-775c2e.netlify.app" link2="https://github.com/user/project3"/>
    <Projectcard title="PROJECT 5" description="Description for project 3" link1="https://silver-paprenjak-775c2e.netlify.app" link2="https://github.com/user/project3"/>
    <Projectcard title="PROJECT 6" description="Description for project 3" link1="https://silver-paprenjak-775c2e.netlify.app" link2="https://github.com/user/project3"/>
    </div>
  )
}
