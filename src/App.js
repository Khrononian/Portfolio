import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3, faSquareJs, faReact, faGitAlt, faNpm } from '@fortawesome/free-brands-svg-icons'
import laptop from './laptop.webp'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <div>
            <li><FontAwesomeIcon icon={faGithub} style={{color: 'white'}} size='lg' /></li>
            <li><FontAwesomeIcon icon={faLinkedin} style={{color: '#0072b1'}} size='lg' /></li>
            <li><FontAwesomeIcon icon={faEnvelope}  style={{color: 'white'}} size='lg' /></li>
          </div>
        </ul>
      </nav>
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
              <div>
                <div>
                  <img />
                </div>
                <p>Steam Clone</p>
                <p>Replica of the steam website to showcase games</p>
                <div>
                  <p>React</p>
                  <p>MUI</p>
                </div>
                <div>
                  <button><FontAwesomeIcon icon={faEye} /> Live</button>
                  <button><FontAwesomeIcon icon={faCode} /> Code</button>
                </div>
              </div>

              <div>
                <div>
                  <img />
                </div>
                <p>League of Legend Champions</p>
                <p>Champions from league of legends </p>
                <div>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                  <p>Webpack</p>
                </div>
                <div>
                  <button><FontAwesomeIcon icon={faEye} /> Live</button>
                  <button><FontAwesomeIcon icon={faCode} /> Code</button>
                </div>
              </div>

              <div>
                <div>
                  <img />
                </div>
                <p>Where's Waldo</p>
                <p>Replica of the steam website to showcase games</p>
                <div>
                  <p>React</p>
                  <p>MUI</p>
                </div>
                <div>
                  <button><FontAwesomeIcon icon={faEye} /> Live</button>
                  <button><FontAwesomeIcon icon={faCode} /> Code</button>
                </div>
              </div>

              <div>
                <div>
                  <img />
                </div>
                <p>Fallout Memory Card Game</p>
                <p>Memory card game with creatures from the fallout game</p>
                <div>
                  <p>React</p>
                </div>
                <div>
                  <button><FontAwesomeIcon icon={faEye} /> Live</button>
                  <button><FontAwesomeIcon icon={faCode} /> Code</button>
                </div>
              </div>

            </div>
        </div>
      </main>
    </div>
  );
}

export default App;