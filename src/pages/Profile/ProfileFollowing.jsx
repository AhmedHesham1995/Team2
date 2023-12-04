import React, { useState, useEffect } from "react";
import axios from "axios";
import './ProfileFollow-ers-wing.css';
import { Outlet, Link, NavLink } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Navbar from "../../components/big/navbar/navbar";
import FollowPages from "../../components/medium/followPages";
import Premium from "../../components/small/premium";
import { useTranslation } from "react-i18next";

const ProfileFollowing = () => {
    const userId = localStorage.getItem('ID');
    const token = localStorage.getItem('token');
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        const fetchFollowing = async () => {
            try {
                const response = await axios.get(`http://localhost:4005/users/${userId}/following`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const followingWithIds = response.data.following.map(user => ({ ...user, loggedInUserId: userId }));
                setFollowing(followingWithIds);
                console.log(response);
            } catch (error) {
                console.error('Error fetching following:', error.message);
            }
        };
        fetchFollowing();
    }, [userId, token]);

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
            // setFollowing(prevFollowing => prevFollowing.filter(user => user._id !== unfollowUserId));
            setFollowing(previousFollowing => previousFollowing.filter(user => user._id !== unfollowUserId))
        } catch (error) {
            console.error('Error unfollowing user:', error.message);
        }
    };
const {t}=useTranslation()
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
                        }} to="/Profile"><span> {t("side.part6")}</span> </NavLink>
                        <NavLink style={({ isActive }) => {
                            return (isActive) ? { color: "white" } : { color: "gray" }
                        }} to="/ProfileFollowers"><span> {t("home.part13")}</span> </NavLink>
                        <NavLink style={({ isActive }) => {
                            return (isActive) ? { color: "white" } : { color: "gray" }
                        }} to="/ProfileFollowing"><span>  {t("home.part8")}</span> </NavLink>
                    </div>
                    {/* <h2 className="fo-head">Followers: </h2> */}
                    <br />
                    <hr style={{ color: "white" }} />
                    <br />
                    <div className="center-1">

                        {/* <h2
                            className="fo-head"
                        >Following: </h2> */}
                        <ul
                            className="user-followers"
                        >
                            {following && following.map((followedUser) => (
                                <li
                                    key={followedUser.userId}
                                    className="user-every-follower"
                                >
                                    <spa>
                                        <img
                                            className="user-imgge"

                                            src={followedUser.profilePicture}
                                            style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: '10px' }}
                                            alt={`Profile of ${followedUser.name}`}
                                        />
                                        <span className="followedUser">

                                            {followedUser.name}
                                        </span>
                                    </spa>

                                    <button
                                        className=" btn btn-danger"
                                        onClick={() => handleUnfollow(followedUser._id)}
                                    >
                                        {t("home.part14")}
                                    </button>
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

export default ProfileFollowing;