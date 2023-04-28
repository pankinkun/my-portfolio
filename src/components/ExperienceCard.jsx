import React from 'react'
import Project from '.././assets/software.png'

const ExperienceCard = ({ company, title, website, description, photo }) => {
  return (
    <div>
      <div className='border-2 md:w-[36rem] sm:w-[20rem] border-black flex gap-4 flex-col'>
        <img src={photo} />
        <h1 className="font-black text-2xl">{company}</h1>
        <h1 className="font-md text-lg border-2 border-black border-x-transparent p-4 font-semibold">{title}</h1>
        <h1 className="font-md text-lg px-2 ">{description}</h1>
        <div className='flex gap-6 ml-4 mb-4 border-t-black border-r-black border-l-white border-b-white border-2 max-w-fit p-2'>
          <a href={website} target='_blank' ><img src={Project} className='w-8 h-8 hover:scale-110 active:scale-9' /></a>
        </div>
    </div>
    </div>
  )
}

export default ExperienceCard