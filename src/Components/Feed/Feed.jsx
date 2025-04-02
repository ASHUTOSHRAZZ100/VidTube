import React, { useState } from "react";
import "./Feed.css";
import {
  dots,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
  tom,
} from "../Files";
import { Link } from "react-router-dom";

const Feed = () => {

  const [tittle,setTitle] = useState("Best channel to learn codimg that help you to be a web developer")

  const checkHeaderLenght = (header)=>{
    header.trim();
    if(header.length>67){
     header= header.substring(0,67)+'...'
    }
    return header;
  }
  const arr = [1,2,3,4,5]

  return (
    <div className="feed">
    <Link to={`video/20/4521`} className="card">
        <img src={thumbnail1} alt="" />
        <div className="thumbnail-creater">
          <img id="creater" src={tom} alt="" />
          <div >
       
            <h2>
              {checkHeaderLenght("Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus nisi omnis rem libero suscipit, esse mollitia culpa dolores minus itaque, quisquam tempora voluptas nesciunt consequuntur nobis dignissimos et quia?")}
            </h2>
            <Link id="creater-link" to={`video/20/4590`}>Greatstack</Link>
            <p>15k views &bull; 2 day ago</p>
          </div>
          <Link>
            <img id="img-menu" src={dots} alt="" />
          </Link>
        </div>
      </Link>
      {
        arr.map((vlaue)=>(
          <Link to={`video/20/4521`} className="card">
          <img src={thumbnail1} alt="" />
          <div className="thumbnail-creater">
            <img id="creater" src={tom} alt="" />
            <div >
         
              <h2>
                {checkHeaderLenght("Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus nisi omnis rem libero suscipit, esse mollitia culpa dolores minus itaque, quisquam tempora voluptas nesciunt consequuntur nobis dignissimos et quia?")}
              </h2>
              <Link id="creater-link" to={`video/20/4590`}>Greatstack</Link>
              <p>15k views &bull; 2 day ago</p>
            </div>
            <Link>
              <img id="img-menu" src={dots} alt="" />
            </Link>
          </div>
        </Link>
        ))
      }
    </div>
  );
};

export default Feed;
