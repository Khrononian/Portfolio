import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ faSquareGithub, faSquareLinkedin }) => {
  return (
    <footer>
        <h2>Let's connect - I'd love to hear from you.</h2>
        <div>
          <button>Get in touch</button>
          <div>
            <p>Find me in these spaces too</p>
            <ul>
              <li><FontAwesomeIcon icon={faSquareGithub} size='xl' style={{color: '#dc143cc7'}} /></li>
              <li><FontAwesomeIcon icon={faSquareLinkedin} size='xl' style={{color: '#dc143cc7'}} /></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer