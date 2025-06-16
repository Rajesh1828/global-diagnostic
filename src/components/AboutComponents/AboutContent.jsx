import React from 'react'
import { assets } from '../../assets/assets'

const AboutContent = () => {
  return (
    <>
      <h2 className='text-center text-black text-2xl sm:text-3xl md:text-4xl pt-10 font-bold'>About Our Story</h2>
      <p className='text-lg md:text-center px-2 text-gray-700 text-justify pt-5'>Founded on 23rd March 2014 by <span className='text-orange-400'>Mr. Venkata Lakshman Maddikayala</span>, Global Diagnostics was born out of a deep concern — and a deeper vision.</p>
      <h2 className=' text-center text-black text-xl sm:text-2xl md:text-3xl pt-10 font-bold '>
        🩺 The Problem: The Diagnostic Gap
      </h2>
      <p className='text-lg md:text-center px-2 md:px-20 text-gray-700 text-justify pt-5'>Coming from a family with close ties to healthcare, <span className='text-orange-400'>Mr. Maddikayala</span> witnessed firsthand the daily struggles patients and doctors faced due to delayed,
        inaccurate, or inaccessible diagnostic services — especially in semi-urban and rural areas. Blood reports often took too long. Sample collection lacked professionalism. And worst of all, many labs were not equipped with the latest machinery,
        leading to inconsistent results and compromised care.</p>
      <h2 className='text-center text-black text-xl sm:text-2xl md:text-3xl pt-10 font-bold'>🔬 The Research: Understanding the Needs of Doctors & Patients</h2>
      <p className='text-lg md:text-justify px-2 md:px-20 text-gray-700 text-justify pt-5'>Mr. Maddikayala didn't want to just "start a lab" — he wanted to solve a problem. He spent months understanding how diagnostics could be improved, speaking with doctors, lab technicians, and patients. The feedback was clear:</p>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='w-full'>
          <ul className='text-lg md:text-justify px-2 md:px-20 text-gray-700 text-justify pt-5 list-disc m-5'>
            <li className=''>Patients needed more accurate and timely results.</li>
            <li>Doctors needed more information to make informed decisions.</li>
            <li>Lab technicians needed better training and equipment.</li>
          </ul>
        </div>
        <div>
          <img src={assets.rs} alt=""  className='md:pr-20 md:w-full' />
        </div>

      </div>
      <h2 className='text-center text-black text-xl sm:text-2xl md:text-3xl pt-10 font-bold '>The Solution: Global Diagnostics is Born</h2>
      <p className='text-lg md:text-justify px-2  md:px-30 text-gray-700 text-justify pt-5'>With a clear vision in mind, <span className='text-orange-400'>Mr. Maddikayala</span> and his team at Global Diagnostics was established — blending cutting-edge diagnostic technology with a people-first approach.
        Equipped with high-end machines like the Harmon Access analyzers and staffed by experienced lab technicians and medical professionals,
        the lab began serving both urban and rural communities with efficiency and empathy.</p>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <img className='' src={assets.g_ab} alt="" />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='w-full  '>
          <h2 className='text-center text-black text-xl sm:text-2xl md:text-3xl pt-10 font-bold '>Our Mission</h2>
          <p className='text-lg md:text-justify px-2 md:px-20 text-gray-700 text-justify pt-5'>To provide fast, accurate, and patient-friendly diagnostic services by supporting both doctors and patients </p>
          <ul className='text-lg md:text-justify px-2 md:px-20 text-gray-700 text-justify pt-5 list-disc m-5'>
            <li>•	Hassle-free sample collection</li>
            <li>•	Quick turnaround of blood investigation reports</li>
            <li>•	Reliable results powered by national-grade, high-end diagnostic equipment</li>
          </ul>

        </div>
        <img className='w-full pr-9' src={assets.mission} alt="" />
      </div>
      
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <img className='md:w-1/2 w-full' src={assets.vission} alt="" />

        <div className='w-full'>
          <h2 className='text-center text-black text-xl sm:text-2xl md:text-3xl pt-10 font-bold'>🔭 Our Vision</h2>
          <p className='text-lg md:text-justify px-2 md:px-20 text-gray-700 text-justify pt-5 '>To become a nationally recognized diagnostics brand that bridges the gap between technology and human care — delivering trust, speed, and support in every test we conduct.</p>
        </div>

      </div>
      <div className='bg-green-100 py-20 px-2 md:px-20'>
        <p className='text-center text-2xl   md:text-4xl md:px-20 px-2  text-orange-900 font-bold'>     Today, Global Diagnostics isn’t just a lab — it’s a commitment. A commitment to care, accuracy, and service excellence.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center pt-10 items-center'>
        <img src={assets.abg} className='md:w-1/2 w-full h-full' alt="" />
        <div className='md:w-1/2 w-full flex flex-col justify-center items-center'>
          <p className='text-lg md:text-justify px-2 md:px-20 text-gray-700 text-justify pt-5'>At Global Diagnostics, we believe that healthcare isn’t just about machines and reports — it's about people, trust, and responsibility. Here's why patients and doctors choose us with confidence:</p>

          <div className="px-2 md:px-20 pt-10">
            <h2 className="text-start text-orange-900 text-md sm:text-md md:text-md font-bold">
              Friendly, Patient-Centered Services
            </h2>
            <p className="text-lg text-gray-700 text-justify pt-5">
              From sample collection to final reporting, our team is trained to provide kind, respectful, and personalized care.
              We understand that medical tests can be stressful — so we make the process as smooth and reassuring as possible.
            </p>
          </div>

          <div className="px-2 md:px-20 pt-10">
            <h2 className="text-start text-orange-900 text-md sm:text-md md:text-md font-bold">
              Responsibility-Minded Staff
            </h2>
            <p className="text-lg text-gray-700 text-justify pt-5">
              Every member of our staff is deeply committed to their role — not just as professionals, but as caregivers. We treat every test, every patient, and every interaction with integrity and accountability.
            </p>
          </div>

          <div className="px-2 md:px-20 pt-10">
            <h2 className="text-start text-orange-900 text-md sm:text-md md:text-md font-bold">
              Expert Technicians & Doctor-Supervised Reports
            </h2>
            <p className="text-lg text-gray-700 text-justify pt-5">
              Our lab technicians are highly trained in their respective domains, ensuring accuracy in every process. More importantly, every report is reviewed under the observation of qualified doctors, adding a second layer of quality control.
            </p>
          </div>


          <div className="px-2 md:px-20 pt-10">
            <h2 className="text-start text-orange-900 text-md sm:text-md md:text-md font-bold">
              Cutting-Edge Diagnostic Technology            </h2>
            <p className="text-lg text-gray-700 text-justify pt-5">
              We invest in high-end machinery, including Harmon Access analyzers, and advanced systems that enable fast, accurate, and reliable results. Our technology is on par with national standards, ensuring clinical excellence.
            </p>
          </div>


        </div>

      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-center text-green-700 text-6xl sm:text-2xl md:text-9xl pt-10 font-bold'>The Result <br />  ?</h2>
      </div>
      <div className="flex flex-col items-center justify-center px-2 md:px-20 pt-5 text-xl text-gray-700">
        <img src={assets.result} alt="" />
        <ul className="list-disc text-center">
          <li>Faster report delivery</li>
          <li>More accurate results</li>
          <li>More patient convenience</li>
          <li>Lower cost</li>
        </ul>
      </div>



    </>
  )
}

export default AboutContent