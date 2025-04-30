import React from 'react'
import './Stockheader.css'
import calenderIcon from '../../assets/calenderIcon.svg'

const Stockheader = ({title}) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
  return (
    <>
        <div className="addstock-header">
                    <h1>{title}</h1>
                    <hr />
                </div>
                <div className="addstock-checks-date">
                    <div className="addstock-date">
                        <h3>Trade Date</h3>
                        <div className="date-wrapper">
                            <img src={calenderIcon} alt="calender" />
                            <p className='todays-date'>{formattedDate}</p>
                        </div>
                    </div>
                    <div className="addstock-check">
                        <h3>Trade Type</h3>
                        <div className="trade-wrapper">
                            <div className="trade-circle">
                                <div className="innercircle"></div>
                            </div>
                            <p>Pre Sale</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Stockheader