import React from 'react'
import Sidebar from './Sidebar'
import Social from './Social'

const Home = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8'>
      <h1 className="text-6xl">Hi, I'm <span className="font-black">Trique Nguyen</span></h1>
      <p className="text-xl max-w-3xl">Software Engineering Undergraduate at San Jose State University</p>
    </div>
  )
}

export default Home