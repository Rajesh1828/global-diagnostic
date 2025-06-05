import React from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {
    return (
        <div className='min-h-screen flex items-center justify-center object-cover bg-cover bg-center relative'
            style={{ backgroundImage: `url(${assets.contact})` }}
        >
            <div className='bg-opacity-80 backdrop-blur-md p-20 rounded-lg shadow-lg max-w-full mx-11'>
                <h2 className='text-3xl font-bold text-center text-green-500 mb-6'>Book Appointment</h2>
                <form className='space-y-4'>
                    <div className='flex  w-full gap-4'>
                        <input type='text' placeholder='Your Name' className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' />
                        <input type='email' placeholder='Your Email' className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' />
                    </div>
                    <input type='number' placeholder='Your number' className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' />

                    <textarea placeholder='Your Message' className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32'></textarea>
                    <button type='submit' className='cursor-pointer w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition duration-300'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact