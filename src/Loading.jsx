import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHexagon } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <div>
        <h1>Food</h1>
        <div>
            <FontAwesomeIcon icon={faHexagon} />
            <FontAwesomeIcon icon={faHexagon} />
            <FontAwesomeIcon icon={faHexagon} />
        </div>
        <div>
            <span></span>
        </div>
    </div>
  )
}

export default Loading