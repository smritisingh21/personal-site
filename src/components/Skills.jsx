import React, { use } from 'react'
import styles from'./Skills.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';

function Skills (){
    useGSAP(()=>{
    gsap.from("#skills-section ", {
        opacity: 0,
        y: 10,
        scrollTrigger: {
            trigger: "#skills-section ",
            start: "top 30%",
            toggleActions: "play none none none",
        }
 })
    gsap.from("img",{
        opacity: 0,
        y: 10,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#skills-container",
            start: "top 90%",
            toggleActions: "play none none none",
        }
    })
})
  return (
    <>
    <div className={styles.skillssection} id="skills-section">
         <div className={styles.skillsintro} id="skillsintro">TOOLS AND TECHNOLOGIES</div>
         <p className={styles.statement}>Apart from the tools mentioned below , I am always open to learn new technologies.</p>

    <div className={styles.container} id="skills-container">
    <div className={styles.box} id='box1'><img src="node-js.png" alt="" /></div>
    <div className={styles.box} id='box2'><img src="github.png" alt="" /></div>
    <div className={styles.box} id='box3'><img src="react.svg" alt="" /></div> 
    <div className={styles.box} id='box4'><img src="javascript.webp" alt="" /></div>
    <div className={styles.box} id='box5'><img src="monog.png" alt="" /></div>
    <div className={styles.box} id='box6'><img src="typescript.webp" alt="" /></div>
    <div className={styles.box} id='box7'><img src="framer.jpg" alt="" /></div>
    <div className={styles.box} id='box8'><img src="docekr.png" alt="" /></div>
    <div className={styles.box} id='box9'><img src="next.png" alt="" /></div>    
    <div className={styles.box} id='box10'><img src="tailwind.png" alt="" /></div>
    <div className={styles.box} id='box11'><img src="figma-logo-512.webp" alt="" /></div>
    <div className={styles.box} id='box12'><img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="" /></div>
    </div>
    </div>
  </>

  )
}
  

export default Skills;
