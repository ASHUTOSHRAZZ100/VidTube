import React from 'react'
import './Creater.css'
import {backgroundImg,tom}from '../Files'
const Creater = () => {
  return (
    <div className='creater-container'>
        <img className="channel-banner" src={backgroundImg} alt="" />
      <div className='creater-content'>
        <img className="channel-profile" src={tom} alt="" />
        <div className="creator-info">
        <h2 className="channel-name">Ashutosh Raj</h2>
          <p className="channel-description">
            Web Developer | AI & ML Enthusiast | Sharing Tech Knowledge 
          </p>
          <p className="channel-stats">1.2M Subscribers &bull; 120 Videos</p>
          <button  className="subscribe-btn" type="button">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Creater