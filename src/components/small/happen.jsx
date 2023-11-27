import React from 'react';
import fashion from '../../assets/fashion.jpg'
const Happen = (props) => {
    return (
        <div className="right__container__happening">
            <div className="right__container__left">
                <span>{props.date}</span>
                <div>{props.name}</div>
            </div>
            <div className="right__container__right">
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default Happen;
