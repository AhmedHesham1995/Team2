import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import fashion from '../../assets/fashion.jpg'
const ListComp = (props) => {
    return (
        <div className="center__discover__box">
            <div className="center__discover__box-left">
                <div className="center__discover__box-left-img">
                <img src={props.img} alt="" />
                </div>
                <div className="center__discover__box-left-title">
                <div>{props.title}</div>
                <span>{props.content}</span>
                </div>
            </div>
            <div className="center__discover__box-right">
                <FontAwesomeIcon icon={faCirclePlus} className="discover" />
            </div>
        </div>
    );
}

export default ListComp;
