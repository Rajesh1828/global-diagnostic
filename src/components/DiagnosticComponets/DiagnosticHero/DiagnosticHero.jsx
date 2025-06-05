import React from 'react';
import { assets } from '../../../assets/assets';

const DiagnosticHero = () => {
    return (
        <>
        <div className="relative mt-[77px]">
            <img
                src={assets.d_hero}
                alt="Banner"
                className="w-full md:h-[400px] h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-6xl font-bold drop-shadow-lg">
                        Diagnostic Services
                    </h2>
                    <p className='text-white text-lg sm:text-2xl md:text-4xl font-bold drop-shadow-lg'>Precision in Every Test, Care in Every Step.</p>
                </div>
            </div>
        </div>

        

        </>

    );
};

export default DiagnosticHero;
