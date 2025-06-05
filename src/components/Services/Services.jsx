import React from 'react';
import { services } from '../../assets/assets';
import { Phone } from 'lucide-react';


const Services = () => {
    return (
        <>

            <div className="flex flex-col items-center justify-center mx-auto p-6 md:px-20 lg:px-32 xl:px-48 w-full overflow-hidden">
                <div className='flex items-center gap-2 mb-4'>
                    <hr className='w-8 md:w-13 border-2 border-orange-500' />
                    <h2 className="text-3xl text-center font-bold sm:text-4xl mb-4">Health Packages</h2>
                </div>
                <p className="text-lg text-gray-700 text-justify md:text-center">
                    Welcome to our healthcare platform! We are dedicated to providing comprehensive and accessible healthcare services to our community. Our team of experienced professionals is committed to delivering high-quality care and support to all our patients.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center overflow-hidden"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-45 object-cover transition-transform duration-300 hover:scale-105"
                        />

                        <div className="flex  items-center justify-between w-full p-3 gap-4">
                            <h3 className="text-lg font-semibold text-center text-gray-800">{service.title}</h3>

                            <button className="bg-orange-400 text-white font-bold px-6 py-2 rounded-full mt-2 hover:bg-orange-500 shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer flex items-center gap-2">
                                <Phone size={20} /> Book Now
                            </button>

                        </div>
                    </div>
                ))}
            </div>

        </>

    );
};

export default Services;
