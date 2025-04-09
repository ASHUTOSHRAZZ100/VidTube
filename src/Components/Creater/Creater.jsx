import React, { useContext, useEffect, useState } from "react";
import "./Creater.css";
import { backgroundImg, tom } from "../Files";
import { ThemeContext } from "../../App";

const Creater = () => {
  const [subscribeTogle, setSubscribeTogle] = useState(false);
  const [channel, setChannel] = useState(null);
  const { lightToggle } = useContext(ThemeContext);

  // useEffect(() => {
  //   const fetchChannel = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${import.meta.env.VITE_SERVER}/users/channel/${user.username}`,
  //         { withCredentials: true }
  //       );
  //       console.log("Channel fetched:", res);
  //       setChannel(res.data.data); // because your API response is like: { success, message, data }
  //     } catch (error) {
  //       console.error("Error fetching channel:", error);
  //     }
  //   };
  // console.log("useeffect 12365477896")
  //   if (user?.username) fetchChannel();
  // }, [user])

  return (
    <div className={`creater-container ${lightToggle ? "dark-mode" : ""}`}>
      <img
        className="channel-banner"
        src={backgroundImg}
        alt="Channel banner background"
      />
      <div className="creater-content">
        <img
          className="channel-profile"
          src={tom}
          alt="Creator profile picture"
        />
        <div className="creator-info">
          <h2 className="channel-name">{"Ashutosh Raj"}</h2>
          <p className="channel-description">
            Web Developer | AI & ML Enthusiast | Sharing Tech Knowledge
          </p>
          <p className="channel-stats">1.2M Subscribers &bull; 120 Videos</p>
          <button
            className={`subscribe-btn ${
              subscribeTogle ? "subscribe-btn-toggle" : ""
            }`}
            type="button"
            onClick={() => setSubscribeTogle((prev) => !prev)}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Creater;
