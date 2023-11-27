import React from 'react';
import ListComp from '../small/listComp';
import fashion from '../../assets/fashion.jpg'

const ListsParent = () => {
    return (
        <>
            <h5>Your Lists</h5>
            <ListComp content="318 followers including @CinemaTweets1" img={fashion} title="film"/>
            <ListComp content="318 followers including @CinemaTweets1" img={fashion} title="film"/>
            <ListComp content="318 followers including @CinemaTweets1" img={fashion} title="film"/>
            <ListComp content="318 followers including @CinemaTweets1" img={fashion} title="film"/>
        </>
    );
}

export default ListsParent;
