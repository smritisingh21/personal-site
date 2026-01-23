import NavBar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Socials from './components/Socials.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

function Home() {
  return (
    <>
            <Hero/>
            <Education/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Socials/>

   </>
 
  )
}

export default Home;
