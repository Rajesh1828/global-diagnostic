import React from 'react'
import { assets } from '../../assets/assets'

const PrizingCards = () => {
  return (
    <>
    <div className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px]  h-[250px] 'style={{backgroundImage:`url(${assets.d_hero})`}}>
        <h2 className='text-orange-600 pt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center'>"Stay Ahead of Illness – <span className='text-white'> Unlock Smart Health Packages Now!" </span>

</h2>
        <div className='bg-orange-100'>


        </div>
    </div>
     
    </>
  )
}

export default PrizingCards