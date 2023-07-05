import React from 'react'
import SkillCard from './SkillCard'
import { AnimatedTitle } from './AnimatedTitle'

const Skill = () => {
  const skills = [
    {
      type: 'Languages',
      skills: ["Java", 'JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS', 'Git', 'SQL', 'MIPS (Assembly)']
    },
    {
      type: 'Libraries',
      skills: ["React", "Tailwind CSS", "Framer Motion", "Redux", "NextAuth", "Auth0", "Discord API", "Chrome API"]
    },
    {
      type: 'Frameworks',
      skills: ["Next.js", "Flask", "Express", "Node.js"]
    },
    
    {
      type: 'Others',
      skills: ['Agile / Scrum', 'GitHub', 'Vite', 'Docker', 'Vercel',"PostgreSQL", "Supabase", "Prisma", "MongoDB", "MySQL"]
    },
  ]
  return (
    <section id="skills" className='flex flex-col gap-10 mb-20 mx-24'>
      <AnimatedTitle>Skills</AnimatedTitle>
      <div className='flex flex-wrap gap-12 justify-center w-[100%]'>
        {skills.map((skill) => (
          <SkillCard  type={skill.type} skills={skill.skills} />
        ))}
      </div>
    </section>
  )
}

export default Skill