import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import PPP from '../assets/ppp.png'
import memgen from '../assets/memgen.png'
import sinkorswim from '../assets/sinkorswim.png'
import discordbot from '../assets/discordbot.png'

const Project = () => {

  const projects = [
    {
      name: "MemGEN",
      description: "A personal-customized intelligent cover letter creator using vector database, large language models and embeddings",
      photo: memgen,
      demo: "https://memgen.projects.art3m1s.me/",
      github: "https://github.com/triquenguyen/MemGen",
      stack: "Next.js, Auth0, Express, Firebase, Google Cloud, Milvus, Zilliz, OpenAI, Cohere"
    },
    {
      name: "Paddy Plant Prognosis",
      description: "A web app applied computer vision technology assists rice farmers in detecting diseases in their paddy crops",
      photo: PPP,
      demo: "https://www.paddyplantprognosis.tech/",
      github: "https://github.com/triquenguyen/PaddyPlantPrognosis",
      stack: "React, Vite, Tailwind CSS, Flask, TensorFlow"
    },
    {
      name: "LeetCode Discord Bot",
      description: "A Discord Bot that challenges 1900+ SJSU students to compete in solving daily random LeetCode problems",
      photo: discordbot,
      demo: "https://discord.com/oauth2/authorize?client_id=932270316867186729&permissions=314368&scope=bot",
      github: "https://github.com/triquenguyen/LeetCode-Bot",
      stack: "Python, GraphQL, Discord API"
    },
    {
      name: "Sink Or Swim",
      description: "A web app applied computer vision technology assists rice farmers in detecting diseases in their paddy crops",
      photo: sinkorswim,
      demo: "https://sinkorswim.vercel.app/",
      github: "https://github.com/triquenguyen/sink-or-swim",
      stack: "Next.js, Tailwind CSS, Framer Motion, TypeScript, Flask, TensorFlow"
    },

  ]

  return (
    <section id="projects" className='flex flex-col gap-10 mb-20 mx-24'>
      <h1 className='text-4xl text-left font-black p-2 border-2 border-b-black border-r-black border-l-slate-100 border-t-slate-100 max-w-fit'>Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              photo={project.photo}
              demo={project.demo}
              github={project.github}
              stack={project.stack}
            />

        ))}
      </div>

    </section>
  )
}

export default Project