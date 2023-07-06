import React from 'react'
import { AnimatedTitle } from './AnimatedTitle'
import Reveal from './Reveal'

const AboutMe = () => {
  return (
    <section id="aboutme" className='flex flex-col gap-10 mb-20 mx-24'>
      <AnimatedTitle>About Me</AnimatedTitle>
      <div className="flex flex-col items-center">
        <div className="text-left leading-relaxed max-w-[70%]">
          <Reveal>
            <div className="flex flex-col gap-4 text-xl">
              <p>I'm a <span className="font-extrabold">Software Engineering</span> Undergraduate at <span className="font-extrabold">San Jose State University</span>. </p>
              <p>Throughout my college journey, I have been developing skills in <span className="font-extrabold">Full Stack Development</span> and experience in <span className="font-extrabold">A.I. based products</span>. I consistently build projects at <span className="font-extrabold">Hackathons</span> and contribute to <span className="font-extrabold">engineering club projects</span>.</p>
              <p>I'm currently a <span className="font-extrabold">Founding Software Developer</span> at <a href="https://useforward.app/" className="font-extrabold">Forward</a>, where we aim to help users with job seeking using our A.I. product to land their most suitable and desired jobs!</p>
            </div>

          </Reveal>
        </div>
      </div>


    </section>
  )
}

export default AboutMe