import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'

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
            <p>Need Help</p>
            <ul>
                <li>Contact us</li>
                <li>Help center</li>
            </ul>
        </div>
        <div className="footer-right">
            <ul>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Disclaimer</li>
            </ul>
        </div>
        </div>
        <hr className='footer-line' />
        <p>© {year}, San Mateo, Inc. All Rights Reserved.</p>
    </div>
  )
}

export default Footer