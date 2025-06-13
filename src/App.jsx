import  './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Socials from './components/Socials.jsx'
import Skills from './components/Skills.jsx'

function App() {

  return (
    <>

    <div>  
      <NavBar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>

      <h1>Find me here</h1>
      <Socials/>
   </div>
   </>
 
  )
}

export default App
