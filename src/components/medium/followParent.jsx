import React from 'react';
import Follow from '../small/follow';
import h from '../../assets/h.jpg'

const FollowParent = () => {
    return (
        <>
            <h4 className="right__container__h4">Who to follow</h4>
            <Follow name="Ahmed Hesham" username="@ahmed10_hesham" img={h}/>
            <Follow name="Ahmed Hesham" username="@ahmed10_hesham" img={h}/>
            <Follow name="Ahmed Hesham" username="@ahmed10_hesham" img={h}/>
            <Follow name="Ahmed Hesham" username="@ahmed10_hesham" img={h}/>
        </>
    );
}

export default FollowParent;
