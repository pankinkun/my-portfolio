import React from 'react'
import Project from '../.././assets/icons/software.png'

const ExperienceCard = ({ company, title, website, description, photo }) => {
  return (
    <div>
      <div className='border-2 md:w-[24rem] sm:w-[20rem] border-black flex gap-4 flex-col text-lg'>
        <img src={photo} height={300}/>
        <h1 className="font-black">{company}</h1>
        <h1 className="font-md border-2 border-black border-x-transparent p-4 font-semibold">{title}</h1>
        <h1 className="font-md px-2 ">{description}</h1>
        <div className='flex gap-6 ml-4 mb-4 border-t-black border-r-black border-l-slate-100 border-b-slate-100 border-2 max-w-fit p-2'>
          <a href={website} target='_blank' ><img src={Project} className='w-8 h-8 hover:scale-110 active:scale-9' /></a>
        </div>
    </div>
    </div>
  )
}

export default ExperienceCard