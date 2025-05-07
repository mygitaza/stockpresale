import React from 'react'
import './Invest.css'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Chart from '../../components/chart/Chart';

const Invest = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handlePreSaleClick = () =>{
        if (user) {
          navigate('/dashboard');
        } else {
            navigate('/login');
        }
      }
  return (
    <div className='invest'>
        <div className="invest-header">
        <h1 className='invest-headerOne'>Invest & Claim up to</h1>
        <h1 className='invest-headerTwo'>20% Bonus Shares</h1>
        </div>
        <div className="invest-wrapper">
        <Chart/>
        </div>
        <button onClick={handlePreSaleClick} className='presale-btn'>Join the Presale</button>
    </div>
  )
}

export default Invest