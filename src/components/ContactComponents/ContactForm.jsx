import React from 'react'
import { assets } from '../../assets/assets'

const ContactForm = () => {
  return (
    <>
    <h2 className='text-center text-2xl text-orange-400 sm:text-3xl md:text-4xl font-bold py-8'>Every question matters—because your health does too.</h2>
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600">Reach out for personalized guidance, test details, or expert insights.</div>
		</div>
		<img src={assets.contact_2} alt="" className=" h-full w-full " />
	</div>
	<form noValidate="" className="space-y-6 text-orange-400">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 border rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="number" className="text-sm">Phone</label>
			<input id="number" type="number" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className=" cursor-pointer w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-400 dark:text-gray-50">Send Message</button>
	</form>
</div>

    </>
  )
}

export default ContactForm