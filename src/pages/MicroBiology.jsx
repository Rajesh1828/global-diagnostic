import React from 'react';
import Micro_Biology from '../components/Micro_Biology_Components/Micro_Biology';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Adjust the path as needed

const MicroBiology = () => {
  return (
    <div>
      <Micro_Biology />

      <div className="flex flex-col px-4 py-10 space-y-10">
        <div className="text-center">
          <h2 className="text-green-600 text-2xl sm:text-3xl md:text-4xl font-bold pb-4">
            What is Microbiology?
          </h2>
          <p className="text-gray-700 font-semibold text-base md:text-lg max-w-4xl mx-auto">
            Microbiology is the study of microscopic organisms including bacteria, viruses,
            fungi, and protozoa. It helps in understanding infectious diseases,
            developing treatments, and maintaining public health safety.
          </p>
          <div className='flex justify-center'>
            {/* <img src={assets.Microbiology_1} alt="Microbiology" /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl mx-auto">
          <img
            src={assets.Micro_Biology}
            alt="Microbiology illustration"
            className="w-full md:w-1/2 rounded-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-green-600 text-2xl sm:text-3xl md:text-4xl font-bold pb-4">
              Role of Microbiology in Diagnosis
            </h2>
            <p className="text-gray-700 font-semibold text-base md:text-lg">
              Microbiology in diagnosis involves identifying infections caused by microorganisms
              using cultures, staining, and molecular tests. It plays a critical role in detecting
              pathogens and guiding antibiotic treatment.
            </p>
          </div>
        </div>
      </div>

      <div className='overflow-x-auto py-14 px-5'>
        <h2 className='text-center text-2xl text-green-400 py-5 sm:text-3xl md:text-4xl font-bold'>
          Microbiology Diagnostic Tests
        </h2>
        <table className='min-w-full border border-gray-300 rounded-lg'>
          <thead className='bg-green-100 text-green-800'>
            <tr>
              <th className='py-3 px-4 text-left border-b'>Test Type</th>
              <th className='py-3 px-4 text-left border-b'>Purpose</th>
              <th className='py-3 px-4 text-left border-b'>Sample Used</th>
              <th className='py-3 px-4 text-left border-b'>Booking-Options</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Blood Culture", "Detects bloodstream infections (e.g., sepsis)", "Blood"],
              ["Sputum Culture", "Identifies lung infections like tuberculosis", "Sputum"],
              ["Urine Culture", "Detects urinary tract infections (UTIs)", "Urine"],
              ["Stool Culture", "Detects bacterial infections in intestines", "Stool"],
              ["Wound Swab", "Identifies infection in wounds or abscesses", "Tissue/Swab"],
              ["Throat Swab", "Diagnoses throat infections like strep throat", "Swab"],
              ["Antibiotic Sensitivity Test", "Determines effective antibiotics", "Culture Sample"],
              ["PCR for Microbial DNA", "Detects microbial genetic material", "Blood/Swab/Fluids"]
            ].map(([test, purpose, sample], idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{test}</td>
                <td className="py-3 px-4 border-b">{purpose}</td>
                <td className="py-3 px-4 border-b">{sample}</td>
                <td className='py-3 px-4 border-b'>
                  <Link to='/contact'>
                    <button className='cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out'>
                      Book Now
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MicroBiology;
