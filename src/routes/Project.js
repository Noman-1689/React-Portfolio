import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import PricingCards from '../components/PricingCards';
import Dynamic from '../components/Dynamic';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text = "Some of my Best work."/>
      <Dynamic />
      <PricingCards />
      <Footer />
    </div>
  )
}

export default Project
