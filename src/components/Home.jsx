import React from 'react'
import Sidebar from './Sidebar'
import Social from './Social'

const Home = () => {
  return (
    <section id="home">
      <div className='h-screen flex flex-col items-center justify-center gap-12'>
        <h1 className="text-6xl">Hi, I'm <span className="font-black pb-4 pr-4 border-2 border-b-black border-r-black border-l-white border-t-white max-w-fit'">Trique Nguyen</span></h1>
        <p className="text-xl max-w-3xl">A thriving student with a passion for developing tools to help the world!</p>
      </div>
    </section>

  )
}

export default Home