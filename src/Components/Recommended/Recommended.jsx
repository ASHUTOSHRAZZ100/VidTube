import React, { useState } from "react";
import "./Recommended.css";
import {
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
} from "../Files";
import { useNavigate } from "react-router-dom";
import ImageMenu from "../Buttons/ImageMenu/ImageMenu";
const Recommended = ({ lightToggle }) => {
  const navigate = useNavigate();

  const checkHeaderLenght = (header) => {
    header.trim();
    if (header.length > 60) {
      header = header.substring(0, 60) + "...";
    }
    return header;
  };
  const arr = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
  ];
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  return (
    <div className={`recommended ${lightToggle ? "dark-mode" : ""}`}>
      {arr.map((Value, index) => {
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
            key={index}
            className="side-video-list"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/video/2/160`);
            }}
          >
            <img className="video-thumbnail" src={Value} alt="thumbnail-img" />
            <div className="vid-info">
              <h4 className="video-title">
                {checkHeaderLenght(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus nisi omnis rem libero suscipit, esse mollitia culpa dolores minus itaque, quisquam tempora voluptas nesciunt consequuntur nobis dignissimos et quia?"
                )}
              </h4>
              <p
                className="video-channel-name"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/creater/126`);
                }}
              >
                Great Stack
              </p>
              <p className="video-stats">199k Views &bull; 3 days</p>
            </div>
            <ImageMenu
              lightToggle={lightToggle}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Recommended;
