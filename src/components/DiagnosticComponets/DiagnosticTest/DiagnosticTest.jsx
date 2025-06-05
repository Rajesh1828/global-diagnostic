import React from 'react'
import { assets, diagnosticTests } from '../../../assets/assets'
import { Microscope } from 'lucide-react'

const DiagnosticTest = () => {
    return (
        <div className="flex flex-col items-center justify-center  min-h-[70vh]"
        style={{backgroundImage: `url(${assets.d_bg})`}}>
            <div className="flex flex-col items-center justify-center mb-8 py-2">
                <h1 className="text-4xl md:text-6xl text-orange-400 font-bold">Diagnostic Tests</h1>
                <p className="text-md text-gray-100 text-center mt-2">
                    We provide a comprehensive range of diagnostic tests to ensure accurate health assessments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
                {diagnosticTests.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl text-center text-white transition-all duration-300 hover:shadow-2xl hover:bg-white/40   cursor-pointer"
                     >
                        <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                        <ul className="flex flex-col gap-3 items-start">
                            {category.tests.map((test, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-green-200">
                                        <Microscope className="text-orange-400" size={18} />
                                    </div>               
                                       <span>{test}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default DiagnosticTest
