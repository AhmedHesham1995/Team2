import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaChartSimple,
  FaArrowUpFromBracket,
} from "react-icons/fa6";
import images from '../../assets/images.jpeg';

export function Post(props) {
  return (
    <>
      <div className="posts">
        <div className="posts-top">
          <div className="pic">
            <img src={images} alt="" />
          </div>
          <div className="content">
            <div className="name">Boo</div>
            <div className="tweet">{props.text}</div>
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
    </>
  );
}
