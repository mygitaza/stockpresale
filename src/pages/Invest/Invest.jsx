import React from 'react'
import './Invest.css'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'


const invest_list = [
    {
        title: "Invest 1000+ for",
        subtitle: "5% Bonus"
    },
    {
        title: "Invest 5000+ for",
        subtitle: "10% Bonus"
    },
    {
        title: "Invest 10000+ for",
        subtitle: "15% Bonus"
    },
    {
        title: "Invest 20000+ for",
        subtitle: "20% Bonus"
    },
]
const Invest = () => {
    const {setShowLogin} = useOutletContext();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handlePreSaleClick = () =>{
        if (user) {
          navigate('/dashboard/add-stock');
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setShowLogin(true);
        }
      }
  return (
    <div className='invest'>
        <div className="invest-header">
        <h1 className='invest-headerOne'>Invest & Claim up to</h1>
        <h1 className='invest-headerTwo'>20% Bonus Shares</h1>
        </div>
        <div className="invest-wrapper">
            {
                invest_list.map((item,index)=>(
                    <div className='invest-content' key={index}>
                        <h1>{item.title}</h1>
                        <h1 className='invest-content-headerOne'>{item.subtitle}</h1>
                    </div>
                ))
            }
        </div>
        <button onClick={handlePreSaleClick} className='presale-btn'>Join the Presale</button>
    </div>
  )
}

export default Invest