import React from "react";
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
  dots,
} from "../Files";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className={`recommended ${lightToggle ? "dark-mode" : ""}`}>
      {arr.map((Value, index) => (
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
          <img className="video-menu-icon" src={dots} alt="dots-icon" />
        </div>
      ))}
    </div>
  );
};

export default Recommended;
