import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Dynamic from "../components/Dynamic"
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Dynamic />
      <Footer />
    </div>
  )
}

export default Home
