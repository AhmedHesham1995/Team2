import React from 'react';
import Follow from '../small/follow';
import orange from '../../assets/orange.jpg';
const FollowPages = () => {
    return (
        <div>
                 <h4 className="right__container__h4">You might like</h4>
            <Follow name="Orange Egypt" username="@orangeegypt" img={orange}/>
            <Follow name="Orange Egypt" username="@orangeegypt" img={orange}/>
            <Follow name="Orange Egypt" username="@orangeegypt" img={orange}/>
            <Follow name="Orange Egypt" username="@orangeegypt" img={orange}/>
        </div>
    );
}

export default FollowPages;
