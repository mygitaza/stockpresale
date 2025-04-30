import React from 'react'
import logo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
// import { isAuthenticated } from '../../util/auth'

const Navbar = ({setShowLogin}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // ✅ Get user from Redux

  const handlePreSaleClick = () => {
    if (user) {
      navigate('/dashboard/add-stock');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <header className="header">
        <nav className="nav">
            <Link  className='image-anchor' to="/" aria-label="Go to homepage">
            <img src={logo} alt="logo" />
            </Link >
            <ul className='nav-list'>
                <li className='nav-list-list'><h3>2X Revenue Growth</h3></li>
                <li className='nav-list-list'><h3>Get 20% Bonus Share</h3></li>
                <li><button className='presale-btn' onClick={handlePreSaleClick}>Join the Presale</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar