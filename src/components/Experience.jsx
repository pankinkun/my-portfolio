import React from 'react'
import forward from '.././assets/forward.png'
import ExperienceCard from './ExperienceCard'
import sce from '.././assets/sce.png'
import { AnimatedTitle } from './AnimatedTitle'

const Experience = () => {
  const experience = [
    {
      company: 'Forward (SpartUp Incubator Member)', 
      title: 'Founding Software Developer',
      website: 'https://useforward.app/',
      description: 'Your AI personal assistant in the job hunt and skill-building!',
      photo : forward
    },
    {
      company: 'Software & Computer Engineering Society', 
      title: 'Development Team Officer',
      website: 'https://sce.sjsu.edu/',
      description: 'The largest engineering club in San Jose State University!',
      photo : sce
    }
  ]
  return (
    <section id="experience" className='flex flex-col gap-10 mb-10 mx-24'>
      <AnimatedTitle>Experience</AnimatedTitle>
      <div className="flex flex-wrap justify-center gap-8">
        {experience.map((experience) => (
          <ExperienceCard company={experience.company} title={experience.title} website={experience.website} description={experience.description} photo={experience.photo} />
        ))}
          
      </div>
    </section>
  )
}

export default Experience