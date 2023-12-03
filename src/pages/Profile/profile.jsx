
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import Premium from "../../components/small/premium";
import Navbar from "../../components/big/navbar/navbar";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const [following, setNonFollowings] = useState([]);
  const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/following`;

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

        const usersResponse = await axios.get("http://localhost:4005/users", {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        const allUsers = usersResponse.data;

        const followingsResponse = await axios.get(apiUrlFollowings, {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        const followingsData = followingsResponse.data.following;

        const nonFollowings = allUsers.filter(user => user._id !== localStorage.getItem('ID')).filter(user =>
          !followingsData.some(following => following._id === user._id)
        );

        setNonFollowings(nonFollowings);
      } catch (error) {
        console.error("Error fetching non-following:", error);
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

      const updatedFollowings = following.map((following) =>
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

      const updatedFollowings = following.map((following) =>
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
    <div className="bodyprofile">
      <div key={user.userId}>
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
            <div>
              {user.profileCover && <img className="cover-picture" src={user.profileCover} alt="cover" />}
            </div>
            <div className="profile-name">
              <div className="profile-det">
                {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
                <h4>{user.name}</h4>
                <div className="user-profile-info-es">
                  <h6>
                    <NavLink
                      to='/profilefollowers'
                      style={{ color: 'white' }}
                    >Followers: </NavLink>
                    {user.followers?.length}
                  </h6>

                  <h6>
                    <NavLink
                      to='/profilefollowing'
                      style={{ color: 'white' }}
                    >Following: </NavLink>
                    {user.following?.length}
                  </h6>

                  <h6>{user.email}</h6>
                  <h6>bio: {user.bio}</h6>
                  <h6>location: {user.location}</h6>
                  <h6>birth Date: {user.birthDate}</h6>
                </div>

              </div>
              <div className="edit-profile">
                <button
                  className="btn btn-dark"
                >
                  <NavLink to='/editProfile' style={{ color: 'white', textDecoration: 'none' }}>Edit profile</NavLink>
                </button>
              </div>
            </div>

            <div className="center__header__divs text-light ">
              <div>
                 {/* <NavLink
                  className={({isActive}) => (isActive) ? "left" : ""}
                  style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}} */}
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/"><span>Posts</span> </NavLink>
              </div>

              <div>
                 <NavLink
                  className={({isActive}) => (isActive) ? "left" : ""}
                  style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
                  to="/profile/reposts"><span>Reposts</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/replies"><span>Replies</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/media"><span>Media</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/likes"><span>Likes</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/saves"><span>Saved</span> </NavLink>
              </div>

              <hr />
            </div>


            <Outlet />
          </Col>

          <Col md={4}>
            <section className="right">
              <Premium />

              <div className="right__container">
                <h4 className="right__container__h4">Who to follow</h4>

                {Array.isArray(following) ? (
                  following.slice(0, 4).map((following) => (
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
                          className={`right__container__who__right-btn ${following.followStatus ? 'following' : 'not-following'
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
      </div>
    </div>
  );
};

export default Profile;


