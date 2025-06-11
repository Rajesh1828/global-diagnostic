import React from 'react'
import { Microscope } from 'lucide-react';
import { motion } from 'framer-motion';


const Summary = () => {
    const points = [
        {
            title: 'Early Detection of Diseases',
            description: 'Diagnostic tests help identify health issues at an early stage, increasing the chances of effective treatment and better outcomes.',
        },
        {
            title: 'Wide Range of Samples',
            description: 'Tests can be performed on various biological samples like blood (serum/plasma), urine, saliva, tissue, and amniotic fluid to detect infections, conditions, or abnormalities.',
        },
        {
            title: 'Accuracy & Reliability',
            description: 'Advanced technologies (e.g., ELISA, PCR, automated analyzers) ensure high accuracy, precision, and reproducibility in test results.',
        },
        {
            title: 'Monitoring & Management',
            description: 'Diagnostic tests are used not only for diagnosis but also to monitor ongoing treatments, manage chronic diseases, and assess recovery progress.',
        },
        {
            title: 'Customized Patient Care',
            description: 'Results from diagnostic tests help doctors personalize treatment plans based on specific conditions, improving patient care and outcomes.',
        },
    ];

    return (
        <div
     
        // viewport={{ once: true }}
        // exit={{ opacity: 0, y: -100 }}
        className="py-12 px-6  bg-gradient-to-br from-white to-gray-100 text-gray-800">
            <div className="max-w-7xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-green-600">Why Diagnostic Testing Matters</h2>
                <p className="text-md text-gray-600 mt-2">
                    Key benefits and features of our diagnostic services
                </p>
            </div>

            <motion.div
                  initial={{ opacity: 0, y: 200 }}
     whileInView={{ opacity: 1, y: 0 }}
     
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {points.map((point, index) => (
                    <div
                        key={index}
                        className="bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:bg-amber-50 transition duration-300 ease-in-out"
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3">
                                <Microscope size={20} />
                            </div>
                            <h3 className="text-lg font-semibold text-green-700">{point.title}</h3>
                        </div>
                        <p className="text-sm text-gray-700">{point.description}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Summary