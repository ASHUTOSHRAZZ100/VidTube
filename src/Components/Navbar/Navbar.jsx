import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  menu,
  logo,
  search,
  upload,
  lightDark,
  notification,
  user_profile,
} from "../Files";

const Navbar = ({ setSidebar, setLightToggle, lightToggle }) => {
  return (
    <nav className={`flex-div ${lightToggle ? "dark-mode" : ""}`}>
      <div className="nav-left flex-div">
        <img
          className="menu_icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu}
          alt="menu-icon"
        />
        <Link to={`/`}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload} alt="" />
        <img
          src={lightDark}
          alt="toggle-icon"
          onClick={() => setLightToggle((prev) => !prev)}
        />
        <img src={notification} alt="" />{" "}
        <img className="user-icon" src={user_profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
