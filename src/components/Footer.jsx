import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './utils/Reveal'

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center p-8">
      <Reveal>
        Developed with care by Trique Nguyen &copy; {new Date().getFullYear()}
      </Reveal>
    </div>
  )
}

export default Footer