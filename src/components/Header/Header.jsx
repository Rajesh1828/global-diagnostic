import React from 'react';
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/Hero_page.png')" }} >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, }}
        viewport={{ once: true }}
        exit={{ opacity: 0, y: -100 }}
        className='container text-center mx-auto px-6 py-4 md:px-20 '>
        <h2 className='text-4xl font-bold text-slate-200 sm:text-5xl md:text-[59px] inline-block pt-20 mx-w-3xl jost'>
          Connecting the World Through Precision Diagnostics.</h2>
        <div className='space-x-6 mt-16'>
          <a href="#"
            className=' cursor-pointer bg-green-50 border border-amber-500 text-black px-6 py-3 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
            Get Started →
          </a>
          <a href="#"
            className=' border-1 cursor-pointer bg-amber-500 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
            Book Now
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
