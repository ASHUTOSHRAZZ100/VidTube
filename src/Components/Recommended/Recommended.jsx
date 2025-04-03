import React from "react";
import "./Recommended.css";
import {
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
  tom,dots
} from "../Files";
import {Link} from 'react-router-dom'

const Recommended = () => {

  const checkHeaderLenght = (header)=>{
    header.trim();
    if(header.length>60){
     header= header.substring(0,60)+'...'
    }
    return header;
  }
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="recommended">
      <div className="side-video-list">
        <img src={thumbnail1} alt="thumbnail-img" />
        <div className="vid-info">
          <h4>{checkHeaderLenght("Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus nisi omnis rem libero suscipit, esse mollitia culpa dolores minus itaque, quisquam tempora voluptas nesciunt consequuntur nobis dignissimos et quia?")}</h4>
          <p>Great Stack</p>
          <p >199k Views &bull; 3 days</p>
        </div>
        <>
        <img id="img-menu" src={dots} alt="dots-icon" />
        </>
      </div>
      {
        arr.map((_,index)=>(
          <div key={index} className="side-video-list">
        <img src={thumbnail1} alt="thumbnail-img" />
        <div className="vid-info">
          <h4>{checkHeaderLenght("Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus nisi omnis rem libero suscipit, esse mollitia culpa dolores minus itaque, quisquam tempora voluptas nesciunt consequuntur nobis dignissimos et quia?")}</h4>
          <p>Great Stack</p>
          <p >199k Views &bull; 3 days</p>
        </div>
        <>
        <img id="img-menu" src={dots} alt="dots-icon" />
        </>
      </div>
        ))
      }
    </div>
  );
};

export default Recommended;
