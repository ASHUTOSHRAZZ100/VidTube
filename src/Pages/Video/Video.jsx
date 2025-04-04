import React from "react";
import "./video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = ({ lightToggle }) => {
  console.log("light->", lightToggle);
  return (
    <div className={`play-container ${lightToggle ? "dark-mode" : ""}`}>
      <PlayVideo lightToggle={lightToggle} />
      <Recommended lightToggle={lightToggle} />
    </div>
  );
};

export default Video;
