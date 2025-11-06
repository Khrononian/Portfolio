import { useEffect, useRef, useState } from 'react'
import Loading from './Loading'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin, faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faGears, faFire, faFilePdf, faEnvelope, faCode, faGlobe, faGamepad, faWifi, faDesktop, faBars } from '@fortawesome/free-solid-svg-icons'

import './styles/App.css'

function App() {
  const [showHeaders, setShowHeaders] = useState(false) 
  const [chosenIcons, setChosenIcons] = useState('')
  const icons = [faCode, faGlobe, faGamepad, faWifi, faDesktop]
  const menuRef = useRef()
  
  setTimeout(() => {
    setShowHeaders(true)
  }, 8000)

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current = (current + 1) % icons.length
      setChosenIcons(icons[current])
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  // const startSvgAnimation = () => {
  //   console.log('TIMER', showAnimation)
  //   setTimeout(() => {
  //     setShowAnimation(true)
      
  //     setTimeout(() => {
  //       console.log('INNERTIMER', showAnimation)
  //       setShowAnimation(false)
  //       startSvgAnimation()
  //     }, 5400)
  //   }, 5000)
  // }
  const showHamburgerMenu = () => {
    const menu = menuRef.current
    console.log(menuRef, menuRef.current)
    
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

  // while (showHeaders == true) {
  //   setTimeout(() => {
  //     setShowAnimation((current => !current))
  //   }, 4000)
  // }

  return (
    <main>
      <Loading />
      <nav className={showHeaders == false ? 'hide' : 'fadeUp active'}>
        
        {/* <div className='menu-list' ref={menuRef}>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li><a href='' target='_blank'>Resume</a></li>
          </ul>
        </div> */}
        <a onClick={showHamburgerMenu} className='menu'><FontAwesomeIcon icon={faBars}/> </a>
        <ul className='main-list'>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><a href='' target='_blank'>Resume</a></li>
        </ul>
        
      </nav>
      
      <div className='menu-list' ref={menuRef}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li><a href='' target='_blank'>Resume</a></li>
        </ul>
      </div>
      {/* <header className='fadeUp intro hide'> */}
      <header className={showHeaders == false ? 'hide' : 'fadeUp active'}>
        <h1>Alvin <span>Barnes</span></h1>
        <div className='header-name'>
          <h2>Frontend Developer</h2>
          {/* <FontAwesomeIcon icon={faCode} className={showAnimation == false ? '' : 'header-svg-animation'} /> */}
          <FontAwesomeIcon icon={chosenIcons} className='header-svg-animation' />
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
            <li><a href='' target='_blank'><FontAwesomeIcon icon={faSquareLinkedin} /></a> </li>
            <li><a href='' className='last-link'><FontAwesomeIcon icon={faEnvelope} /></a></li>
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