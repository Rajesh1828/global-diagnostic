import React from 'react'

const Footer = () => {
  const footerData = [
    {
      title: 'Main Links',
      links: ['Home', 'About Us', 'Contact', 'FAQs'],
    },
    {
      title: 'Diagnostics',
      links: ['Pathology', 'Microbiology', 'Biochemistry', 'Radiology'],
    },
    {
      title: 'Health Packages',
      links: ['Basic Checkup', 'Advanced Plan', 'Senior Citizen', 'Women’s Health'],
    },
    {
      title: 'Support',
      links: ['Terms & Conditions', 'Privacy Policy', 'Help Desk', 'Report Issue'],
    },
  ];

  return (
    <div>
      <footer className="text-white bg-orange-400 body-font mt-2">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl text-green-100">global diagnostics</span>
            </a>
            <p className="mt-2 text-md font-bold text-white">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {footerData.map((section, i) => (
              <div key={i} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-green-100 tracking-widest text-sm mb-3">{section.title}</h2>
                <nav className="list-none mb-10">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a className="text-white hover:text-black cursor-pointer">{link}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-orange-500 text-sm text-center sm:text-left">
              © 2025 globalDiagnostics —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 font-semibold ml-1" target="_blank">
                All Rights Reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {[
                'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
                'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01',
                'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
              ].map((d, idx) => (
                <a key={idx} className="ml-3 text-black hover:text-orange-500 cursor-pointer border border-green-500 rounded-full px-1 py-1">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={idx === 3 ? "0" : "2"} className="w-5 h-5" viewBox="0 0 24 24">
                    {idx === 2 ? (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d={d} />
                      </>
                    ) : <path d={d} />}
                  </svg>
                </a>
              ))}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
