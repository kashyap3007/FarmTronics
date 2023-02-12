import React from 'react'
import About from './About'
import Banner from './Banner'
import HomeStats from './HomeStats'
import Testinomials from './Testinomials'
import Navbar from '../Navbar';
import Footer from '../Footer';
import getLocation from '../Geolocation'

export default function Home() {
  getLocation();
  
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <HomeStats/>
      <Testinomials/>
      <Footer/>
    </div>
  )
}
