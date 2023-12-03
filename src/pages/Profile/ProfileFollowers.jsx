
import React, { useState, useEffect } from "react";
import axios from "axios";
import './ProfileFollow-ers-wing.css';
import { Outlet, Link, NavLink } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Navbar from "../../components/big/navbar/navbar";
import FollowPages from "../../components/medium/followPages";
import Premium from "../../components/small/premium";


const ProfileFollowers = () => {
    const userId = localStorage.getItem('ID');
    const token = localStorage.getItem('token');
    const [followers, setFollowers] = useState([]);
    const [followingState, setFollowingState] = useState({});

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const response = await axios.get(`http://localhost:4005/users/${userId}/followers`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const followersWithIds = response.data.followers.map(user => ({ ...user, loggedInUserId: userId }));
                setFollowers(followersWithIds);

                // Fetch follow state for each follower
                const followStateData = await Promise.all(
                    followersWithIds.map(follower =>
                        axios.get(`http://localhost:4005/users/${follower._id}/follow-state`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        })
                    )
                );

                const newFollowingState = {};
                followStateData.forEach((state, index) => {
                    newFollowingState[followersWithIds[index]._id] = state.data.following;
                });

                setFollowingState(newFollowingState);

                console.log(response);
            } catch (error) {
                console.error('Error fetching followers:', error.message);
            }
        };
        fetchFollowers();
    }, [userId, token]);

    const handleFollow = async (followedUserId) => {
        try {
            await axios.put(
                `http://localhost:4005/users/follow/${followedUserId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Update follow state for the specific follower to 'true'
            setFollowingState(prevState => ({
                ...prevState,
                [followedUserId]: true,
            }));

        } catch (error) {
            console.error('Error following user:', error.message);
        }
    };

    const handleUnfollow = async (unfollowUserId) => {
        try {
            await axios.put(
                `http://localhost:4005/users/unfollow/${unfollowUserId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Update follow state for the specific follower to 'false'
            setFollowingState(prevState => ({
                ...prevState,
                [unfollowUserId]: false,
            }));

        } catch (error) {
            console.error('Error unfollowing user:', error.message);
        }
    };

    return (
        <div className="bodyprofile">
            <Row className="row">
                <Col sm={12} md={2}>
                    <Navbar />
                </Col>
                <Col
                    sm={12} md={6}
                    className="center"
                    style={{
                        backgroundColor: "rgb(0, 0, 0)",
                        border: "#c71818",
                        position: "relative",
                        minHeight: '98vh'
                    }}
                >
                    <div className="activities">

                        <NavLink style={({ isActive }) => {
                            return (isActive) ? { color: "white" } : { color: "gray" }
                        }} to="/Profile"><span> Profile</span> </NavLink>
                        <NavLink style={({ isActive }) => {
                            return (isActive) ? { color: "white" } : { color: "gray" }
                        }} to="/ProfileFollowers"><span> Followers</span> </NavLink>
                        <NavLink style={({ isActive }) => {
                            return (isActive) ? { color: "white" } : { color: "gray" }
                        }} to="/ProfileFollowing"><span> Following</span> </NavLink>
                    </div>
                    
                    {/* <h2 className="fo-head">Followers: </h2> */}
                    <br/>
                    <hr  style={{ color: "white" }}/>
                    <br/>
                    <div className="center-1">
                        <ul className="user-followers">
                            {followers && followers.map((follower) => (
                                <li className="user-every-follower" key={follower._id}>
                                    <span className="user-name-photo">
                                        <img className="user-imgge" src={follower.profilePicture} />
                                        <span className="followedUser">{follower.name}</span>
                                    </span>

                                    {followingState[follower._id] ? (
                                        <button
                                            style={{ margin: "10px" }}
                                            className="btn btn-danger "
                                            onClick={() => handleUnfollow(follower._id)}
                                        >
                                            Unfollow
                                        </button>
                                    ) : (
                                        <button
                                            style={{ margin: "10px" }}
                                            className="btn btn-primary "
                                            onClick={() => handleFollow(follower._id)}
                                        >
                                            Follow
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                </Col>
                <Col
                md={4}
                className="right"
                style={{ backgroundColor: "black" }}
                >
                    
                        <section className="right">
                            <Premium/>
                        </section>
                </Col>
            </Row>


        </div>
    );
};

export default ProfileFollowers;