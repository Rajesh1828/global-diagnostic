import React from 'react';
import { assets } from '../../assets/assets'; // Make sure this path is correct

const BioChemistyHero = () => {
  return (
    <div
      className='flex justify-center items-center bg-cover bg-center w-full md:h-[400px] h-[300px]'
      style={{ backgroundImage: `url(${assets.pathology})` }}
    >
      <h2 className='text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold'>
        "Decoding Life,  <span className='text-orange-400'>One Molecule at a Time."</span>
      </h2>
    </div>
  );
};

export default BioChemistyHero;
