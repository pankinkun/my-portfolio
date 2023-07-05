import React from 'react'
import GitHub from '.././assets/github.png'
import Gmail from '.././assets/gmail.png'
import LinkedIn from '.././assets/linkedin.png'
import { motion } from 'framer-motion'

const Social = () => {
  return (
    <div className='flex flex-col gap-6 fixed bottom-10 p-2 border-t-black border-r-black border-l-slate-100 border-b-slate-100 border-2'>
      <a
        href='https://www.linkedin.com/in/trique-nguyen/'
        target='_blank'
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={LinkedIn}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          alt='LinkedIn'
          className='w-8 h-8'
        />
      </a>

      <a
        href='https://github.com/triquenguyen'
        target='_blank'
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={GitHub}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          alt='GitHub'
          className='w-8 h-8'
        />
      </a>
      <a
        href='mailto:dung.n.nguyen@sjsu.edu'
        target='_blank'
        className='cursor-pointer hover:scale-110 active:scale-90'>
        <motion.img src={Gmail}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          alt='Gmail'
          className='w-8 h-8'
        />
      </a>
    </div>
  )
}

export default Social