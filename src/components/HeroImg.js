import "./HeroImgStyle.css";

import React from 'react'

import IntroImg from "../assets/photo-1547082299-de196ea013d6.avif"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntoImg" />
      </div>
      <div className="content">
        <p>HI, my self Noman</p>
        <h1>Software Developer.</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
