import React from 'react'
import './Started.css'
import startedImage from '../../assets/startedImage.svg'

const Started = () => {
  return (
    <div className='started'>
      <h1>How to Get Started</h1>
      <div className="started-image">
        <img src={startedImage} alt="started image" />
      </div>
    </div>
  )
}

export default Started