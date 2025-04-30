import React from 'react'
import './Join.css'
import earlyIcon from '../../assets/earlyIcon.svg'
import limitedIcon from '../../assets/limitedIcon.svg'
import priorIcon from '../../assets/priorIcon.svg'

const join_list = [
    {
        icon: earlyIcon,
        title: "Early access pricing",
        subTitle: "Having the opportunity to take advantage of exclusive deals, promotions, and % units before they become available to the general public."
    },
    {
        icon: limitedIcon,
        title: "Limited time bonus shares",
        subTitle: "It is specifically beneficial for investors who believe in the company’s long term goal and want to increase their investment in the same. The investor doesn’t need to pay any tax upon receiving the bonus shares."
    },
    {
        icon: priorIcon,
        title: "Priority investor status",
        subTitle: "Participating preference shares are a type of preference share that offers investors not only a fixed dividend rate and liquidation preference but also the opportunity to participate in any additional profits or proceeds after the initial preferences have been satisfied."
    },
]

const Join = () => {
  return (
    <div className='join'>
        <h1>Why You Should Join the Presale</h1>
        <div className="join-bottom-wrapper">
            {
                join_list.map((item,index)=>(
                    <div className='join-list' key={index}>
                        <div className="join-list-image">
                            <img src={item.icon} alt="" />
                        </div>
                        <div className="join-content">
                            <h4>{item.title}</h4>
                            <p>{item.subTitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Join