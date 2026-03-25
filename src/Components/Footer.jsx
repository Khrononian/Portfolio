import React from 'react'
import '../styles/Footer.css'
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='fadeUp' id='contact'>
        <h2>Available for opportunities!</h2>
        <div>
          <button><a href=''>Get in touch</a></button>
          <div>
            <p>Find me in these spaces too</p>
            <ul>
              <li><a href='https://github.com/Khrononian' target='_blank'><FaGithubSquare /></a></li>
              <li><a href='www.linkedin.com/in/alvin-barnes' target='_blank'><FaLinkedin /></a></li>
              <li><a href='mailto:Alv.Barnes@gmail.com' target='_blank'><FaEnvelope /></a></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer