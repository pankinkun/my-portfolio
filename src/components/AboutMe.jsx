import React from 'react'

const AboutMe = () => {
  return (
    <section id="aboutme" className='flex flex-col gap-10 mb-20 mx-24'>
      <h1 className='text-4xl text-left p-2 border-2 border-b-black border-r-black border-l-slate-100 border-t-slate-100 max-w-fit font-black'>About Me</h1>
      <div className="text-xl text-left flex flex-col gap-4 leading-relaxed">
        <p>I'm a Software Engineering Undergraduate at San Jose State University. </p>
        <p>Throughout my college journey, I have been developing skills in Full Stack Development and experience in A.I. based products. I consistently build projects at Hackathons and contribute to engineering club projects.</p>
        <p>I'm currently a Founding Software Developer at <a href="https://useforward.app/" className="font-extrabold">Forward</a>, where we aim to help users with job seeking using our A.I. product to land their most suitable and desired jobs!</p>
      </div>

    </section>
  )
}

export default AboutMe