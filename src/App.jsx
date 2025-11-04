import { useState } from 'react'
import Loading from './Loading'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin, faHtml5, faCss3Alt, faJs, faReact, faGitAlt,  } from '@fortawesome/free-brands-svg-icons'
import { faGears, faDesktop, faFire, faFilePdf, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'

import './styles/App.css'

function App() {

  return (
    <main>
      <Loading />
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><a href='' target='_blank'>Resume</a></li>
        </ul>
      </nav>
      <header>
        <h1>Alvin Barnes</h1>
        <div className='header-name'>
          <h2>Frontend Developer</h2>
          <FontAwesomeIcon  icon={faCode} />
        </div>
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
        <div className='socials-list'>
          <ul>
            <li><a href='https://github.com/Khrononian' target='_blank'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
            <li><a href='' target='_blank'><FontAwesomeIcon icon={faSquareLinkedin} /></a> </li>
            <li><a href='' className='last-link'><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
           
          
        </div>
      </header>
      <About />
      <Projects />
      <Footer 
      github={faSquareGithub} 
      linkedin={faSquareLinkedin} 
      email={faEnvelope}
      />
    </main>
  )
}

export default App