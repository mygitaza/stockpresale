import React, { useEffect, useState } from 'react'
import './Addstock.css'
import copyIcon from '../../../assets/copyIcon.svg'
import Stockheader from '../../../components/Stockheader/Stockheader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTotal } from '../../../redux/slices/stockSlice';

const Addstock = () => {
    const [usdValue, setUsdValue] = useState('');
    const [total, setTotalValue] = useState(0);
    const [copyText,setCopyText] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);


    const modeUnit = 0.9;

    useEffect(()=>{
        const totalCalc = parseFloat(usdValue || 0) * modeUnit;
        const calculatedTotal = Number(totalCalc.toFixed(2));
        setTotalValue(calculatedTotal);
        dispatch(setTotal(calculatedTotal));
    },[usdValue, dispatch]);

    const handleProceedClick = async () => {
        if(!user || !user.id){
            alert("You must be logged in to perform this action");
            return;
        }

        if (total <= 0 || isNaN(total)) {
            alert("Invalid total");
            return;
          }
      
          navigate('/dashboard/view-stock');
    }

    const handleCopyText = ()=>{
        const addressText = document.querySelector('.address').innerText;
        navigator.clipboard.writeText(addressText)
        .then(() => {
        setCopyText(true);
        setTimeout(() => setCopyText(false), 60000);
    })
    .catch(err => {
      console.error('Failed to copy!', err);
    });
    }

  return (
    <div className='addstock'>
        <Stockheader title ="Get Stock MODE Inc" />
        <div className="addstock-inputs">
            <div className="usd addstock-input">
                <p>USD</p>
                <input className='usd-number-input' type="number" value={usdValue} onChange={(e)=>setUsdValue(e.target.value)}required />
            </div>
            <div className="unit addstock-input">
                <p> MODE UNIT</p>
                <input className='mode-unit-input' type="number" readOnly value={modeUnit} />
            </div>
            <div className="total-unit addstock-input">
                <p>TOTAL UNITS</p>
                <div className="unitsvalue">
                    <p className='total-value'>{total}</p>
                </div>
            </div>
        </div>
        <div className="proceed">
        {usdValue && (
          <div className="proceed-copy">
            { copyText && <p className='copied-text'>Copied</p>}
            <div className='wallets'>
                <p className='wallets-title'>USDT, <br /> Network = Trc20:</p>
            <p className='address'>TMpxzAsbHH4EadaApJrBGFGTysXxfHWEwR</p>
            <img src={copyIcon} alt="copy icon" onClick={handleCopyText} />
            </div>
            { copyText && <p className='copied-text'>Copied</p>}
            <div className='wallets'>
                <p className='wallets-title'>BTC:</p>
            <p className='address'>bc1qw87kzv7kajg8e283tszkrtc268gfvyv6n8ap0n</p>
            <img src={copyIcon} alt="copy icon" onClick={handleCopyText} />
            </div>
          </div>
        )}
            <button onClick={handleProceedClick} disabled={total <= 0 || isNaN(total)} className='proceed-btn'>Proceed</button>
        </div>
    </div>
  )
}

export default Addstock