import React from 'react'
import PrizingCards from '../HealthPackagesComponents/PrizingCards/PrizingCards'
import PackageCards from '../HealthPackagesComponents/HeroCars/PackageCards'
import Testcards from '../HealthPackagesComponents/Testcards/Testcards'

const HealthPackages = () => {
  return (
    <div>
      <PrizingCards/>
      <Testcards/>
      <PackageCards/>
    </div>
  )
}

export default HealthPackages