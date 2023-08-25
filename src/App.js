import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faCode, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3, faSquareJs, faReact, faGitAlt, faNpm } from '@fortawesome/free-brands-svg-icons'
import laptop from './laptop.webp'
import SteamImg from './Images/SteamClone.png'
import LeagueImg from './Images/LeagueOfLegends.png'
import WaldoImg from './Images/WheresWaldo.png'
import FalloutImg from './Images/FalloutMemoryCard.png'
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle(prev => !prev)

  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <div>
            <li><a href='https://github.com/Khrononian' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: 'white'}} size='lg' /></a></li>
            <li><a href='' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color: '#0072b1'}} size='lg' /></a></li>
            <li><a href='mailto:Alv.Barnes@gmail.com' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faEnvelope}  style={{color: 'white'}} size='lg' /></a></li>
          </div>
        </ul>
        {/* <FontAwesomeIcon onClick={toggleMenu} icon={faBars} style={{color: '#EAE7DC'}} size='2xl' className={`menu ${toggle === false ? '' : 'menu-animation'}`} /> */}
        <div onClick={toggleMenu} className={`menu-blocks ${toggle === false ? '' : 'menu-animation'}`}>
          <div>
            <input type='checkbox' />
            <div className='one line'></div>
            <div className='two line'></div>
            <div className='three line'></div>
          </div>
        </div>
        
      </nav>
      <ul className='menu-slide'>
            <li><a href='' rel='noreferrer'>Home</a></li>
            <li><a href='' rel='noreferrer'>About</a></li>
            <li><a href='' rel='noreferrer'>Skills</a></li>
            <li><a href='' rel='noreferrer'>Projects</a></li>
            <div>
              <li><a href='https://github.com/Khrononian' rel='noreferrer'><FontAwesomeIcon icon={faGithub} style={{color: 'white'}} size='lg' /></a></li>
              <li><a href='' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} style={{color: '#0072b1'}} size='lg' /></a></li>
              <li><a href='mailto:Alv.Barnes@gmail.com' rel='noreferrer'><FontAwesomeIcon icon={faEnvelope}  style={{color: 'white'}} size='lg' /></a></li>
            </div>
          </ul>
      <header>
        <h1>Hey, my name is <span>Alvin</span></h1>
        <h2>Frontend Developer</h2>
      </header>
      <main>
        <div className='about sub'>
          <h2>About Me</h2>
          <div>
            <p>I'm a self-taught Front End Developer looking to expand my horizons. The first time I started anything coding related was in middle school on a site called Roblox. From my middle school years until my freshman year of high school, I would code games on Roblox in the language of Lua. A year and a half after graduating I decided to get back into coding but in a different field. From there, I found the Odin Project which became one of the many ways to dive deeper into coding. Aside from coding, I am a gamer, rollerblading and spending time with my cat.</p>
            <img src={laptop} alt='laptop' />
          </div>
          
        </div>
        <div className='tech sub'>
          <h2>Technologies</h2>
            <div className='tech-div'>
              <div>
                <p><FontAwesomeIcon icon={faHtml5} style={{color: '#FF5733'}} size='xl' /> HTML</p>
                <p><FontAwesomeIcon icon={faCss3}  style={{color: "#005eff"}} size='xl' /> CSS</p>
              </div>
              <div>
                <p><FontAwesomeIcon icon={faSquareJs} style={{color: '#F0DB4F'}} size='xl' /> Javascript</p>
                <p><FontAwesomeIcon icon={faReact} style={{color: '00d8ff'}} size='xl' /> React</p>
              </div>
              <div>
                <p><FontAwesomeIcon icon={faGitAlt} style={{color: '#F1502F'}} size='xl' /> Git</p>
                <p><FontAwesomeIcon icon={faNpm} style={{color: '#CC3534'}} size='xl' /> Npm</p>
              </div>
              <div>
                <p><FontAwesomeIcon icon={faGithub} style={{color: 'white'}} size='xl' /> Github</p>
              </div>
            </div>
        </div>
        <div className='projects sub'>
          <h2>Projects</h2>
            <div className='inner-project'>
              
              <div className='padded-div'>
                {/* <div>
                  <img src={SteamImg} alt='Project'/>
                </div> */}
                <img className='project-img' src={SteamImg} alt='Project'/>
                <h2>Steam Clone</h2>
                <p>Replica of the steam website to showcase games</p>
                <div className='tech'>
                  <p>React</p>
                  <p>MUI</p>
                </div>
                <div className='btns'>
                  <a href='https://steampoweredclone.netlify.app/' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faEye} /> Live</button></a>
                  <a href='https://github.com/Khrononian/SteamClone' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faCode} /> Code</button></a>
                </div>
              </div>

              <div className='padded-div'>
                <img className='project-img' src={LeagueImg} alt='Project'/>
                <h2>League of Legends</h2>
                <p>Champions from league of legends with the help of an API</p>
                <div className='tech'>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>Webpack</p>
                </div>
                <div className='btns'>
                  <a href='https://leagueoflegendsna.netlify.app/' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faEye} /> Live</button></a>
                  <a href='https://github.com/Khrononian/League-Champions' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faCode} /> Code</button></a>
                </div>
              </div>

              <div className='padded-div'>
                <img className='project-img' src={WaldoImg} alt='Project'/>
                <h2>Where's Waldo</h2>
                <p>Where's Waldo game with the usage of open view consoles</p>
                <div className='tech'>
                  <p>React</p>
                  <p>MUI</p>
                </div>
                <div className='btns'>
                  <a href='https://wheresthatcharacter.netlify.app/' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faEye} /> Live</button></a>
                  <a href='https://github.com/Khrononian/Where-s-Waldo' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faCode} /> Code</button></a>
                </div>
              </div>

              <div className='padded-div'>
                <img className='project-img' src={FalloutImg} alt='Project'/>
                <h2>Fallout Memory Card Game</h2>
                <p>Memory card game with creatures from the fallout game</p>
                <div className='tech'>
                  <p>React</p>
                </div>
                <div className='btns'>
                  <a href='https://falloutmemorycard.netlify.app/' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faEye} /> Live</button></a>
                  <a href='https://github.com/Khrononian/Memory-Card' rel='noreferrer' target='_blank'><button><FontAwesomeIcon icon={faCode} /> Code</button></a>
                </div>
              </div>

            </div>
        </div>
      </main>
    </div>
  );
}

export default App;