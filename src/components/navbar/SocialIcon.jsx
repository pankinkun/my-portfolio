import React from 'react'
import { motion } from 'framer-motion'

const SocialIcon = ({ url, icon }) => {
  return (
    <a
      href={url}
      target='_blank'
      className='cursor-pointer'>
      <motion.img src={icon}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        alt='Social'
        className='w-8 h-8'
      />
    </a>
  )
}

export default SocialIcon