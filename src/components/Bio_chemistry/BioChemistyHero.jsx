import React from 'react';
import { assets } from '../../assets/assets'; // Make sure this path is correct

const BioChemistyHero = () => {
  return (
    <div
      className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[250px]'
      style={{ backgroundImage: `url(${assets.pathology})` }}
    >
      <h2 className='pt-10 text-center text-orange-600 text-2xl sm:text-3xl md:text-4xl font-bold'>
        "Decoding Life,  <span className='text-white'>One Molecule at a Time."</span>
      </h2>
    </div>
  );
};

export default BioChemistyHero;
