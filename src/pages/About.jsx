import React from 'react'
import { assets } from '../assets/assets'
import AboutContent from '../components/AboutComponents/AboutContent'



const About = () => {
  return (
    <>
      <div className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[300px] ' style={{ backgroundImage: `url(${assets.about})` }}>
        <h2 className='text-center pt-10 text-orange-600 text-2xl sm:text-3xl md:text-4xl font-bold'>"Your Health Decoded, <span className='text-white'>One Test at a Time."</span>
        </h2>
      </div>
<AboutContent/>
    </>

  )
}

export default About