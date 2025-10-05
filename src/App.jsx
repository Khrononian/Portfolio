import { useState } from 'react'
import Loading from './Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin, faHtml5, faCss3Alt, faJs, faReact, faGitAlt,  } from '@fortawesome/free-brands-svg-icons'
import { faGears, faDesktop, faFire, faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import fallout  from './images/previewPowerOn.png'
import steam from './images/SteamClone.png'
import calculator from './images/tscalculator.png'
import waldo from './images/WheresWaldo.png'

// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

import './App.css'

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
            {/* <li><FontAwesomeIcon icon={faHtml5} /><p>HTML5</p></li>
            <li><FontAwesomeIcon icon={faCss3Alt} /><p>CSS3</p></li>
            <li><FontAwesomeIcon icon={faJs} /><p>JavaScript</p></li>
            <li><FontAwesomeIcon icon={faReact} /><p>React</p></li>
            <li><FontAwesomeIcon icon={faGitAlt} /><p>Git</p></li>
            <li><FontAwesomeIcon icon={faGears} /><p>REST APIs</p></li>
            <li><FontAwesomeIcon icon={faDesktop} /><p>TypeScript</p></li>
            <li><FontAwesomeIcon icon={faFire} /><p>Firebase</p></li> */}
            
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>REST APIs</li>
            <li>Firebase</li>
            <li>HTML5</li>
            <li>CSS3</li>
            
          </ul>
        </div>
        <div>
          <FontAwesomeIcon icon={faSquareGithub} size='xl' style={{color: '#dc143c'}} />
          <FontAwesomeIcon icon={faSquareLinkedin} />
          <FontAwesomeIcon icon={faFilePdf} />
          <p><FontAwesomeIcon icon={faEnvelope} /><span>Alv.Barnes@gmail.com</span></p>
        </div>
      </header>
      <section className='about'>
        <h2>About</h2>
        <p>My name is Alvin Barnes. I'm a frontend developer born and raised in Miami, Florida, where I developed a fondness for creativity and problem-solving. When I was
        a teenager, I experimented with coding by making multiple games on Roblox from a wide variety of different themes I'd see offline or online. As I got older, I fell off
        and eventually tapped back into my previous interest that then translated to a passion for web development. Now, as a self-taught frontend developer, I transform any
        idea into interactive and polished websites. 
        </p>
        <p>When I'm not coding, I love spending my time playing video games, watching anime, rollerblading, and skateboarding. I also enjoy spending time outside soaking in nature and animal life
        all around. These activities not only inspire me, but they also build the creative energy necessary for the projects that I work on. 
        </p>
        <p>What excites me about the tech industry is the constant innovation in how we interact with the digital world. It's never-ending, and as a frontend developer, I aim to 
        build applications that are user-friendly, accessible, and visually engaging. I want my work to not only be impactful, but also for people to use and truly enjoy it.
        </p>
      </section>
      <section className='projects'>
        <h2>Projects</h2>
        <div>
          <div>
            <img src={fallout} alt='Fallout'/>
            <h3>Fallout Terminal</h3>
            <p>A recreation of the in-game computer terminals from the Fallout series. Text based hacking mini game simulated with a retro futuristic green monochrome interface built with react.</p>
            <p>React</p>
          </div>
          <div>
            <img src={steam} alt='Steam'/>
            <h3>Steam Clone</h3> 
            <p>Steam inspired web app which showcases a game library, store and user profiles. Designed with responsive UI to mimic the look and feel of a digital game platform.</p>
            <p>React - Firebase - Material UI</p>
          </div>
          <div>
            <img src={calculator} alt='Calculator'/>
            <h3>TypeScript Calculator</h3>
            <p>Simple calculator to operate any functional operations. First project to work with while learning TypeScript.</p>
            <p>React - TypeScript</p>
          </div>
          <div>
            <img src={waldo} alt='Waldo'/>
            <h3>Where's Waldo</h3>
            <p>A simple interactive app where users search for hidden characters within images.</p>
            <p>CSS - JavaScript</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Skills & Tools</h2>
        <div>
          <ul>
            <li><FontAwesomeIcon icon={faHtml5} /><p>HTML5</p></li>
            <li><FontAwesomeIcon icon={faCss3Alt} /><p>CSS3</p></li>
            <li><FontAwesomeIcon icon={faJs} /><p>JavaScript</p></li>
            <li><FontAwesomeIcon icon={faReact} /><p>React</p></li>
            <li><FontAwesomeIcon icon={faGitAlt} /><p>Git</p></li>
            <li><FontAwesomeIcon icon={faGears} /><p>REST APIs</p></li>
            <li><FontAwesomeIcon icon={faDesktop} /><p>Responsive Design</p></li>
            <li><FontAwesomeIcon icon={faFire} /><p>Firebase</p></li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Let's connect - I'd love to hear from you.</h2>
        <div>
          <button>Get in touch</button>
          <div>
            <p>Find me in these spaces too</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        
      </section>
    </main>
  )
}

export default App