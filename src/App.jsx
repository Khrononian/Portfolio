import { useEffect, useRef, useState } from 'react'
import Loading from './Loading'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCode, faGlobe, faGamepad, faWifi, faDesktop, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import './styles/App.css'

function App() {
  const [showHeaders, setShowHeaders] = useState(false) 
  const [index, setIndex] = useState(0)
  const [chosenIcons, setChosenIcons] = useState('')
  const [menuToggle, setMenuToggle] = useState(false)
  const [toggleAnimation, setToggleAnimation] = useState(false)
  const icons = [faCode, faGlobe, faGamepad, faWifi, faDesktop]
  const menuRef = useRef()
  const iconRef = useRef()
  
  useEffect(() => {
    setTimeout(() => {
      setShowHeaders(true)
    }, 5700)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleAnimation(false)
      setIndex(prev => (prev + 1) % icons.length)
      setChosenIcons(icons[index])
    }, 7000)
    
    requestAnimationFrame(() => setToggleAnimation(true))

    return () => clearInterval(interval)
  }, [index])

  const showHamburgerMenu = (event) => {
    const menu = menuRef.current
    console.log(menuRef, menuRef.current, event.target.parentElement)
    
    setMenuToggle(current => !current)

    menu.classList.toggle('hamburger-menu')
  }
  
  const fadeUp = () => {
    const fadeUp = document.querySelectorAll('.fadeUp');

    for (let i = 0; i < fadeUp.length; i++) {
      let height = window.innerHeight;
      let top = fadeUp[i].getBoundingClientRect().top
      let point = 150;

      if (top < height - point) {
        fadeUp[i].classList.add('active')
      } else fadeUp[i].classList.remove('active')
    }
  }
  window.addEventListener('scroll', fadeUp)

  return (
    <main>
      <Loading />
      <nav className={showHeaders == false ? 'hide' : 'fadeUp active'}>
        <a onClick={showHamburgerMenu} className={menuToggle == false ? 'menu slides-right' : 'menu slides-left'}><FontAwesomeIcon icon={menuToggle == false ? faBars : faX}/> </a>
        <ul className='main-list'>
          <li><a href='#about' className='anchor-links'>About</a></li>
          <li><a href='#projects' className='anchor-links'>Projects</a></li>
          <li><a href='#contact' className='anchor-links'>Contact</a></li>
          <li><a href='https://flowcv.com/resume/vmckrler4r' target='_blank' className='nav-resume'>Resume</a></li>
        </ul>
      </nav>

      <div className={menuToggle == false ? 'nav-list menu-appear-up' : 'nav-list menu-appear-down'} ref={menuRef}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><a href='https://flowcv.com/resume/vmckrler4r' target='_blank'>Resume</a></li>
        </ul>
      </div>
      <header className={showHeaders == false ? 'hide' : 'fadeUp active'}>
        <h1>Alvin <span>Barnes</span></h1>
        <div className='header-name' ref={iconRef}>
          <h2>Frontend Developer</h2>
          <FontAwesomeIcon icon={chosenIcons} className={toggleAnimation == false ? 'header-svg-glow' : 'header-svg-animation'} />
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
            <li><a href='www.linkedin.com/in/alvin-barnes' target='_blank'><FontAwesomeIcon icon={faSquareLinkedin} /></a> </li>
            <li><a href='mailto:Alv.Barnes@gmail.com' className='last-link'><FontAwesomeIcon icon={faEnvelope} /></a></li>
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