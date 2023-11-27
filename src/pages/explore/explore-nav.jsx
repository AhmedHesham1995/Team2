import Navbar from '../../components/big/navbar/navbar';
import { Row,Col } from 'react-bootstrap';
import { Outlet , NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Premium from '../../components/small/premium';
import FollowParent from '../../components/medium/followParent';

const ExploreNav = () => {
    return (
        <section className="home">
            <Row>
                <Col sm={12} md={2}>
                    <Navbar />
                </Col>
                <Col sm={11} md={6} className="test">
                <section className="center">
                    <div className="center__header">
                        <div className="right__search">
                        <div><FontAwesomeIcon icon={faMagnifyingGlass} className="right-search-icon" /></div>
                        <input type="search" placeholder="Search" />
                        </div>

                        <div className="center__header__divs text-light ">
                            <div><NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
                            style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                            to = "/explore/"><span>For you</span> </NavLink></div>
                            <div><NavLink className = {({isActive}) =>{return (isActive) ? "left": "" }}
                            style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                            to = "/explore/trend/"><span>Trending</span> </NavLink></div>
                            <div><NavLink className = {({isActive}) =>{return (isActive) ? "left": "" }} 
                            style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                            to = "/explore/news/"><span>News</span> </NavLink></div>
                            <div><NavLink className = {({isActive}) =>{return (isActive) ? "left": "" }} 
                            style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                            to = "/explore/sports/"><span>Sports</span> </NavLink></div>
                            <div><NavLink className = {({isActive}) =>{return (isActive) ? "left": "" }} 
                            style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                            to = "/explore/entertainment/"><span>Entertainment</span> </NavLink></div>
                            {/* <hr /> */}
                        </div>
                    </div>
                    <Outlet/>
                    
                    </section>

                </Col>
                <Col md={4}>
                    <section className="right">
                        <Premium/>
                        <div className="right__container">
                            <FollowParent/>
                        </div>
                    </section>
                </Col>

            </Row>
        </section>
    );
}

export default ExploreNav;
