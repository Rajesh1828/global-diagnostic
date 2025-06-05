import React from 'react'
import { assets } from '../../assets/assets'

const Daignostic = () => {
    return (
        <>
      {/* <hr className='w-20 m-8 justify-center items-center  md:w-13 border-2 border-black' /> */}

         
        <div className='flex md:flex-row md:h-[80vh] h-[600px] items-center w-full overflow-hidden relative mt-8 '>
          
            <img src={assets.d_img} className='w-full  ' alt="" />
            
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center md:justify-end  text-green-600 p-4'>
                <div className='flex flex-col w-full items-center md:w-1/2 gap-[65px]' >
                    <div className='flex  items-center gap-2'>
                        <hr className='w-8 md:w-13 border-2 border-orange-500' />
                        <h2 className='text-center text-2xl md:text-6xl font-bold uppercase text-orange-500 '>Scientific</h2>
                    </div>
                    <h1 className='text-right  text-xl md:text-6xl pb-14  font-bold uppercase '>Smart Diagnostics <br /> for Smarter Care</h1>
                    <p className='text-justify w-full md:w-2xl text-sm md:text-sm pt-4 font-semibold text-gray-700 z-20'>
                        At Best Diagnosis Services, we combine advanced technology with medical expertise to deliver fast,
                        accurate, and reliable
                        diagnostic results. Our smart solutions empower healthcare
                        providers and patients with the clarity they need for better,
                        more informed care decisions.
                    </p>
                    <div className='flex flex-col md:flex-row md:items-start  items-center justify-center gap-4'>
              <button className='bg-orange-400 text-white font-bold px-8 py-2 rounded mt-4 hover:bg-orange-600 transition duration-300 ease-in-out'>
                        Book Now
                    </button>
                    <img src={assets.dots} className='hidden md:block w-1/2  md:pl-[100px] overflow-hidden '  alt="" />

                    </div>
                    
                   
                </div>
            </div>

        </div>
        </>
    )
}

export default Daignostic