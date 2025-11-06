import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import './styles/LoadingPage.css'

const Loading = () => {
  useEffect(() => {
    const orbit = document.querySelector('.orbit');
    const loadingPage = document.querySelector('.loading-page')
    const root = document.getElementById('root')
    
    root.parentElement.classList.add('hideScroll')
    
    orbit.addEventListener('animationend', (element) => {
      const nav = document.getElementsByTagName('nav');

      console.log('FIRST', element)
      setTimeout(() => {
        if (element.animationName == 'orbit') {
          console.log('NEW')
          nav[0].prepend(orbit)
          loadingPage.remove()
          orbit.classList.remove('initial-orbit')
          for (let i = 0; i < orbit.children.length; i++) {
            if (orbit.children[i].classList.contains('left')) {
              console.log('WOY')
              orbit.children[i].classList.add('left-stats')
              root.parentElement.classList.remove('hideScroll');
              
              console.log(orbit.children[i])
              
            }
            if (orbit.children[i].classList.contains('middle')) orbit.children[i].classList.add('middle-stats')
            if (orbit.children[i].classList.contains('right')) orbit.children[i].classList.add('right-stats')
          }
        }
      }, 3000)
    })
  }, [])

  return (
    <div className='loading-page'>
        <div className='orbit initial-orbit'>
            <FontAwesomeIcon className='left' icon={faCircleNodes} />
            <FontAwesomeIcon className='middle' icon={faCircleNodes} />
            <FontAwesomeIcon className='right' icon={faCircleNodes} />
        </div>
    </div>
  )
}

export default Loading