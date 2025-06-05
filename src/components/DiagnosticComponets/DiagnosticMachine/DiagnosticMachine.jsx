import React from 'react';
import { assets } from '../../../assets/assets';

const machines = [
    {
        title: 'Immun-Access2',
        img: assets.d_machine,
        description:
            'The Beckman Coulter Access 2 is an automated immunoassay analyzer used for testing samples like serum, plasma, and urine. It handles over 100 tests/hour and provides fast, accurate results for a wide array of health markers including hormones and cardiac indicators.',
    },
    {
        title: 'ESR Analyzer',
        img: assets.Yumizen,
        description:
            'Yumizen ESR analyzer provides automated erythrocyte sedimentation rate testing, enhancing efficiency and accuracy in inflammation monitoring. It reduces manual errors and delivers consistent results with minimal sample handling.',
    },
    {
        title: 'ECG Machine',
        img: assets.ECG,
        description:
            'Our ECG machine records the electrical activity of the heart, aiding in the detection of arrhythmias, heart attacks, and other cardiac abnormalities. It offers real-time monitoring and data storage for accurate diagnostics.',
    },
    {
        title: 'Mispa i3 Analyzer',
        img: assets.mispa_i3,
        description:
            'Mispa i3 is a compact semi-automated biochemistry analyzer designed for small labs. It supports various test profiles including liver, kidney, and lipid panels, with user-friendly interface and minimal reagent consumption.',
    },
];

const DiagnosticMachine = () => {
    return (
        <>
            <div className="bg-white py-8 px-4 sm:px-3 lg:px-8 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                    Comprehensive Diagnostic Solutions
                </h3>
                <p className="text-gray-700 font-semibold text-lg md:text-xl max-w-3xl mx-auto">
                    We offer a wide range of diagnostic services to ensure accurate and timely results for your health needs.
                </p>
            </div>

            {machines.map((machine, idx) => (
                <div
                    key={idx}
                    className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        } items-center justify-center gap-6 my-7 px-4`}
                >
                    <img src={machine.img} alt={machine.title} className="w-full md:w-1/2 " />
                    <div className="flex flex-col items-center md:items-start gap-4 p-4 md:px-8">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-orange-500">{machine.title}</h2>
                            <hr className="w-20 border-2 border-orange-500 mt-1" />
                        </div>
                        <p className="text-gray-700 text-lg md:text-1xl text-justify">{machine.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DiagnosticMachine;
