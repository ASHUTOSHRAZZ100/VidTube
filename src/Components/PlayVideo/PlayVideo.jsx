import React, { useState } from "react";
import "./PlayVideo.css";
import {
  video,
  like,
  dislike,
  share,
  save,
  jack,
  user_profile,
} from "../Files";
import { useNavigate } from "react-router-dom";

const PlayVideo = ({ lightToggle }) => {
  const navigate = useNavigate();
  const [subscribeTogle, setSubscribeTogle] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className={`video-container ${lightToggle ? "dark-mode" : ""}`}>
      <video
        className="video-player"
        src={video}
        controls
        autoPlay
        muted
      ></video>
      <h2 className="video-title">
        Best Youtube Channel To learn web Development
      </h2>
      <div className="video-meta">
        <p className="view-info">1525 views &bull; 2 days ago</p>
        <div className="video-actions">
          <span className="action-like">
            <img src={like} alt="like-icon" />
            125
          </span>
          <span className="action-dislike">
            <img src={dislike} alt="dislike-icon" />2
          </span>
          <span className="action-share">
            <img src={share} alt="share-icon" />
            Share
          </span>
          <span className="action-save">
            <img src={save} alt="save-icon" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="channel-publisher">
        <img
          onClick={() => {
            navigate(`/creater/1305`);
          }}
          src={jack}
          alt="publisher-profile"
        />
        <div className="publisher-info">
          <p
            className="publisher-name"
            onClick={() => {
              navigate(`/creater/1305`);
            }}
          >
            GreatStack
          </p>
          <span className="subscriber-count">1M Subscribers</span>
        </div>
        <button
          className={`subscribe-button ${
            subscribeTogle ? "subscribe-button-mode" : ""
          }`}
          onClick={() => setSubscribeTogle((prev) => !prev)}
          type="button"
        >
          Subscribe
        </button>
      </div>
      <div className="video-description">
        <p className="desc-line">Channel that makes learning Easy</p>
        <p className="desc-line">Subscribe to Watch more Video</p>
        <hr />
        <h4 className="comment-count">130 Comments</h4>
        {arr.map((_, index) => (
          <div key={index} className="comment-item">
            <img
              className="comment-avatar"
              src={user_profile}
              alt="user-profile"
            />
            <div className="comment-body">
              <h3 className="comment-author">
                Jack Nicholson <span className="comment-date">1 day ago</span>
              </h3>
              <p className="comment-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ducimus nihil dolore! Quaerat, praesentium!
              </p>
              <div className="comment-actions">
                <img src={like} alt="like-comment" />
                <span>244</span>
                <img src={dislike} alt="dislike-comment" />
                <span>30</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
