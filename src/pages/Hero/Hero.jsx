import React from 'react'
import './Hero.css'
import heroImage from '../../assets/heroImagemain.svg'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Hero = () => {
  const {setShowLogin} = useOutletContext();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user); // ✅ Get user from Redux
  


  const handlePreSaleClick = () =>{
    if (user) {
      navigate('/dashboard/add-stock');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowLogin(true);
    }
  }
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>Invest In <br />
            San Mateo</h1>
            <p>The investing platform connecting 2.1M users to emerging startups and the world's top private companies.</p>
            <h2>Invest Early, Profit Big.</h2>
            <p>Be among the first to own a piece of the future. Join the presale for Mode and unlock exclusive early-bird benefits.</p>
            <button onClick={handlePreSaleClick} className='presale-btn'>Join the Presale</button>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt="hero image" />
        </div>
    </div>
  )
}

export default Hero