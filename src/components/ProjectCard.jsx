import React from 'react'
import GitHub from '.././assets/github.png'
import Project from '.././assets/software.png'

const ProjectCard = ({ name, description, photo, demo, github, stack }) => {
  return (
    <div className='border-2 md:w-[36rem] sm:w-[20rem] border-black flex gap-4 flex-col'>
      <img src={photo} alt={name} className='' />
      <h1 className="font-black text-2xl">{name}</h1>
      <h1 className="font-md text-lg border-2 border-black border-x-transparent p-4">{stack}</h1>
      <h1 className="font-md text-lg px-2">{description}</h1>
      <div className='flex gap-6 ml-4 mb-4 border-t-black border-r-black border-l-slate-100 border-b-slate-100 border-2 max-w-fit p-2'>
        <a href={demo} target='_blank' ><img src={Project} className='w-8 h-8 hover:scale-110 active:scale-9' /></a>
        <a href={github} target='_blank' ><img src={GitHub} className='w-8 h-8 hover:scale-110 active:scale-9' /></a>
      </div>
    </div>
  )
}

export default ProjectCard