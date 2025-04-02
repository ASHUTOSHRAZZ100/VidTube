import React from "react";
import "./Navbar.css";

import {
  menu,
  logo,
  search,
  upload,
  more,
  notification,
  user_profile,
} from "../Files";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu_icon" src={menu} alt="" />
        <img className="logo" src={logo} alt="" />
      </div>
      <din className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </div>
      </din>
      <div className="nav-right flex-div">
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />{" "}
        <img className="user-icon" src={user_profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
