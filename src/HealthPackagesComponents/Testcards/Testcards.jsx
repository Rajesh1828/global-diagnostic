import React from 'react';
import { assets } from '../../assets/assets';

const Testcards = () => {
    const packages = [
        {
            color: 'orange',
            label: 'Starter',
            amount: 150000,
            treatment: "Advance",
            features: [
                "All tests including Apolipoprotein B/A1",
                "PSA Total/CA125",
                "Vitamin D + B12",
                "Iron Studies",
                "HbA1c, CBC, Lipid Profile"
            ]
        },
        {
            color: 'orange',
            label: 'Essential',
            amount: 200000,
            treatment: "Sr. Citizen (M/F)",
            features: [
                "Sugar Fasting, CBC, Lipid Profile",
                "LFT & KFT, ESR, HbA1c",
                "Thyroid Profile, Vitamin D",
                "Comp. Urine Exam, CRP, Vitamin B12",
                "Ferritin, Rheumatoid Factor"
            ]
        },
        {
            color: 'orange',
            label: 'Premium',
            amount: 300000,
            treatment: "Comprehensive",
            features: [
                "CBC, ESR, Sugar Fasting, LFT & KFT",
                "Lipid Profile, Vitamin D & B12",
                "Iron Studies, CRP, Ferritin",
                "Thyroid Profile, Urine Exam",
                "Rheumatoid Factor, PSA/CA125"
            ]
        },
        {
            color: 'orange',
            label: 'Wellness+',
            amount: 250000,
            treatment: "Masters",
            features: [
                "Sugar Fasting, CBC, Thyroid Profile",
                "Vitamin D, B12, Iron Studies",
                "CRP, Ferritin, Urine Exam",
                "HbA1c, Lipid Profile, ESR",
                "Rheumatoid Factor, PSA/CA125"
            ]
        },
        {
            color: 'orange',
            label: 'Advanced',
            amount: 350000,
            treatment: "Advance",
            features: [
                "All major blood tests covered",
                "PSA Total (M) / CA125 (F)",
                "Thyroid, Vitamin D + B12",
                "Comprehensive Urine Exam",
                "Iron Studies, ESR, CRP, HbA1c"
            ]
        },
        {
            color: 'orange',
            label: 'Elite',
            amount: 400000,
            treatment: "Basic",
            features: [
                "CBC, Sugar Fasting, Lipid Profile",
                "LFT & KFT, Vitamin D",
                "Thyroid Profile, ESR, HbA1c",
                "Urine Exam, CRP, B12",
                "Ferritin, PSA/CA125"
            ]
        }
    ];

    const colorClasses = {
        yellow: 'bg-yellow-400 hover:bg-yellow-500',
        orange: 'bg-orange-400 hover:bg-orange-500',
        red: 'bg-red-400 hover:bg-red-500',
        green: 'bg-green-400 hover:bg-green-500',
        cyan: 'bg-cyan-400 hover:bg-cyan-500',
        indigo: 'bg-indigo-400 hover:bg-indigo-500'
    };

    return (
        <section className="text-gray-600 body-font min-h-screen flex flex-col justify-center items-center px-4">
            <h2 className="text-2xl text-green-500 py-4 sm:text-3xl md:text-4xl font-bold text-center">
                "Complete Care, One Package at a Time."
            </h2>

            <div className="container px-5 py-12 mx-auto ">
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 hover:tr bg-blur-md transition duration-500">
                            <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 shadow-md">
                                <div>
                                    <h2 className="text-gray-900 text-lg font-bold text-left">{pkg.treatment}</h2>
                                    <h3 className={`mt-2 text-xl font-bold text-${pkg.color}-500 text-left`}>
                                        + {pkg.amount.toLocaleString()} ₭
                                    </h3>
                                    {pkg.features && (
                                        <div className="text-sm font-semibold text-gray-400 space-y-1 mt-2">
                                            {pkg.features.map((item, i) => (
                                                <p className='text-left' key={i}>• {item}</p>
                                            ))}
                                            <button
                                                className={`text-sm mt-6 px-4 py-2 text-white rounded-lg tracking-wider outline-none cursor-pointer ${colorClasses[pkg.color]}`}>
                                                Book Appointment
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <img src={assets.d_hero} alt="heart" className="w-25 h-25 rounded-full bg-cover bg-center" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testcards;
