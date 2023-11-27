import React from 'react';
import Happen from '../small/happen';
import fashion from '../../assets/fashion.jpg'
const HappenParent = () => {
    return (
        <>
        <h4 className="right__container__h4">What's happening</h4>
        <Happen date="Event . this morning" name="New York Fashion Week 2023" img={fashion}/>
        <Happen date="Event . this morning" name="New York Fashion Week 2023" img={fashion}/>
        <Happen date="Event . this morning" name="New York Fashion Week 2023" img={fashion}/>
        <Happen date="Event . this morning" name="New York Fashion Week 2023" img={fashion}/>
        </>
    );
}

export default HappenParent;
