import React from 'react'
import Project from '.././assets/software.png'
import Work from '.././assets/work.png'
import Skills from '.././assets/skills.png'
import CodingSkills from '.././assets/codingskills.png'
import Home from '.././assets/home.png'
import { Link } from 'react-scroll'
import aboutme from '.././assets/aboutme.png'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import SidebarIcon from './SidebarIcon'


const Sidebar = () => {

  const links = [
    {
      to: 'home',
      icon: Home
    },
    {
      to: 'aboutme',
      icon: aboutme
    },
    {
      to: 'skills',
      icon: CodingSkills
    },
    {
      to: 'projects',
      icon: Project
    },
    {
      to: 'experience',
      icon: Work
    },
  ]

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleItems.length < links.length) {
        setVisibleItems((prevVisible) => [...prevVisible, prevVisible.length]);
      } else {
        clearInterval(intervalId);
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [visibleItems]);

  return (
    <div className='flex flex-col gap-6 fixed top-10 right-8 p-2 border-b-black border-l-black border-t-slate-100 border-r-slate-100 border-2'>

      {links.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={
            visibleItems.includes(index)
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <SidebarIcon key={index} to={item.to} icon={item.icon} />
        </motion.div>

      ))}
    </div>
  )
}

export default Sidebar