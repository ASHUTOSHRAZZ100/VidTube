import React, { useContext, useState } from "react";
import "./PlayVideo.css";
import { video, jack, user_profile } from "../Files";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  BookMarked,
} from "../../assets/Icons.FIle";

const PlayVideo = () => {
  const navigate = useNavigate();
  const [subscribeTogle, setSubscribeTogle] = useState(false);
  const { lightToggle } = useContext(ThemeContext);
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
          <span className="action-like" title="Like">
            <ThumbsUp />
            125
          </span>
          <span className="action-dislike" title="Dislike">
            <ThumbsDown />
          </span>
          <span className="action-share" title="Share">
            <Share2 />
            Share
          </span>
          <span className="action-save" title="Save to Watch Later">
            <BookMarked />
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
                <span className="comment-actions">
                  <ThumbsUp />
                  245
                  <ThumbsDown />
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
