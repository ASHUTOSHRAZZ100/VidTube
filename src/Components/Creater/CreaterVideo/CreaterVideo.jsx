import React from "react";
import "./CreaterVideo.css";
import { useNavigate } from "react-router-dom";
import { thumbnail1, dots, tom, approve } from "../../Files";
const CreaterVideo = ({ lightToggle }) => {
  const navigate = useNavigate();

  const checkHeaderLenght = (header) => {
    header = header.trim();
    if (header.length > 67) {
      header = header.substring(0, 67) + "...";
    }
    return header;
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={`main-container ${lightToggle ? "dark-mode" : ""}`}>
      <ul>
        <li className="section-title">Home</li>
        <li className="section-title">Videos</li>
        <li className="section-title">PlayList</li>
        <li className="section-title">About</li>
      </ul>
      <hr />
      <div className="feed">
        {arr.map((_, index) => (
          <div
            onClick={() => {
              navigate(`/video/1245/2365`);
            }}
            class="video-card"
          >
            <div class="video-thumbnail-container">
              <img
                class="video-thumbnail"
                src={thumbnail1}
                alt="Video thumbnail"
              />
              <span class="video-duration">17:00</span>
            </div>
            <div class="video-content">
              <div class="video-info">
                <h2 class="video-title">
                  100 free seats every month, DSA sheet, Live classes | Coding
                  Hero V2
                </h2>
                <p class="video-meta">25K views • 6 days ago</p>
              </div>
              <img class="menu-icon" src={dots} alt="Options menu" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreaterVideo;
