import React from 'react'
import Project from '.././assets/software.png'
import Work from '.././assets/work.png'
import Skills from '.././assets/skills.png'
import CodingSkills from '.././assets/codingskills.png'
import { Link } from 'react-scroll'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-6 ml-auto fixed top-10 right-8 min-h-fit min-w-fit p-2 border-b-black border-l-black border-t-white border-r-white border-2'>
      <Link
        to='skills'
        smooth={true}
        duration={1000}
        className='cursor-pointer'>
        <div className="group inline-block">
          <img src={CodingSkills}
            alt='Skills'
            className='w-8 h-8 hover:scale-110 active:scale-90' />
        </div>

      </Link>

      <Link
        to='projects'
        smooth={true}
        duration={1000}
        className='cursor-pointer'>
        <div className="group inline-block">
          <img src={Project}
            alt='Project'
            className='w-8 h-8 hover:scale-110 active:scale-9' />
        </div>
      </Link>

      <Link
        to='experience'
        smooth={true}
        duration={1000}
        className='cursor-pointer'>
        <div className="group inline-block">
          <img src={Work}
            alt='experience'
            className='w-8 h-8 hover:scale-110 active:scale-9' />
        </div>

      </Link>

    </div>
  )
}

export default Sidebar