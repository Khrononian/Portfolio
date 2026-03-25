import { useEffect, useRef, useState } from 'react'
import Loading from './Loading'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { FaEnvelope, FaCode, FaGlobe, FaGamepad, FaWifi, FaDesktop, FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import './styles/App.css'

function App() {
  const [showHeaders, setShowHeaders] = useState(false) 
  const [index, setIndex] = useState(0)
  const [menuToggle, setMenuToggle] = useState(false)
  const [toggleAnimation, setToggleAnimation] = useState(false)
  const icons = [FaCode, FaGlobe, FaGamepad, FaWifi, FaDesktop]
  const Icon = icons[index]
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
        <a onClick={showHamburgerMenu} className={menuToggle == false ? 'menu slides-right' : 'menu slides-left'}>{menuToggle == false ? <FaBars /> : <ImCross />} </a>
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
          <Icon color='#E53935' className={toggleAnimation == false ? 'header-svg-glow' : 'header-svg-animation'} />
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
            <li><a href='https://github.com/Khrononian' target='_blank'><FaGithubSquare /></a></li>
            <li><a href='www.linkedin.com/in/alvin-barnes' target='_blank'><FaLinkedin /></a> </li>
            <li><a href='mailto:Alv.Barnes@gmail.com' className='last-link'><FaEnvelope /></a></li>
          </ul>
        </div>
      </header>
      <About />
      <Projects />
      <Footer 
        github={FaGithubSquare} 
        linkedin={FaLinkedin} 
        email={FaEnvelope}
      />
    </main>
  )
}

export default App