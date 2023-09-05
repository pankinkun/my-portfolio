import React from 'react'
import forward from '../.././assets/experience/forward.png'
import ExperienceCard from './ExperienceCard'
import sce from '../.././assets/experience/sce.png'
import { AnimatedTitle } from '../utils/AnimatedTitle'
import Reveal from '../utils/Reveal'

const Experience = () => {
  const experience = [
    {
      company: 'Forward (SpartUp Incubator Member)',
      title: 'Founding Software Developer',
      website: 'https://useforward.app/',
      description: 'Your AI personal assistant in the job hunt and skill-building!',
      photo: forward
    },
    {
      company: 'Software & Computer Engineering Society',
      title: 'Development Team Officer',
      website: 'https://sce.sjsu.edu/',
      description: 'The largest engineering club in San Jose State University!',
      photo: sce
    }
  ]
  return (
    <section id="experience" className='flex flex-col gap-6 md:gap-10 mx-16 md:mb-20 md:mx-24 mt-6 md:mt-0'>
      <AnimatedTitle>Experience</AnimatedTitle>
      <Reveal>
        <div className="flex flex-wrap justify-center gap-8">
          {experience.map((experience, index) => (
            <ExperienceCard
              key={index}
              company={experience.company}
              title={experience.title}
              website={experience.website}
              description={experience.description}
              photo={experience.photo} 
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Experience