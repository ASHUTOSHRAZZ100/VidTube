import React, { useContext } from "react";
import "./Profile.css";
import {
  Creater,
  Sidebar,
  CreaterVideo,
} from "../../Components//Components.Files";
import { ThemeContext } from "../../App";

const Profile = () => {
  const { lightToggle, sidebar } = useContext(ThemeContext);
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
