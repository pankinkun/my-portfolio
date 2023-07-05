import React from 'react'
import Project from '.././assets/software.png'
import Work from '.././assets/work.png'
import Skills from '.././assets/skills.png'
import CodingSkills from '.././assets/codingskills.png'
import Home from '.././assets/home.png'
import { Link } from 'react-scroll'
import aboutme from '.././assets/aboutme.png'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-6 fixed top-10 right-8 p-2 border-b-black border-l-black border-t-slate-100 border-r-slate-100 border-2'>

      <Link
        to='home'
        smooth={true}
        duration={1000}
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={Home}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          alt='Home'
          className='w-8 h-8' />
      </Link>

      <Link
        to='aboutme'
        smooth={true}
        duration={1000}
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={aboutme}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
          alt='aboutme'
          className='w-8 h-8' />
      </Link>

      <Link
        to='skills'
        smooth={true}
        duration={1000}
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={CodingSkills}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
          alt='Skills'
          className='w-8 h-8' />

      </Link>

      <Link
        to='projects'
        smooth={true}
        duration={1000}
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={Project}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
          alt='Project'
          className='w-8 h-8' />
      </Link>

      <Link
        to='experience'
        smooth={true}
        duration={1000}
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={Work}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
          alt='experience'
          className='w-8 h-8' />

      </Link>

    </div>
  )
}

export default Sidebar