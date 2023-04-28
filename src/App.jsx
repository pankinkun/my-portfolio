import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Skill from './components/Skill'
import Project from './components/Project'
import Experience from './components/Experience'
import Sidebar from './components/Sidebar'
import Social from './components/Social'

function App() {

  return (
    <div className='p-10'>
      <Social />
      <Sidebar />
      <Home />
      <Skill />
      <Project />
      <Experience />
    </div>
  )
}

export default App
