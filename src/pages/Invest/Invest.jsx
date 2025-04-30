import React from 'react'
import './Invest.css'
import { useNavigate} from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux'


const investData = [
    {
        name: 'May',
        stock: "MODE Inc",
        unit: 0.9,
        ModeInc: 120,
        stockIndex: 129
    },
    {
        name: 'Jun',
        stock: "MODE Inc",
        unit: 12,
        ModeInc: 250,
        stockIndex: 280
    },
    {
        name: 'Aug',
        stock: "MODE Inc",
        unit: 14,
        ModeInc: 312,
        stockIndex: 390
    },
    {
        name: 'Sept',
        stock: "MODE Inc",
        unit: 16,
        ModeInc: 456,
        stockIndex: 500
    },
    {
        name: 'Dec',
        stock: "MODE Inc",
        unit: 18,
        ModeInc: 710,
        stockIndex: 800
    },
    {
        name: 'Dec',
        stock: "MODE Inc",
        unit: 18,
        ModeInc: 1000,
        stockIndex: 1250
    },
    
]
const Invest = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handlePreSaleClick = () =>{
        if (user) {
          navigate('/dashboard/add-stock');
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
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={500} height={400} data={investData} margin={{right: 30}}>
        <YAxis/>
        <XAxis dataKey="name"/>
        <CartesianGrid strokeDasharray="5 5"/>
        <Tooltip/>
        <Legend/>
            <Area 
            type="monotone"
            stroke='#2563eb'
            fill='#3b82f6'
            dataKey="ModeInc" 
            stackId="1"
            />
            <Area 
            type="monotone"
            stroke='#7c3aed'
            fill='#8b5cf6'
            dataKey="stockIndex" 
            stackId="1"
            />
        </AreaChart>
        </ResponsiveContainer>
        </div>
        <button onClick={handlePreSaleClick} className='presale-btn'>Join the Presale</button>
    </div>
  )
}

export default Invest