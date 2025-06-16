import React from 'react'
import { assets } from '../../assets/assets'

const Pharmacy_hero = () => {
  return (
    <div className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[250px]' 
    style={{backgroundImage:`url(${assets.pharmacy})`}}>
        <h2 className='pt-10 text-center text-orange-600 text-2xl sm:text-3xl md:text-4xl font-bold'>"Trusted Care, <span className='text-white'>Delivered with Precision."</span> 

</h2>
    </div>
  )
}

export default Pharmacy_hero