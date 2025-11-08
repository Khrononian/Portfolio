import { useEffect, useRef, useState } from 'react'
import Loading from './Loading'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin, faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faGears, faFire, faFilePdf, faEnvelope, faCode, faGlobe, faGamepad, faWifi, faDesktop, faBars, faX } from '@fortawesome/free-solid-svg-icons'
// import { HashLink } from 'react-router-hash-link'
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
    }, 7500)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % icons.length)
      setChosenIcons(icons[index])
    }, 7000)

    return () => clearInterval(interval)
  }, [index])

  useEffect(() => {
    setToggleAnimation(false)

    requestAnimationFrame(() => setToggleAnimation(true))
  }, [index, toggleAnimation])

  // useEffect(() => {
  //   const icon = iconRef.current
  //   let current = 0;
  //   const interval = setInterval(() => {
  //     console.log('ICON', icon, icon.querySelector('svg'))

  //     // setToggleAnimation(current => !current)
  //     setToggleAnimation(false)

  //     requestAnimationFrame(() => setToggleAnimation(true))
    
        
  //     current = (current + 1) % icons.length
  //     setChosenIcons(icons[current])

      
  //   }, 7000)

  //   return () => clearInterval(interval)
  // }, [])

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
        
        {/* <div className='menu-list' ref={menuRef}>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li><a href='' target='_blank'>Resume</a></li>
          </ul>
        </div> */}
        <a onClick={showHamburgerMenu} className={menuToggle == false ? 'menu slides-right' : 'menu slides-left'}><FontAwesomeIcon icon={menuToggle == false ? faBars : faX}/> </a>
        <ul className='main-list'>
          {/* <li><HashLink smooth to='/#about'>About</HashLink></li>
          <li><HashLink smooth to='/#projects'>Projects</HashLink></li>
          <li><HashLink smooth to='/#contact'>Contact</HashLink></li> */}
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
      {/* <header className='fadeUp intro hide'> */}
      <header className={showHeaders == false ? 'hide' : 'fadeUp active'}>
        <h1>Alvin <span>Barnes</span></h1>
        <div className='header-name' ref={iconRef}>
          <h2>Frontend Developer</h2>
          {/* <FontAwesomeIcon icon={faCode} className={showAnimation == false ? '' : 'header-svg-animation'} /> */}
          <FontAwesomeIcon icon={chosenIcons} className={toggleAnimation == false ? 'header-svg-glow' : 'header-svg-animation'} />
          {/* <FontAwesomeIcon icon={chosenIcons} className='header-svg-animation' /> */}
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