import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <div>
        <div>
            <FontAwesomeIcon icon={faCircleNodes} />
            <FontAwesomeIcon icon={faCircleNodes} />
            <FontAwesomeIcon icon={faCircleNodes} />
        </div>
        <div>
            <span></span>
        </div>
    </div>
  )
}

export default Loading