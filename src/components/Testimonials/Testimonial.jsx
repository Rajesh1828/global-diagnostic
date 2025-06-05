import React from 'react';
import { assets } from '../../assets/assets';

const Testimonial = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-center font-bold sm:text-4xl mb-4">Testimonials</h2>
        <p className="text-lg md:px-20 text-gray-700 text-center mb-8">
          Welcome to our healthcare platform! We are dedicated to providing comprehensive and accessible healthcare
          services to our community. Our team of experienced professionals is committed to delivering high-quality care
          and support to all our patients.
        </p>
      </div>

      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              {
                name: 'HOLDEN CAULFIELD',
                title: '###',
                img: assets.test1, // ✅ Correct key + image
              },
              {
                name: 'ALPER KAMU',
                title: '##',
                img: assets.test2,
              },
              {
                name: 'HENRY LETHAM',
                title: '####',
                img: assets.test3,
              },
            ]
              .map((testimonial, idx) => (
                <div key={idx} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="group relative h-full text-center bg-white p-6 rounded-xl shadow-md overflow-hidden transition-all duration-300">
                    {/* Arc background animation */}
                    <div className="absolute inset-0 bg-green-400 hover:text-white rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>

                    {/* Actual content */}
                    <div className="relative z-10">
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-orange-500 bg-gray-100"
                        src={testimonial.img}
                      />
                      <p className="leading-relaxed text-sm text-gray-900  hover:text-white  ">
                        Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1
                        kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                        adaptogen squid fanny pack vaporware.
                      </p>
                      <span className="inline-block h-1 w-10 rounded bg-green -500 mt-6 mb-4"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                        {testimonial.name}
                      </h2>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
