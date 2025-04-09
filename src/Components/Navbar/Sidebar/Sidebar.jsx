import React, { useContext } from "react";
import "./Sidebar.css";
import { jack, simon, tom } from "../../Files";
import {
  House,
  CircleUser,
  History,
  Youtube,
  TvMinimalPlay,
} from "../../../assets/Icons.FIle";
import { ThemeContext } from "../../../App";

const Sidebar = () => {
  const { lightToggle, sidebar } = useContext(ThemeContext);
  return (
    <div
      className={`sidebar ${sidebar ? "" : "small-sidebar"} ${
        lightToggle ? "dark-mode" : ""
      }`}
    >
      <div className="sortcut-links">
        <div className="side-link">
          <House className="icon House-icon" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <TvMinimalPlay className="icon TvMinimalPlay-icon" />
          <p>Subscriptions</p>
        </div>
        <div className="side-link">
          <CircleUser className="icon CircleUser-icon" />
          <p>You</p>
        </div>
      </div>
      {!sidebar ? (
        ""
      ) : (
        <>
          <hr />
          <div className="you-list">
            <h3>You</h3>
            <div className="side-link">
              <History className="icon History-icon" />
              <p>History</p>
            </div>
            <div className="side-link">
              <Youtube className="icon Youtube-icon" />
              <p>Your Video</p>
            </div>
          </div>
          <hr />
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
              <img src={tom} alt="" />
              <p>Nas Daily</p>
            </div>
            <div className="side-link">
              <img src={tom} alt="" />
              <p>5-Minute</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
