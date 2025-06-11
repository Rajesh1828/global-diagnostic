import React from 'react'
import { assets } from '../../assets/assets'

const Micro_Biology = () => {
  return (
    <div className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[300px]' style={{backgroundImage:`url(${assets.micro_biology})`}}>
         <h2 className='text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold'>"Targeting Infections, <span className='text-orange-400'>Empowering Recovery." </span> 

</h2>
    </div>
  )
}

export default Micro_Biology