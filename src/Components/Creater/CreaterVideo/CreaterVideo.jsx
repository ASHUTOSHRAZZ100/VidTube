import React, { useContext, useState } from "react";
import "./CreaterVideo.css";
import { useNavigate } from "react-router-dom";
import { thumbnail1 } from "../../Files";
import ImageMenu from "../../Buttons/ImageMenu/ImageMenu";
import { ThemeContext } from "../../../App";

const CreaterVideo = () => {
  const navigate = useNavigate();
  const { lightToggle } = useContext(ThemeContext);

  const checkHeaderLenght = (header) => {
    header = header.trim();
    if (header.length > 67) {
      header = header.substring(0, 67) + "...";
    }
    return header;
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

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
        {arr.map((_, index) => {
          const dropdownOpen = openDropdownIndex === index;
          const setDropdownOpen = (state) => {
            if (state) {
              setOpenDropdownIndex(index);
            } else {
              setOpenDropdownIndex(null);
            }
          };

          return (
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
                <ImageMenu
                  lightToggle={lightToggle}
                  dropdownOpen={dropdownOpen}
                  setDropdownOpen={setDropdownOpen}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreaterVideo;
