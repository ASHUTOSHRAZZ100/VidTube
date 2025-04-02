import React from "react";
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

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video} controls autoPlay muted></video>
      <h3>Best Youtube Channel To learn web Development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe to Watch more Video</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              jack NiCholson
              <span>1 day ago </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus nihil dolore! Quaerat, praesentium!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
