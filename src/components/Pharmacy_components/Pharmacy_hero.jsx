import React from 'react'
import { assets } from '../../assets/assets'

const Pharmacy_hero = () => {
  return (
    <div className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[300px]' 
    style={{backgroundImage:`url(${assets.pharmacy})`}}>
        <h2 className='text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold'>"Trusted Care, <span className='text-orange-400'>Delivered with Precision."</span> 

</h2>
    </div>
  )
}

export default Pharmacy_hero