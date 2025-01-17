import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from "../components/Form"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text = "I am a Good Front End Devaloper."/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
