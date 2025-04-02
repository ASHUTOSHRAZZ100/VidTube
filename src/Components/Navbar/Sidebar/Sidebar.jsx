import React from "react";
import "./Sidebar.css";
import {
  home,
  game_icon,
  automobiles,
  sports,
  entertainment,
  tech,
  music,
  blogs,
  news,
  jack,
  simon,
  tom,
  megan,
  cameron,
} from "../../Files";

const Sidebar = ({sidebar}) => {
  console.log(sidebar)
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className="side-link">
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="" />
          <p>Automobile</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="" />
          <p>Tech</p>
        </div>
        <div className="side-link">
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="" />
          <p>Bolg</p>
        </div>
        <div className="side-link">
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link">
            <img src={jack} alt="" />
            <p>PewDiePie</p>
          </div>
          <div className="side-link">
            <img src={simon} alt="" />
            <p>MrBeast</p>
          </div>
          <div className="side-link">
            <img src={tom} alt="" />
            <p>Justin Bieber</p>
          </div>
          <div className="side-link">
            <img src={cameron} alt="" />
            <p>Nas Daily</p>
          </div>
          <div className="side-link">
            <img src={megan} alt="" />
            <p>5-Minute</p>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
