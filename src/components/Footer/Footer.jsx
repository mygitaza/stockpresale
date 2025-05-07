import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
import Chart from '../chart/Chart';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
        <div className='footer-top'>
        <div className="footer-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="footer-center">
            <Chart/>
        </div>
        </div>
        <hr className='footer-line' />
        <p>© {year}, San Mateo, Inc. All Rights Reserved.</p>
    </div>
  )
}

export default Footer