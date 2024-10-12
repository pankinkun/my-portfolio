import React from 'react'

const SkillCard = ({ type, skills }) => {
  return (
    <div>
      <div className='border-2 border-black md:w-[24rem] w-[16rem] text-lg flex gap-4 flex-col justify-center items-center'>
        <h1 className="font-black pt-4">{type}</h1>
        <div className='flex flex-wrap gap-4 border-t-black border-2 p-4'>
          {skills.map((skill) => (
              <h1 className="font-md">{skill}</h1>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard