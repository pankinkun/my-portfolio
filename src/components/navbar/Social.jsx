import React from 'react'
import GitHub from '../.././assets/icons/github.png'
import Gmail from '../.././/assets/icons/gmail.png'
import LinkedIn from '../.././/assets/icons/linkedin.png'
import { motion } from 'framer-motion'
import SocialIcon from './SocialIcon'
import { useState, useEffect } from 'react'

const Social = () => {

  const social = [
    {
      url: 'https://www.linkedin.com/in/trique-nguyen/',
      icon: LinkedIn
    },
    {
      url: 'https://github.com/triquenguyen',
      icon: GitHub
    },
    {
      url: 'mailto:dung.n.nguyen@sjsu.edu',
      icon: Gmail
    }
  ]

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleItems.length < social.length) {
        setVisibleItems((prevVisible) => [...prevVisible, prevVisible.length]);
      } else {
        clearInterval(intervalId);
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [visibleItems]);

  return (
    <div className='flex flex-col gap-6 fixed left-0 bottom-0 md:left-8 md:bottom-8 p-2 border-t-black border-r-black border-l-slate-100 border-b-slate-100 lg:border-2'>
      {social.map((item, index) => (
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
          <SocialIcon key={index} url={item.url} icon={item.icon} />
        </motion.div>

      ))}
    </div>
  )
}

export default Social