import React from 'react'
import GitHub from '.././assets/github.png'
import Gmail from '.././assets/gmail.png'
import LinkedIn from '.././assets/linkedin.png'

const Social = () => {
  return (
    <div className='flex flex-col gap-6 fixed bottom-10 p-2 border-t-black border-r-black border-l-slate-100 border-b-slate-100 border-2'>
      <a href='https://www.linkedin.com/in/trique-nguyen/' target='_blank' className='cursor-pointer hover:scale-110 active:scale-90'><img src={LinkedIn} alt='LinkedIn' className='w-8 h-8' /></a>
      <a href='https://github.com/triquenguyen' target='_blank'><img src={GitHub} alt='GitHub' className='w-8 h-8 hover:scale-110 active:scale-90' /></a>
      <a href='mailto:dung.n.nguyen@sjsu.edu' target='_blank'><img src={Gmail} alt='Gmail' className='w-8 h-8 hover:scale-110 active:scale-90' /></a>
    </div>
  )
}

export default Social