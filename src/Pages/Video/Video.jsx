import React, { useContext } from "react";
import "./video.css";
import { PlayVideo, Recommended } from "../../Components/Components.Files.js";
import { ThemeContext } from "../../App";

const Video = () => {
  const { lightToggle } = useContext(ThemeContext);
  return (
    <div className={`play-container ${lightToggle ? "dark-mode" : ""}`}>
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
