import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Navbar from '../components/big/navbar/navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass,faCirclePlus} from '@fortawesome/free-solid-svg-icons';

import fashion from '../assets/fashion.jpg';
import h from '../assets/h.jpg';
import Premium from '../components/small/premium';
import Happen from '../components/small/happen';
import Follow from '../components/small/follow';
import ListComp from '../components/small/listComp';
import HappenParent from '../components/medium/happenParent';
import FollowParent from '../components/medium/followParent';
import ListsParent from '../components/medium/listsParent';
const Lists = () => {
    return (
        <section className="home">
            <Row>
                <Col sm={12} md={2}>
                    {/* Navbar section */}
                    <Navbar />
                </Col>
                <Col sm={6} md={6} className="test">
                <section className="center">
                    <div className="right__search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="right-search-icon" />
                        <input className='input-a' type="search" placeholder="Search" />
                    </div>
                    <div className="center__discover">
                        <h5>Discover New Lists</h5>
                        <ListComp content="318 followers including @CinemaTweets1" img={fashion} title="film"/>
                        {/* Repeat the structure for additional items */}
                    </div>
                    <hr />
                    <div className="center__discover">
                        
                        <ListsParent/>
                        
                        
                        {/* Repeat the structure for additional items */}
                    </div>
                    
                    </section>
                </Col>
                <Col md={4}>
                <section className="right">
                    <div className="right__search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="right-search-icon" />
                        <input type="search" placeholder="Search" />
                    </div>
                    <Premium/>
                    <div className="right__container">
                    <HappenParent/>     

                        {/* Repeat the structure for additional items */}
                    </div>
                    <div className="right__container">
                        <FollowParent/>

                        {/* Repeat the structure for additional items */}
                    </div>
                    </section>
                </Col>
            </Row>
        </section>
    );
}

export default Lists;
