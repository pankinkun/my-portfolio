import React from 'react'
import SkillCard from './SkillCard'
import { AnimatedTitle } from '../utils/AnimatedTitle.jsx'
import Reveal from '../utils/Reveal'

const Skill = () => {
  const skills = [
    {
      type: 'Languages',
      skills: ["Java", 'JavaScript', 'Python', "C / C++", 'TypeScript', 'HTML', 'CSS', 'Git', 'SQL', 'Dart', 'Bash', 'MIPS (Assembly)']
    },
    {
      type: 'Web Frameworks',
      skills: ["React", 'Vue', "Tailwind CSS", "Framer Motion", "Redux", "NextAuth / Auth.js", "Next.js", "Flutter", "Flask", "Express.js", "Node.js"]
    },
    // {
    //   type: '',
    //   skills: ["Next.js", "Flutter", "Flask", "Express.js", "Node.js"]
    // },
    {
      type: 'Databases & Cloud',
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Vercel", "Firebase", "Supabase", "PlanetScale", "Docker"]
    },
    {
      type: 'Others',
      skills: ['Agile / Scrum', "DevOps", "REST API", "GraphQL", "GitHub", "Figma", "Postman", "Android Studio", "Chrome API", "Discord API"]
    },
  ]
  return (
    <section id="skills" className='flex flex-col gap-6 md:gap-16 md:mb-32 md:mx-24 mt-6 md:mt-0'>
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