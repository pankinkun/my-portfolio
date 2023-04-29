import React from 'react'
import SkillCard from './SkillCard'

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
      <h1 className='text-4xl text-left p-2 border-2 border-b-black border-r-black border-l-slate-100 border-t-slate-100 max-w-fit font-black'>Skills</h1>
      <div className='flex flex-wrap gap-12 justify-center w-[100%]'>
        {skills.map((skill) => (
          <SkillCard  type={skill.type} skills={skill.skills} />
        ))}
      </div>
    </section>
  )
}

export default Skill