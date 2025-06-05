import React from 'react'
import DiagnosticHero from '../components/DiagnosticComponets/DiagnosticHero/DiagnosticHero'
import DiagnosticMachine from '../components/DiagnosticComponets/DiagnosticMachine/DiagnosticMachine'
import DiagnosticTest from '../components/DiagnosticComponets/DiagnosticTest/DiagnosticTest'
import Summary from '../components/DiagnosticComponets/Summury/Summary'

const Diagnostics = () => {
  return (
    <div>
      <DiagnosticHero/>
      <DiagnosticMachine/>
      <DiagnosticTest/>
      <Summary/>
    </div>
  )
}

export default Diagnostics