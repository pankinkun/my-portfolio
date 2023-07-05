import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Sidebar from './components/Sidebar'
import Social from './components/Social'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {

  return (
    <div className='lg:p-10 sm:p-4 bg-slate-100'>
      <Social />
      <Sidebar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
