import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import modePhone from '../../assets/modePhone.svg'
import ai from '../../assets/AI.svg'
import automation from '../../assets/Automation.svg'
import buildingmgt from '../../assets/Building-Management.svg'
import cloudService from '../../assets/Cloud-Services.svg'
import iot from '../../assets/IOT.svg'
import paas from '../../assets/PaaS.svg'
import sensor from '../../assets/Sensor-Data.svg'
import smartDevice from '../../assets/Smart-Device.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <h1>About MODE Inc.</h1>
            <p>MODE is a revolutionary investment opportunity that
                aims to redefine building data and energy management by 
                consolidating data from all building systems into one intelligent 
                solution. Our presale gives early 
                investors the advantage before our official stock launch.</p>
                <a href='#readmore' className='about-link' to="">Read more</a>
        </div>
        <div className="about-right">
          <div className="about-right-flow">
            <img src={ai} alt="" />
            <img src={automation} alt="" />
            <img src={buildingmgt} alt="" />
            <img src={cloudService} alt="" />
            <img src={iot} alt="" />
            <img src={paas} alt="" />
            <img src={sensor} alt="" />
            <img src={smartDevice} alt="" />
          </div>
            <img className='modephone' src={modePhone} alt="mode phone" />
        </div>
    </div>
  )
}

export default About