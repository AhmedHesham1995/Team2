import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp, faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import h from '../../assets/h.jpg'
const Posts = (props) => {
    return (
        <div className="center__post">
        <div className="center__post__header">
            <div className="center__post__header-left">
                <img src={props.img} alt="" />
                <span className="center__post__header-left__name">
                    {props.name}
                </span>
                <span className="center__post__header-left__user">
                    {props.username} . {props.date}
                </span>
            </div>
            <div className="center__post__header-right">
                <i className="fas fa-ellipsis svg"></i>
            </div>
        </div>
        <div className="center__post__body">
            <span className="center__post__body__content">{props.content}</span>
        </div>
        <div className="center__post__bottom">
            <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faComment} />
            </span>
            <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faRetweet} />
            </span>
            <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faChartBar} />
            </span>
            <span className="center__post__bottom-span">
                <FontAwesomeIcon icon={faArrowUp} />
            </span>
        </div>
    </div>
    );
}

export default Posts;
