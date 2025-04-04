import React, { useState } from 'react'
import './Creater.css'
import {backgroundImg,tom}from '../Files'
const Creater = ({lightToggle}) => {
  const [subscribeTogle,setSubscribeTogle] = useState(false);
  return (
    <div className={`creater-container ${lightToggle?"dark-mode":""}`}>
        <img className="channel-banner" src={backgroundImg} alt="Channel banner background" />
      <div className='creater-content'>
        <img className="channel-profile" src={tom} alt="Creator profile picture" />
        <div className="creator-info">
        <h2 className="channel-name">Ashutosh Raj</h2>
          <p className="channel-description">
            Web Developer | AI & ML Enthusiast | Sharing Tech Knowledge 
          </p>
          <p className="channel-stats">1.2M Subscribers &bull; 120 Videos</p>
          <button  className={`subscribe-btn ${subscribeTogle?"subscribe-btn-toggle":""}`} type="button" onClick={()=>setSubscribeTogle(prev=>!prev)}>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Creater