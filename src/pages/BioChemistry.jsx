import React from 'react';
import BioChemistyHero from '../components/Bio_chemistry/BioChemistyHero';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Make sure this is correctly pointing to your assets

const BioChemistry = () => {
  return (
    <div>
      <BioChemistyHero />

      <div className="flex flex-col px-4 py-10 space-y-10">
        <div className="text-center">
          <h2 className="text-green-600 text-2xl sm:text-3xl md:text-4xl font-bold pb-4">
            What is Biochemistry?
          </h2>
          <p className="text-gray-700 font-semibold text-base md:text-lg max-w-4xl mx-auto">
            Biochemistry is the branch of science that explores the chemical processes within and related to
            living organisms. It is a laboratory-based science that combines biology and chemistry,
            playing a crucial role in diagnosing diseases, understanding cellular functions, and
            developing new treatments.
          </p>
          <div className="flex justify-center">
            {/* <img src={assets.Biochemistry_1} alt="Biochemistry" /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl mx-auto">
          <img
            src={assets.Bio_chemistry_icon}
            alt="Biochemistry Illustration"
            className="w-full md:w-1/2 rounded-xl"
          />
          <div className="text-center md:text-left">
            <h2 className="text-green-600 text-2xl sm:text-3xl md:text-4xl font-bold pb-4">
              Importance of Biochemistry in Healthcare
            </h2>
            <p className="text-gray-700 font-semibold text-base md:text-lg">
              Biochemistry helps in understanding metabolic processes, enzyme functions, and biomarkers
              for disease detection. It supports diagnosis of diabetes, kidney dysfunction, liver disorders,
              and more through blood and fluid analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto py-14 px-5">
        <h2 className="text-center text-2xl text-green-400 py-5 sm:text-3xl md:text-4xl font-bold">
          Biochemistry Diagnostic Tests
        </h2>
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="py-3 px-4 text-left border-b">Test Name</th>
              <th className="py-3 px-4 text-left border-b">Purpose</th>
              <th className="py-3 px-4 text-left border-b">Sample Used</th>
              <th className="py-3 px-4 text-left border-b">Booking-Options</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Liver Function Test (LFT)", "Assesses liver health", "Blood"],
              ["Renal Function Test (RFT)", "Evaluates kidney function", "Blood"],
              ["Blood Glucose Test", "Detects diabetes and sugar levels", "Blood"],
              ["Lipid Profile", "Measures cholesterol and triglycerides", "Blood"],
              ["Electrolyte Panel", "Analyzes minerals like sodium & potassium", "Blood"],
              ["Thyroid Function Test", "Checks thyroid hormone levels", "Blood"],
              ["Calcium Test", "Monitors calcium level in body", "Blood"],
              ["Uric Acid Test", "Diagnoses gout and kidney issues", "Blood"]
            ].map(([test, purpose, sample], idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{test}</td>
                <td className="py-3 px-4 border-b">{purpose}</td>
                <td className="py-3 px-4 border-b">{sample}</td>
                <td className="py-3 px-4 border-b">
                  <Link to="/contact">
                    <button className="cursor-pointer bg-orange-300 border border-none text-black px-4 py-1 rounded-lg text-base font-semibold hover:bg-orange-400 transition duration-300 ease-in-out">
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

export default BioChemistry;
