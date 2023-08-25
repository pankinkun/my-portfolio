import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const SidebarIcon = ({ to, icon }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={1000}
      className='cursor-pointer hover:scale-110 active:scale-90'>
      <motion.img src={icon}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        alt='SidebarIcon'
        className='w-8 h-8' />
    </Link>
  )
}

export default SidebarIcon