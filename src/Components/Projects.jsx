import React from 'react'
import '../styles/Projects.css'
import fallout from '../images/fallouterminal.png'
import steam from '../images/steamclone.png'
import calculator from '../images/tscalculator.png'
import waldo from '../images/whereswaldo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <section className='projects'>
        <h2>Projects</h2>
        <div className='project-container'>
            <div className='card'>
              <img src={fallout} alt='Fallout'/>
              <div>
                <div className='header-btn'>
                  <h3>Fallout Terminal</h3><a className='link' href='https://falloutterminalapp.netlify.app/' target='_blank'> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <p><span>React</span></p>
                <p>A recreation of the in-game computer terminals from the Fallout series. Text based hacking mini game simulated with a retro futuristic green monochrome interface built with react.</p>
              </div>
            </div>
            <div className='card'>
              <img src={steam} alt='Steam'/>
              <div>
                <div className='header-btn'>
                  <h3>Steam Clone</h3>
                  <a href='https://steampoweredclone.netlify.app/' target='_blank'> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <p><span>React</span><span>Firebase</span><span>Material UI</span></p>
                <p>Steam inspired web app which showcases a game library, store and user profiles. Designed with responsive UI to mimic the look and feel of a digital game platform.</p>
              </div>
              
              
            </div>
            <div className='card'>
              <img src={calculator} alt='Calculator'/>
              <div>
                <div className='header-btn'>
                  <h3>TypeScript Calculator</h3>
                  <a href='https://tscalculate.netlify.app/' target='_blank'> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <p><span>React</span><span>TypeScript</span></p>
                <p>Simple calculator to operate any functional operations. First project to work with while learning TypeScript.</p>
              </div>
              
              
            </div>
            <div className='card'>
              <img src={waldo} alt='Waldo'/>
              <div>
                <div className='header-btn'>
                  <h3>Where's Waldo</h3>
                  <a href='https://wheresthatcharacter.netlify.app/' target='_blank'> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                <p><span>JavaScript</span></p>
                <p>A simple interactive app where users search for hidden characters within images.</p>
              </div>
              
              
            </div>
        </div>
    </section>
  )
}

export default Projects