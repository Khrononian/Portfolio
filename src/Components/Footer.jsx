import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ github, linkedin, email }) => {
  return (
    <footer className='fadeUp'>
        <h2>Available for opportunities!</h2>
        <div>
          <button>Get in touch</button>
          <div>
            <p>Find me in these spaces too</p>
            <ul>
              <li><a href='https://github.com/Khrononian' target='_blank'><FontAwesomeIcon icon={github}  /></a></li>
              <li><a href='' target='_blank'><FontAwesomeIcon icon={linkedin}  /></a></li>
              <li><a href='' target='_blank'><FontAwesomeIcon icon={email}  /></a></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer