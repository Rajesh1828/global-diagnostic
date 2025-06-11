import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Aboutpathology = () => {
    return (
        <>
            <div className="flex flex-col px-4 py-10 space-y-10">
                <div className="text-center">
                    <h2 className="text-green-600 text-2xl sm:text-3xl md:text-4xl font-bold pb-4">
                        What is Pathology?
                    </h2>
                    <p className="text-gray-700 font-semibold text-base md:text-lg max-w-4xl mx-auto">
                        Pathology is the medical science that studies the causes, development,
                        and effects of diseases. It plays a crucial role in diagnosing health conditions
                        by examining blood, tissue, urine, and other bodily samples.
                    </p>
                    <div className='flex justify-center'>
                    {/* <img src={assets.Pathalogy_3} alt="" /> */}

                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl mx-auto">
                    <img
                        src={assets.Pathalogy_3}
                        alt="Pathology illustration"
                        className="w-full md:w-1/2 rounded-xl "
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-green-600 text-2xl sm:text-3xl md:text-4xl font-bold pb-4">
                             What is Pathology in Diagnosis?
                        </h2>
                        <p className="text-gray-700 font-semibold text-base md:text-lg">
                            Pathology in diagnosis refers to the use of laboratory tests and microscopic
                            examination of samples <span className='text-orange-400'>(such as blood, tissue, urine, etc.)</span> to identify the nature
                            and cause of diseases.
                        </p>
                    </div>
                </div>

            </div>
            <div className='overflow-x-auto py-14 px-5'>
                <h2 className='text-center text-2xl text-green-400 py-5 sm:text-3xl md:text-4xl font-bold'>
                    Pathology Diagnostic Tests
                </h2>
                <table className='min-w-full border border-gray-300 rounded-lg '>
                    <thead className='bg-green-100 text-green-800'>
                        <tr>
                            <th className='py-3 px-4 text-left border-b'>Test Type   </th>
                            <th className='py-3 px-4 text-left border-b'>Purpose  </th>
                            <th className='py-3 px-4 text-left border-b'>sample Used   </th>
                             <th className='py-3 px-4 text-left border-b'>Booking-Options</th>

                        </tr>
                    </thead>
                    <tbody>
                             <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">Blood Tests</td>
            <td className="py-3 px-4 border-b">Detects infections, anemia, diabetes</td>
            <td className="py-3 px-4 border-b">Blood</td>
            <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">Urine Analysis</td>
            <td className="py-3 px-4 border-b">Checks kidney, liver, urinary health</td>
            <td className="py-3 px-4 border-b">Urine</td>
              <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
        
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">Biopsy & Histology</td>
            <td className="py-3 px-4 border-b">Detects cancer, inflammation</td>
            <td className="py-3 px-4 border-b">Tissue</td>
             <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">CBC (Complete Blood Count)</td>
            <td className="py-3 px-4 border-b">Measures blood components</td>
            <td className="py-3 px-4 border-b">Blood</td>
             <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">Liver/Kidney Function Tests</td>
            <td className="py-3 px-4 border-b">Assesses organ health</td>
            <td className="py-3 px-4 border-b">Blood</td>
             <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">Thyroid Panel (T3, T4, TSH)</td>
            <td className="py-3 px-4 border-b">Diagnoses thyroid disorders</td>
            <td className="py-3 px-4 border-b">Blood</td>
             <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">HbA1c</td>
            <td className="py-3 px-4 border-b">Measures long-term sugar control</td>
            <td className="py-3 px-4 border-b">Blood</td>
             <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 border-b">Pap Smear (Cytology)</td>
            <td className="border-b py-3 px-4 ">Screens for cervical cancer</td>
            <td className="border-b py-3 px-4">Cervical cell sample</td>
             <td className='py-3 px-4 border-b'> <Link to='/contact'>
              <button className=' cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                Book Now
              </button>
            </Link> </td>
          </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Aboutpathology;
