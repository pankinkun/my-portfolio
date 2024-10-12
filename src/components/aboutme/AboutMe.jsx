import React from 'react'
import { AnimatedTitle } from '../utils/AnimatedTitle'
import Reveal from '../utils/Reveal'

const AboutMe = () => {
  return (
    <section id="aboutme" className='flex flex-col gap-6 md:gap-16 md:mb-32 md:mx-24 text-lg'>
      <AnimatedTitle>About Me</AnimatedTitle>
      <div className="flex flex-col items-center">
        <div className="text-left leading-relaxed max-w-[70%]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p>I'm a <span className="font-extrabold">Software Engineering</span> Undergraduate at <span className="font-extrabold">San Jose State University</span>. </p>
              <p>Throughout my college journey, I have been developing skills in <span className="font-extrabold">Full Stack Development</span> and experience in <span className="font-extrabold">A.I. based products</span>. I consistently build projects at <span className="font-extrabold">Hackathons</span> and contribute to <span className="font-extrabold">engineering club projects</span>.</p>
              <p>I was a <span className="font-extrabold">Founding Software Developer</span> at <u><a href="https://useforward.app/">Forward AI</a></u>, where we aim to help users with job seeking using our A.I. product to land their most suitable and desired jobs!</p>
              <p>Recently, Recently, I have been assisting <b>Dr. Ben Reed</b> in developing the <b>Disconnected Data Distribution</b> system (<u><a href="https://discdd.net/" target="_blank" rel="noreferrer">DiscDD.net</a></u>) that brings internet services to disconnected regions on <b>Android networks</b></p>
            </div>

          </Reveal>
        </div>
      </div>


    </section>
  )
}

export default AboutMe