import React from 'react';
import images from "../../assets/images.jpeg";
import quran from "../../assets/quran.jpg";
import {
    FaRegComment,
    FaRetweet,
    FaRegHeart,
    FaChartSimple,
    FaArrowUpFromBracket,
  } from "react-icons/fa6";
const ProfileMedia = () => {
    return (
        <div>
            <div className="posts">
        <div className="posts-top">
          <div className="pic">
            <img src={images} alt="" />
          </div>
          <div className="content">
            <div className="name">Boo</div>
            <div className="tweet">
              <img
                className="picquran"
                src={quran}
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
        <div className="posts-bottom">
          <span>
            <FaRegComment />
          </span>
          <span>
            <FaRetweet />
          </span>
          <span>
            <FaRegHeart />
          </span>
          <span>
            <FaChartSimple />
          </span>
          <span>
            <FaArrowUpFromBracket />
          </span>
        </div>
        <hr />
      </div>
        </div>
    );
}

export default ProfileMedia;
