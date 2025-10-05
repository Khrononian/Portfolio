import React from 'react'

import fallout from '../images/previewPowerOn.png'
import steam from '../images/SteamClone.png'
import calculator from '../images/tscalculator.png'
import waldo from '../images/WheresWaldo.png'

const Projects = () => {
  return (
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
  )
}

export default Projects