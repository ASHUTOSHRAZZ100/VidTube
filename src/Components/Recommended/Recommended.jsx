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
  return (
    <div className="recommended">
      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p >199k Views &bull; 3 days</p>
        </div>
        <Link >
        <img id="img-menu" src={dots} alt="" />
        </Link>
      </div>
      <div className="side-video-list">
        <img src={thumbnail2} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail3} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail4} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail5} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail6} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail7} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail8} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumbnail1} alt="" />
        <div className="vid-info">
          <h4>Best Channel that help us to</h4>
          <p>Great Stack</p>
          <p>199k Views</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
