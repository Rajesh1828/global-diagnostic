import React from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted");
    }

    return (
        <div
            className='min-h-screen flex items-center justify-center bg-cover bg-center relative'
            style={{ backgroundImage: `url(${assets.contact})` }}
        >
            <div className=' bg-opacity-80 backdrop-blur-md p-6 md:p-20 rounded-lg shadow-lg max-w-full mx-6'>
                <h2 className='text-3xl font-bold text-center text-green-500 mb-6'>Book Appointment</h2>
                <form onSubmit={handleSubmit} className='space-y-4 max-w-4xl'>
                    <div className='flex flex-col md:flex-row w-full gap-4'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            required
                            className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                            aria-label="Your Name"
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            required
                            className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                            aria-label="Your Email"
                        />
                    </div>
                    <input
                        type='tel'
                        name='phone'
                        placeholder='Your Number'
                        required
                        className='w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                        aria-label="Your Phone Number"
                    />

                    <textarea
                        name='message'
                        placeholder='Your Message'
                        required
                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32'
                        aria-label="Your Message"
                    ></textarea>

                    <button
                        type='submit'
                        className='cursor-pointer w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition duration-300'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
