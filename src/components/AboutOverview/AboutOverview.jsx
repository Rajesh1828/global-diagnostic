import React from 'react'
import { assets } from '../../assets/assets'

const AboutOverview = () => {
    return (
        <div className='flex-flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 xl:px-48 w-full overflow-hidden'>
              <hr className='w-20 m-8 justify-center items-center  md:w-13 border-2 border-black' />
            <h2 className='text-3xl  text-center font-bold sm:text-4xl mb-4' >About Us</h2>
            <p className='text-lg md:text-center text-gray-700 text-justify   '>
                Welcome to our healthcare platform! We are dedicated to providing comprehensive and accessible healthcare services to our community. Our team of experienced professionals is committed to delivering high-quality care and support to all our patients.
            </p>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-3.5 md:gap-18 mt-6 text-black'>
                <img
                    src={assets.brand_img}
                    alt='brandImage'
                    className='w-full sm:w-1/2  md:w-3/4 max-w-lg' />

                <div className='flex flex-col items-center md:items-start mt-10 text-black'>
                    <div className='grid grid-cols-2 gap-6 md:gap-15 md:mt-29 w-full md:w-2/3 lg:w-2/3'>
                        <div>
                            <p className='font-medium text-black text-4xl'>10+</p>
                            <p>years of experience</p>
                        </div>
                        <div>
                            <p className='font-medium text-black text-4xl'>12+</p>
                            <p>projects completed</p>
                        </div>
                        <div>
                            <p className='font-medium text-black text-4xl'>25k+</p>
                            <p>happy clients</p>
                        </div>
                        <div>
                            <p className='font-medium text-black text-4xl'>29+</p>
                            <p>ongoing projects</p>
                        </div>

                    </div>
                    <p className='my-10 max-w-lg text-justify md:text-justify'>Accurate diagnosis is essential to identifying underlying conditions and guiding effective treatment. It requires deep insight, careful examination, and the ability to distinguish subtle variations in symptoms. A proper diagnosis not only helps prevent complications but also ensures that patients receive the care they truly need. Inaccurate or delayed diagnoses can lead to unnecessary suffering, which is why expertise, precision, and compassion are crucial throughout the diagnostic process..</p>
                    <button className='bg-orange-400 text-white font-bold px-8 py-2 rounded'>LearnMore</button>
                </div>
            </div>

        </div>
    )
}

export default AboutOverview