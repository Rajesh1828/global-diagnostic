import React from 'react'

const PackageCards = () => {
  const tableData = {
  headers: [
    "Tests (Parameters)",
    "Advance (M/F)\n(100 Tests)",
    "Sr. Citizen (M/F)\n(86 Tests)",
    "Comprehensive\n(82 Tests)",
    "Master\n(78 Tests)",
    "Essential\n(76 Tests)",
    "Basic\n(75 Tests)",
  ],
  tests: [
    ["Sugar Fasting", true, true, true, true, true, true],
    ["CBC", true, true, true, true, true, true],
    ["Thyroid Profile / Free Thyroid", true, false, true, true, true, true],
    ["Lipid Profile", true, true, true, true, true, true],
    ["LFT & KFT", true, true, true, true, true, true],
    ["Calcium", true, true, true, true, true, true],
    ["ESR", true, true, true, true, true, true],
    ["HbA1c", true, true, true, true, true, true],
    ["Vitamin D", true, true, true, true, true, false],
    ["Comp. Urine Examination", true, true, true, true, true, true],
    ["CRP", true, true, true, true, false, false],
    ["Vitamin B12", true, true, true, true, false, false],
    ["Iron Studies", true, true, true, true, false, false],
    ["Rheumatoid Factor", true, true, true, true, false, false],
    ["PSA Total (Male)", true, true, true, false, false, false],
    ["CA125 (Female)", true, true, true, false, false, false],
    ["Ferritin", true, true, true, false, false, false],
    ["Apolipoprotein B/A1 Test", true, false, false, false, false, false],
    ["SMART Report", true, true, true, true, true, true],
  ],
  pricing: [
    { plan: "Advance", mrp: 15700, price1: 5499, price2: null },
    { plan: "Sr. Citizen", mrp: 8090, price1: 4199, price2: null },
    { plan: "Comprehensive", mrp: 9275, price1: 3999, price2: 6799 },
    { plan: "Master", mrp: 5690, price1: 2799, price2: 4799 },
    { plan: "Essential", mrp: 4405, price1: 1899, price2: null },
    { plan: "Basic", mrp: 4035, price1: 1599, price2: null },
  ]
};


  return (
    <>
    
     <div className="overflow-auto p-4">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
        Select From Our Preventive Health Care Packages
      </h2>
      <table className="min-w-full border border-gray-300 text-sm text-left bg-white">
        <thead className="bg-green-400 text-white whitespace-pre-line">
          <tr>
            {tableData.headers.map((header, idx) => (
              <th key={idx} className="border px-3 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {tableData.tests.map(([test, ...values], rowIndex) => (
            <tr key={rowIndex}>
              <td className="border px-3 py-2 font-medium">{test}</td>
              {values.map((val, colIndex) => (
                <td key={colIndex} className="border px-3 py-2 text-center">
                  {val ? '✅' : ''}
                </td>
              ))}
            </tr>
          ))}

          {/* Pricing Rows */}
          <tr className="bg-gray-100 font-bold">
            <td className="border px-3 py-2">MRP</td>
            {tableData.pricing.map((item, idx) => (
              <td key={idx} className="border px-3 py-2 text-center text-orange-700">₹{item.mrp}</td>
            ))}
          </tr>
          <tr className="bg-pink-100 font-bold text-pink-800">
            <td className="border px-3 py-2">Price for 1</td>
            {tableData.pricing.map((item, idx) => (
              <td key={idx} className="border px-3 py-2 text-center">₹{item.price1}</td>
            ))}
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td className="border px-3 py-2">Price for 1+1</td>
            {tableData.pricing.map((item, idx) => (
              <td key={idx} className="border px-3 py-2 text-center">
                {item.price2 ? `₹${item.price2}` : ''}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
    </>

  )
}

export default PackageCards