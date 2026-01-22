import NavBar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import Home from './Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Socials from './components/Socials.jsx'
import Skills from './components/Skills.jsx'
import AppLayout from './components/AppLayout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <AppLayout>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/hero' element={ <Hero/>}/>
        <Route path='/skills' element={ <Skills/>}/>
        <Route path='/works' element={<Projects/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/socials' element={ <Socials/>}/>
      </Routes>
      </AppLayout>
   </>
 
  )
}

export default App
