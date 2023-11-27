import React from "react";
import Navbar from "../components/big/navbar/navbar";
import { Col, Container, Row } from "react-bootstrap";
import FollowParent from "../components/medium/followParent";
import ExploreComp from "../components/small/exploreComp";
import english from "../assets/englishh.jfif";
import Groups from "../components/small/groups";
import books from "../assets/books.jfif" ; 
const Communities = () => {
  return (
    <div className="bodyprofile">
      <Row className="row">
        <Col sm={12} md={2}>
          <Navbar />
        </Col>
        <Col
          sm={12}
          md={6}
          className="center"
          style={{
            backgroundColor: "rgb(0, 0, 0)",
            border: "#c71818",
            position: "relative",
          }}
        >
          <h3 style={{ color: "white" }} >Discover new Communities</h3>
         
          <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
        <br/>
          <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
        <br/>
        <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
        <br/>
          <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
        <br/>
        <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
        <br/>
          <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
        <br/>
        <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
        <br/>
          <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
        <br/>
        
        </Col>

        <Col md={4} className="right" style={{ backgroundColor: "black" }}>
          <nav className="nav-bar">
            <div className="search-bar-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
              />
            </div>
          </nav>

          <div className="youmay" style={{ backgroundColor: "#2c2c2c" }}>
            <p
              style={{
                fontSize: "xx-large",
                color: "white",
                marginLeft: "20px",
              }}
            >
              <b>What’s happening</b>
            </p>

            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
            <ExploreComp
              trend="#اعصار__دانيال"
              country="Trending in Egypt"
              posts="58.4K Posts"
            />
          </div>

          <div className="right__container">
            <FollowParent />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Communities;
