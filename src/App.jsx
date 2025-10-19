import { useState } from 'react'
import Loading from './Loading'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin, faHtml5, faCss3Alt, faJs, faReact, faGitAlt,  } from '@fortawesome/free-brands-svg-icons'
import { faGears, faDesktop, faFire, faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './styles/App.css'

function App() {

  return (
    <main>
      <Loading />
      <nav>
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header>
        <h1>Alvin Barnes</h1>
        <h2>Frontend Developer</h2>
        <div>
          <h4>Skills</h4>
          <ul className='header-list'>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>REST APIs</li>
            <li>Firebase</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className='socials'>
          <a href='' target='_blank'><FontAwesomeIcon icon={faSquareGithub}  style={{color: '#b3000c'}} /></a> 
          <a href='' target='_blank'><FontAwesomeIcon icon={faSquareLinkedin}  style={{color: '#b3000c'}}/></a> 
          <a href='' target='_blank'><FontAwesomeIcon icon={faFilePdf}  style={{color: '#b3000c'}} /></a> 
          {/* <p><FontAwesomeIcon icon={faEnvelope} /><span>Alv.Barnes@gmail.com</span></p> */}
        </div>
      </header>
      <About />
      <Projects />
      <Footer github={faSquareGithub} linkedin={faSquareLinkedin} />
    </main>
  )
}

export default App