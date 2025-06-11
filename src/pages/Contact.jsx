import React from 'react'
import { assets } from '../assets/assets'
import ContactForm from '../components/ContactComponents/ContactForm'

const Contact = () => {
  return (
    <>
        <div className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[300px] 'style={{backgroundImage:`url(${assets.contact_hero})`}}>
            <h2 className='text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold'>We’re here to help decode your health <span className='text-orange-400'>—one test, one answer at a time.

</span> 
    </h2>
        </div>
        <ContactForm/>
 
        </>
  )
}

export default Contact