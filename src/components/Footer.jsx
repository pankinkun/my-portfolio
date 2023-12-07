import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './utils/Reveal'
import PoweredByVercel from 'powered-by-vercel'


const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center p-8 gap-4">
      <Reveal>
        Developed with care by Trique Nguyen &copy; {new Date().getFullYear()}
      </Reveal>
      <PoweredByVercel
        utmSource="my-source"
        target="_blank"
        rel="noopener noreferrer"
        svgProps={{
          width: 150,
        }}
      />
    </div>
  )
}

export default Footer