import NavBar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Socials from './components/Socials.jsx'
import Skills from './components/Skills.jsx'
import AppLayout from './components/AppLayout.jsx'

function Home() {
  return (
    <>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Socials/>
   </>
 
  )
}

export default Home;
