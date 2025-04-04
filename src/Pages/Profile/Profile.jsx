import React from "react";
import "./Profile.css";
import Creater from "../../Components/Creater/Creater";
import Sidebar from "../../Components/Navbar/Sidebar/Sidebar";
import CreaterVideo from "../../Components/Creater/CreaterVideo/CreaterVideo";
const Profile = ({ sidebar, lightToggle }) => {
  console.log("lightToggle->", lightToggle);
  return (
    <div className={`parent-container ${lightToggle ? "dark-mode" : ""}`}>
      <Sidebar sidebar={sidebar} lightToggle={lightToggle} />
      <div
        className={`child-container ${sidebar ? "" : "large-child-container"}`}
      >
        <Creater lightToggle={lightToggle} />
        <CreaterVideo lightToggle={lightToggle} />
      </div>
    </div>
  );
};

export default Profile;
