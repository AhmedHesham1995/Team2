import { Col, Row } from "react-bootstrap";
import Premium from "../../components/small/premium";
import FollowParent from "../../components/medium/followParent";
import Navbar from "../../components/big/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear} from "@fortawesome/free-solid-svg-icons";
import { Outlet , NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const HomeNav = () => {

  const [user, setUser] = useState({});
  const [followings, setNonFollowings] = useState([]);
  const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/followings`;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
        const data = response.data.data;
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error.message);
      }
    };
  
    const fetchNonFollowings = async () => {
      try {
        const authToken = localStorage.getItem('token');
  
        // Fetch all users
        const usersResponse = await axios.get("http://localhost:4005/users", {
          headers: {
            Authorization: `${authToken}`,
          },
        });
  
        const allUsers = usersResponse.data;
  
        // Fetch followings
        const followingsResponse = await axios.get(apiUrlFollowings, {
          headers: {
            Authorization: `${authToken}`,
          },
        });
  
        const followingsData = followingsResponse.data.followings;
  
        // Filter out users who are already followed
        const nonFollowings = allUsers.filter(user => user._id !== localStorage.getItem('ID')).filter(user =>
          !followingsData.some(following => following._id === user._id)
        );
  
        setNonFollowings(nonFollowings);
      } catch (error) {
        console.error("Error fetching non-followings:", error);
      }
    };
  
    fetchUser();
    fetchNonFollowings();
  }, [apiUrlFollowings]);
  

  const handleFollowToggle = async (followingId) => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:4005/users/follow/${followingId}`,
        {},
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );

      const updatedFollowings = followings.map((following) =>
        following._id === followingId
          ? { ...following, followStatus: !following.followStatus }
          : following
      );

      setNonFollowings(updatedFollowings);
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };

  const handleUnfollowToggle = async (followingId) => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:4005/users/unfollow/${followingId}`,
        {},
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );

      const updatedFollowings = followings.map((following) =>
        following._id === followingId
          ? { ...following, followStatus: !following.followStatus }
          : following
      );

      setNonFollowings(updatedFollowings);
    } catch (error) {
      console.error("Error toggling unfollow:", error);
    }
  };
    return (
        <section className="home">
        <Row>
          <Col sm={12} md={2}>
            <Navbar />
          </Col>

          <Col sm={11} md={6} className="test">
            <section className="center">
              <div className="center__header">
                <div className="row mt-2 ms-2 ">
                  <div className="col text-start h4">Home</div>
                  {/* <div className="col text-end">
                  <FontAwesomeIcon icon={faGear} className="right-search-icon me-5" />
                  </div>  */}
                </div>
                
                <div className="center__header__divs text-light ">
                <div><NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
                style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                to = "/home/"><span>For you</span> </NavLink></div>
                <div><NavLink className = {({isActive}) =>{return (isActive) ? "left": "" }}
                style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
                 to = "/home/followings/"><span>Followings</span> </NavLink></div>
                <hr />
                </div>
              </div>
              <Outlet/>  
            </section>
          </Col>
          
          <Col md={4}>
          <section className="right">
              <Premium />

              <div className="right__container">
                <h4 className="right__container__h4">Who to follow</h4>

                {/* {Array.isArray(followings) ? (
                  followings.slice(0, 4).map((following) => (
                    <div key={following._id} className="right__container__who">
                      <div className="right__container__who__left">
                        <div className="right__container__who__left-img">
                          <img src={following.profilePicture} alt="" />
                        </div>
                        <div className="right__container__who__left-name">
                          <div>{following.name}</div>
                          <span>@{following.username}</span>
                        </div>
                      </div>
                      <div className="right__container__who__right">
                        <button
                          className="right__container__who__right-btn"
                          onClick={() =>
                            following.followStatus
                              ? handleUnfollowToggle(following._id)
                              : handleFollowToggle(following._id)
                          }
                        >
                          {following.followStatus ? "Unfollow" : "Follow"}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No followings available</p>
                )} */}


        {Array.isArray(followings) ? (
                followings.slice(0, 4).map((following) => (
                  <div key={following._id} className="right__container__who">
                    <div className="right__container__who__left">
                      <div className="right__container__who__left-img">
                        <img src={following.profilePicture} alt="" />
                      </div>
                      <div className="right__container__who__left-name">
                        <div>{following.name}</div>
                        <span>@{following.username}</span>
                      </div>
                    </div>
                    <div className="right__container__who__right">
                      <button
                        className={`right__container__who__right-btn ${
                          following.followStatus ? 'following' : 'not-following'
                        }`}
                        onClick={() =>
                          following.followStatus
                            ? handleUnfollowToggle(following._id)
                            : handleFollowToggle(following._id)
                        }
                      >
                        {following.followStatus ? 'Following' : 'Follow'}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No followings available</p>
              )}
              </div>
            </section>
          </Col>
        </Row>
      </section>
    );
}

export default HomeNav;
