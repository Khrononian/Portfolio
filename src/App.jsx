import { useState } from 'react'
import Loading from './Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo  from './images/previewPowerOn.png'

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
          <li><FontAwesomeIcon icon={faSquareGithub} /></li>
          <li><FontAwesomeIcon icon={faSquareLinkedin} /></li>
        </ul>
      </nav>
      <header>
        <h3>Hey there, my name is</h3>
        <h1>Alvin Barnes</h1>
        <h3>Frontend Developer</h3>
      </header>
      <section>
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
      <section>
        <h2>Projects</h2>
        <div>
          <div>
            <img src={logo} alt='Logo'/>
            <h3>Fallout Terminal</h3>
          </div>

        </div>
      </section>
    </main>
  )
}

export default App