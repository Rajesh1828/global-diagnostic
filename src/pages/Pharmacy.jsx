import React from 'react';
import Pharmacy_hero from '../components/Pharmacy_components/Pharmacy_hero';
import { assets } from '../assets/assets';
import Contact from '../components/Contact/Contact';

const Pharmacy = () => {
  return (
    <div>
      <Pharmacy_hero />
      <div className='flex flex-col items-center justify-center px-4 py-10'>
        <h2 className='text-center text-green-400 text-2xl sm:text-3xl md:text-4xl font-bold py-5'>
          Smart Health, Right Here.
        </h2>
        <p className="text-sm text-center text-gray-700 max-w-3xl py-3">
          Welcome to our healthcare platform! We are dedicated to providing comprehensive and accessible healthcare services to our community. Our team of experienced professionals is committed to delivering high-quality care and support to all our patients.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-6 w-full py-10'>
          {/* Card 1 */}
          <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col items-center overflow-hidden'>
            <img
              src={assets.BGM}
              alt='Blood Glucose Monitoring'
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className='p-4 text-center'>
              <h3 className='text-lg font-semibold text-gray-800'>Blood Glucose Monitoring</h3>
              <p className='text-sm text-gray-700 font-light'>
                Regular blood sugar testing helps manage diabetes, prevent complications, and track the effectiveness of medications and diet.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col items-center overflow-hidden'>
            <img
              src={assets.BPM}
              alt='Blood Pressure Monitoring'
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className='p-4 text-center'>
              <h3 className='text-lg font-semibold text-gray-800'>Blood Pressure Monitoring</h3>
              <p className='text-sm text-gray-700 font-light'>
                Monitor blood pressure to detect hypertension early, manage cardiovascular risks, and maintain overall heart health.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col items-center overflow-hidden'>
            <img
              src={assets.BGM}
              alt='Pharmacy Consultation'
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className='p-4 text-center'>
              <h3 className='text-lg font-semibold text-gray-800'>Pharmacy Consultation</h3>
              <p className='text-sm text-gray-700 font-light'>
                Get expert guidance on medication usage, side effects, and interactions to ensure safe and effective treatment.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col items-center overflow-hidden'>
            <img
              src={assets.PTK}
              alt='Pharmacy Consultation'
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className='p-4 text-center'>
              <h3 className='text-lg font-semibold text-gray-800'>Pharmacy Consultation</h3>
              <p className='text-sm text-gray-700 font-light'>
                Get expert guidance on medication usage, side effects, and interactions to ensure safe and effective treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default Pharmacy;
