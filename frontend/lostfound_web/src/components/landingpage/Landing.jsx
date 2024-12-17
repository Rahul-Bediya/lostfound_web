import React from 'react'
import HeroSection from './HeroSection'
import Benefits from './Benefits'
import Testimonial from './Testimonial'
import Footer from './footer'
import Nav from './Nav'


const Landing = () => {
  return (
    <div>
     <Nav/>
      <HeroSection/>
      <Benefits/>
      <Testimonial/>
     <Footer/>
    </div>
  )
}

export default Landing
