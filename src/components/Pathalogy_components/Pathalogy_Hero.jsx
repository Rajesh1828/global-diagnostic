import React from 'react'
import { assets } from '../../assets/assets'

const Pathalogy_Hero = () => {
  return (
    <div className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[300px] 'style={{backgroundImage:`url(${assets.pathology})`}}>
        <h2 className='text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold'>"Your Health Decoded, <span className='text-orange-400'>One Test at a Time."</span> 
</h2>
    </div>
  )
}

export default Pathalogy_Hero