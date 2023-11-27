import React from 'react';
import h from '../../assets/h.jpg'
const Follow = (props) => {
    return (
        <div className="right__container__who">
        <div className="right__container__who__left">
            <div className="right__container__who__left-img">
            <img src={props.img} alt="" />
            </div>
            <div className="right__container__who__left-name">
            <div>{props.name}</div>
            <span>{props.username}</span>
            </div>
        </div>
        <div className="right__container__who__right">
            <button className="right__container__who__right-btn">Follow</button>
        </div>
        </div>
    );
}

export default Follow;
