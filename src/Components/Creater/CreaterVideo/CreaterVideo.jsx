import React from "react";
import "./CreaterVideo.css";
import { useNavigate } from "react-router-dom";
import { thumbnail1, dots, tom, approve } from "../../Files";
const CreaterVideo = () => {
  const navigate = useNavigate();

  const checkHeaderLenght = (header) => {
    header = header.trim();
    if (header.length > 67) {
      header = header.substring(0, 67) + "...";
    }
    return header;
  };

  const arr= [1,2,3,4,5,6,7,8,9]

  return (
    <div>
      <ul>
        <li id="list-link">Videos</li>
      </ul>
      <hr />
      <div className="feed">
      {
        arr.map((_,index)=>(<div key={index}
            className="card"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/video/20/4020`);
            }}
          >
            <img src={thumbnail1} alt="" />
            <div className="thumbnail-creater">
              <img
                id="img-creater"
                src={tom}
                alt=""
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
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/video/10/4580`);
                }}
              />
            </div>
          </div>))
      }
      </div>
    </div>
  );
};

export default CreaterVideo;
