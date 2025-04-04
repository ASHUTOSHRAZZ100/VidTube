import React, { useState } from "react";
import "./Feed.css";
import {
  approve,
  dots,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
  tom,
} from "../Files";
import { useNavigate } from "react-router-dom";

const Feed = ({ lightToggle }) => {
  const navigate = useNavigate();

  const checkHeaderLenght = (header) => {
    header = header.trim();
    if (header.length > 67) {
      header = header.substring(0, 67) + "...";
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
    <div className={`feed ${lightToggle ? "dark-feed" : ""}`}>
      {arr.map((value, index) => (
        <div
          key={index}
          className="card"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/video/20/4020`);
          }}
        >
          <img src={value} alt="Video thumbnail" />
          <div className="thumbnail-creater">
            <img
              id="img-creater"
              src={tom}
              alt="Creator profile"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/creater/10`);
              }}
            />
            <div>
              <h2>
                {checkHeaderLenght(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus nisi omnis rem libero suscipit, esse mollitia culpa dolores minus itaque, quisquam tempora voluptas nesciunt consequuntur nobis dignissimos et quia?"
                )}
              </h2>
              <p
                id="p-link"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/creater/10`);
                }}
              >
                Greatstack <img id="p-link-approve-icon" src={approve} alt="" />
              </p>
              <p>15k views &bull; 2 day ago</p>
            </div>
            <img
              id="img-menu"
              src={dots}
              alt="More options menu"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/video/10/4580`);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
