import React from "react";
import "./Navbar.css";
import { Link,useNavigate } from "react-router-dom";
import {
  menu,
  logo,
  search,
  upload,
  lightDark,
  notification,
  user_profile,
} from "../Files";

const Navbar = ({
  setSidebar,
  setLightToggle,
  lightToggle,
  userDropdown,
  setUserDropdown,
}) => {

  const navigate = useNavigate();
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
        <img src={upload} alt="upload-icon" />
        <img src={notification} alt="notification-icon" />
        <img
          src={lightDark}
          alt="toggle-icon"
          onClick={() => setLightToggle((prev) => !prev)}
        />
        <img
          className="user-icon"
          src={user_profile}
          alt="user-icon"
          onClick={() => setUserDropdown((prev) => !prev)}
        />
        <ul className={`user-dropdown ${userDropdown ? "active" : ""}`}>
          <li onClick={() => navigate(`/login`)}>Login</li>
          <li onClick={() => navigate("/settings")}>Settings</li>
          <li onClick={() => navigate("/logout")}>Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
