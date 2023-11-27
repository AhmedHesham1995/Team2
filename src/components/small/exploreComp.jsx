import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';

const ExploreComp = (props) => {
    return (
        <div className="center__trend">
            <div className="center__trend__son">
            <div className="center__trend__son-top">
                <div>{props.country}</div>
                <div><FontAwesomeIcon icon={faEllipsis} className="svg" /></div>
            </div>
            <div className="center__trend__son-bottom">
                <div>{props.posts}</div>
                <div className="center__trend__son-bottom-white">{props.trend}</div>
            </div>
            </div>
        </div>
    );
}

export default ExploreComp;
