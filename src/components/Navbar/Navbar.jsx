import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { Phone, ChevronDown } from 'lucide-react'; // You can use any icon lib


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full z-50 fixed top-0 left-0 right-0 '>
      <div className='bg-white text-black py-5 sm:px-12 sm:py-4 px-9 shadow-sm  flex justify-between items-center jost'>
        <img src={assets.logo} className='w-32' alt="image" />
        <ul className='hidden md:flex items-center gap-4 text-[17px] font-base'>
          <NavLink to='/'>
            <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Home</li>
          </NavLink>
          <NavLink to='/about'>
            <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>About</li>
          </NavLink>

          {/* Dropdown for Diagnostics */}
          <li className='relative group'>
            <button className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer'>
              <NavLink to='/diagnostics'> Diagnostics <ChevronDown size={20} className='inline cursor-pointer text-orange-500' />
              </NavLink>
            </button>
            <ul className='absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 bg-green-200 shadow-lg rounded-lg mt-1 min-w-[200px] z-50 transition-all duration-300 ease-in-out transform'>
              <NavLink to='/pathology'>
                <li className='px-4 py-2 hover:bg-gray-100'>Pathology</li>
              </NavLink>
              <NavLink to='/microbiology'>
                <li className='px-4 py-2 hover:bg-gray-100'>Micro Biology</li>
              </NavLink>
              <NavLink to='/biochemistry'>
                <li className='px-4 py-2 hover:bg-gray-100'>Bio Chemistry</li>
              </NavLink>
            </ul>
          </li>

          <NavLink to='/healthpackages'>
            <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Health Packages</li>
          </NavLink>
          <NavLink to='/pharmacy'>
            <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Pharmacy</li>
          </NavLink>
          <NavLink to='/totalconcepts'>
            <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Total Concepts</li>
          </NavLink>
        </ul>

        <Link to='/contact'>
          <button className='hidden md:flex items-center gap-2 bg-[#ec7f1a] text-white px-6 py-2 text-base font-bold rounded-lg hover:bg-orange-400 cursor-pointer transition-all'>
            Contact <Phone size={18} />
          </button>
        </Link>

        <img onClick={() => setIsOpen(true)} className='w-8 cursor-pointer sm:hidden ' src={assets.menu} alt="menu" />

        {/* mobile menu */}

        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden  text-orange-600  bg-white transition-ease-in-out duration-500 ${isOpen ? 'w-3/4' : 'w-0'} sm:hidden`}>
          <div className='flex-flex-col items-center gap-4 '>
            <p onClick={() => setIsOpen(false)} className='cursor-pointer p-5 text-2xl text-orange-600 font-bold '>←BACK</p>
            <div className='flex flex-col items-center gap-5 mt-10'>
              <NavLink to='/'>
                <li className='inline-block px-4 py-2  hover:bg-gray-200 rounded-lg'>Home</li>
              </NavLink>
              <NavLink to='/about'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>About</li>
              </NavLink>

              <NavLink to='/diagnostics'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Diagnostics</li>
              </NavLink>
              <NavLink to='/healthpackages'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Health Packages</li>
              </NavLink>
              <NavLink to='/pathology'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Pathology</li>
              </NavLink>
              <NavLink to='/microbiology'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Micro Biology</li>
              </NavLink>
              <NavLink to='/biochemistry'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Bio Chemistry</li>
              </NavLink>
              <NavLink to='/pharmacy'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Pharmacy</li>
              </NavLink>
              <NavLink to='/totalconcepts'>
                <li className='inline-block px-4 py-2 hover:bg-gray-200 rounded-lg'>Total Concepts</li>
              </NavLink>


            </div>
            <div className='flex flex-row items-center px-12 gap-6 mt-10'>
              <Link to='/contact'>
                <button className='md:hidden sm:hidden bg-[#ec7f1a] text-white px-5 py-3 rounded-lg flex items-center gap-2 font-bold'> CONTACT <Phone size={20} /> </button>
              </Link>
              <img src={assets.logo} className='w-20' alt="" />
            </div>



          </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar