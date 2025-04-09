import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logo, user_profile } from "../Files";
import { ThemeContext } from "../../App";
import {
  CircleUser,
  Menu,
  Search,
  SunMoon,
  Bell,
  Upload,
} from "../../assets/Icons.FIle";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    lightToggle,
    setLightToggle,
    setSidebar,
    userDropdown,
    setUserDropdown,
  } = useContext(ThemeContext);

  const handleLogout = async () => {
    try {
      console.log("logout");
      await axios.post(
        `${import.meta.env.VITE_SERVER}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      // Clear user from context
      console.log("logout1");
      setUser(null);
      console.log("logout2");

      // Redirect to login or homepage
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className={`flex-div ${lightToggle ? "dark-mode" : ""}`}>
      <div className="nav-left flex-div">
        <Menu
          className="icon menu_icon"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <Link to={`/`}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <Search className="icon search-icon" onClick={() => {}} />
        </div>
      </div>
      <div className="nav-right flex-div">
        {true && (
          <>
            <Upload className="icon upload-icon" />
            <Bell className="icon bell-icon" />
          </>
        )}
        <SunMoon
          className="icon sun-moon-icon"
          onClick={() => setLightToggle((prev) => !prev)}
        />
        {true ? (
          <>
            <img
              className="user-icon"
              src={user_profile}
              alt="user-icon"
              onClick={() => setUserDropdown((prev) => !prev)}
            />
            <ul className={`user-dropdown ${userDropdown ? "active" : ""}`}>
              <li>Hello, {"Guest"}</li>
              <li onClick={() => navigate(`/creater/${123}`)}>Profile</li>
              <li onClick={() => navigate("/setting")}>Setting</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </>
        ) : (
          <div
            className="sign-button flex-div"
            onClick={() => {
              navigate(`/login`);
            }}
          >
            <CircleUser className="circleUser" />
            <p>SignIn</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
