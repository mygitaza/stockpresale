import React from 'react'
import './Dashnav.css'
import logo from '../../../assets/logo.svg'

const Dashnav = () => {
  return (
    <header className='dashheader'>
        <nav className='dashnav'>
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>MODE is a revolutionary investment opportunity that aims to redefine building data and energy management by consolidating data from all building systems into one intelligent solution. Our presale gives early investors the advantage before our official stock launch.</p>
            </div>
        </nav>
    </header>
  )
}

export default Dashnav