import styles from './Socials.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Socials() {
  gsap.registerPlugin(ScrollTrigger);

 useGSAP(() => {
  gsap.from(".icon", {
    y: 50,
    opacity: 0,
    delay:0,
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#hero-text",
      start: "top 60%",
      toggleActions: "play none none reverse",
    }
    
  });
}, []);
  return (
    <>
      <div id="contact-box">
        <div id={styles.socials}>
          <a id="contact-icon" href="https://www.linkedin.com/in/smriti-singh-a06685257/">
            <img className={styles.icon} src="./linkedin.png"></img>
          </a>
          <a id="contact-icon" href ="https://x.com/sillymilllly">
            <img className={styles.icon} src="./Twitter.png"></img>
          </a>
          <a id="contact-icon" href ="https://mail.google.com/mail/u/2/#inbox">
            <img className={styles.icon} src="./mail.png"></img>
          </a>
          <a id="contact-icon" href ="https://www.instagram.com/smriti.made.these/">
            <img className={styles.icon} src="./Instagram.png"></img>
        </a>
    </div>
    </div>
    </>
  );
}

export default Socials;