import '../styles/Projects.css'
import fallout from '../images/fallouterminalv2.webp'
import calculator from '../images/tscalculatorv2.webp'
import waldo from '../images/whereswaldov2.webp'
import leagueoflegends from '../images/leagueoflegendsv2.webp'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className='projects fadeUp' id='projects'>
        <h2>Projects</h2>
        <div className='project-container'>
          <a className='link' href='https://falloutterminalapp.netlify.app/' aria-label='Fallout link' target='_blank'>
            <div className='card'>
              <img src={fallout} alt='Fallout'/>
              <div>
                <div className='header-btn'>
                  <h3>Fallout Terminal</h3>
                   <FaExternalLinkAlt />
                </div>
                <p><span>React</span></p>
                <p>A recreation of the in-game computer terminals from the Fallout series. Text based hacking mini game simulated with a retro futuristic green monochrome interface built with react.</p>
              </div>
            </div>
          </a>
          <a className='link' href='https://leagueanalytics.netlify.app/' aria-label='League of Legends Analytics link' target='_blank'>
            <div className='card'>
              <img src={leagueoflegends} alt='LeagueOfLegends'/>
              <div>
                <div className='header-btn'>
                  <h3>League of Legends Analytics</h3>
                   <FaExternalLinkAlt />
                </div>
                <p><span>React</span><span>TypeScript</span><span>Firebase</span></p>
                <p>With this app, you can explore player stats, match history, champion data and ranked stats pulled from Riot Games' official API. </p>
              </div>
            </div>
          </a>

          <a href='https://tscalculate.netlify.app/' aria-label='TypeScript Calculator link' target='_blank'>
            <div className='card'>
              <img src={calculator} alt='Calculator'/>
              <div>
                <div className='header-btn'>
                  <h3>TypeScript Calculator</h3>
                   <FaExternalLinkAlt />
                </div>
                <p><span>React</span><span>TypeScript</span></p>
                <p>Simple calculator to operate any functional operations. First project to work with while learning TypeScript.</p>
              </div>
            </div>
          </a>
          <a href='https://wheresthatcharacter.netlify.app/' aria-label="Where's Waldo link" target='_blank'>
            <div className='card'>
              <img src={waldo} alt='Waldo'/>
              <div>
                <div className='header-btn'>
                  <h3>Where's Waldo</h3>
                   <FaExternalLinkAlt />
                </div>
                <p><span>JavaScript</span></p>
                <p>A simple interactive app where users search for hidden characters within images.</p>
              </div>
            </div>
          </a>
        </div>
    </section>
  )
}

export default Projects