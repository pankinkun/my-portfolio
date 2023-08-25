import React from 'react'
import SkillCard from './SkillCard'
import { AnimatedTitle } from '../utils/AnimatedTitle.jsx'
import Reveal from '../utils/Reveal'

const Skill = () => {
  const skills = [
    {
      type: 'Languages',
      skills: ["Java", 'JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS', 'Git', 'SQL', 'Dart', 'MIPS (Assembly)']
    },
    {
      type: 'Libraries',
      skills: ["React", "Tailwind CSS", "Framer Motion", "Redux", "Auth.js", "Auth0", "Discord API", "Chrome API"]
    },
    {
      type: 'Frameworks',
      skills: ["Next.js", "Flutter", "Flask", "Express", "Node.js"]
    },
    {
      type: 'Databases',
      skills: ["Supabase", 'Vercel', "PostgreSQL", "Prisma", "MongoDB", "MySQL"]
    },
    {
      type: 'Others',
      skills: ['Agile / Scrum', 'GitHub', 'Vite', 'Docker']
    },
  ]
  return (
    <section id="skills" className='flex flex-col gap-6 md:gap-10 md:mb-20 md:mx-24'>
      <AnimatedTitle>Skills</AnimatedTitle>
      <div className='flex flex-wrap gap-12 justify-center w-[100%]'>
        {skills.map((skill) => (
          <Reveal>
            <SkillCard type={skill.type} skills={skill.skills} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skill