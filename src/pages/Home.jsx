import React from 'react'
import Header from '../components/Header/Header'
import AboutOverview from '../components/AboutOverview/AboutOverview'
import Daignostic from '../components/Diagnostic/Daignostic'
import Services from '../components/Services/Services'
import Contact from '../components/Contact/Contact'
import Testimonial from '../components/Testimonials/Testimonial'
const Home = () => {
  return (
    <div>
      <Header/>
      <AboutOverview/>
      <Services/>
      <Daignostic/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default Home