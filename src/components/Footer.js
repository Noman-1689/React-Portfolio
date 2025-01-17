import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>SamiTown Society.</p>
                        <p>Lahore, Pakistan</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone  size={20} style={{color:"#fff", marginRight:"2rem"}}/>+92-334-7106-41</h4>     
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>info@noman.com</h4>     
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code. Web Developer with passion for creating attractive and interactive websites meeting customer needs and exceeding expectations.
                </p>

                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Footer
