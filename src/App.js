import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3, faSquareJs, faReact, faGit, faNpm } from '@fortawesome/free-brands-svg-icons'

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
            <li><FontAwesomeIcon icon={faGithub} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faEnvelope} /></li>
          </div>
        </ul>
      </nav>
      <header>
        <h1>Hi, my name is Alvin</h1>
        <h2>Frontend Developer</h2>
      </header>
      <main>
        <div>
          <h2>About Me</h2>
          <p>I'm a self taught Front End Developer looking to expand my horizons. My programming journey started when I decided to start coding again, but in a different field. From there, the Odin Project became one of the ways to dive deeper into coding. Aside from coding, I am a gamer, rollerblading and spending time with my cat.</p>
        </div>
        <div>
          <h2>Technologies</h2>
            <div>
              <div>
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div>
                <p>Javascript</p>
                <p>React</p>
              </div>
              <div>
                <p>Git</p>
                <p>Npm</p>
              </div>
              <div>
                <p>Webpack</p>
                <p>Github</p>
              </div>
              <div>
                <p>Firebase</p>
                <p>Jest</p>
              </div>
            </div>
        </div>
        <div>
          <h2>Projects</h2>
            <div>
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