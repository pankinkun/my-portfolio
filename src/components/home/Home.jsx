import React from 'react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <section id="home">
      <div className='h-screen flex flex-col items-center justify-center gap-16'>
        <h1 className="text-6xl">Hi, I'm <span className="font-black pb-4 pr-4 lg:border-2 border-b-black border-r-black border-l-slate-100 border-t-slate-100 md:border-0 max-w-fit">Trique Nguyen</span></h1>
        <div className="text-xl max-w-3xl">
          <Typewriter

            options={{
              strings: 'A Research Assistant of <u><a href="https://discdd.net/" target="_blank" rel="noreferrer">DiscDD.net</a></u> @ SJSU CS Systems Group',
              autoStart: true,
              delay: 50,
            }}
          />
        </div>

      </div>
    </section>

  )
}

export default Home