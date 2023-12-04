
// import React, { useState, useEffect } from "react";
// import { Col, Row } from "react-bootstrap";
// import { NavLink, Outlet } from "react-router-dom";
// import axios from "axios";
// import Premium from "../../components/small/premium";
// import Navbar from "../../components/big/navbar/navbar";
// import "./profile.css";

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const [following, setNonFollowings] = useState([]);
//   const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/following`;

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
//         const data = response.data.data;
//         setUser(data);
//       } catch (error) {
//         console.error('Error fetching user:', error.message);
//       }
//     };

//     const fetchNonFollowings = async () => {
//       try {
//         const authToken = localStorage.getItem('token');

//         const usersResponse = await axios.get("http://localhost:4005/users", {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         });

//         const allUsers = usersResponse.data;

//         const followingsResponse = await axios.get(apiUrlFollowings, {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         });

//         const followingsData = followingsResponse.data.following;

//         const nonFollowings = allUsers.filter(user => user._id !== localStorage.getItem('ID')).filter(user =>
//           !followingsData.some(following => following._id === user._id)
//         );

//         setNonFollowings(nonFollowings);
//       } catch (error) {
//         console.error("Error fetching non-following:", error);
//       }
//     };

//     fetchUser();
//     fetchNonFollowings();
//   }, [apiUrlFollowings]);


//   const handleFollowToggle = async (followingId) => {
//     try {
//       const authToken = localStorage.getItem('token');
//       const response = await axios.put(
//         `http://localhost:4005/users/follow/${followingId}`,
//         {},
//         {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         }
//       );

//       const updatedFollowings = following.map((following) =>
//         following._id === followingId
//           ? { ...following, followStatus: !following.followStatus }
//           : following
//       );

//       setNonFollowings(updatedFollowings);
//     } catch (error) {
//       console.error("Error toggling follow:", error);
//     }
//   };

//   const handleUnfollowToggle = async (followingId) => {
//     try {
//       const authToken = localStorage.getItem('token');
//       const response = await axios.put(
//         `http://localhost:4005/users/unfollow/${followingId}`,
//         {},
//         {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         }
//       );

//       const updatedFollowings = following.map((following) =>
//         following._id === followingId
//           ? { ...following, followStatus: !following.followStatus }
//           : following
//       );

//       setNonFollowings(updatedFollowings);
//     } catch (error) {
//       console.error("Error toggling unfollow:", error);
//     }
//   };

//   return (
//     <div className="bodyprofile">
//       <div key={user.userId}>
//         <Row className="row">
//           <Col sm={12} md={2}>
//             <Navbar />
//           </Col>
//           <Col
//             sm={12}
//             md={6}
//             className="center"
//             style={{
//               backgroundColor: "rgb(0, 0, 0)",
//               border: "#c71818",
//               position: "relative",
//             }}
//           >
//             <div>
//               {user.profileCover && <img className="cover-picture" src={user.profileCover} alt="cover" />}
//             </div>
//             <div className="profile-name">
//               <div className="profile-det">
//                 {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
//                 <h4>{user.name}</h4>
//                 <div className="user-profile-info-es">
//                   <h6>
//                     <NavLink
//                       to='/profilefollowers'
//                       style={{ color: 'white' }}
//                     >Followers: </NavLink>
//                     {user.followers?.length}
//                   </h6>

//                   <h6>
//                     <NavLink
//                       to='/profilefollowing'
//                       style={{ color: 'white' }}
//                     >Following: </NavLink>
//                     {user.following?.length}
//                   </h6>

//                   <h6>{user.email}</h6>
//                   <h6>bio: {user.bio}</h6>
//                   <h6>location: {user.location}</h6>
//                   <h6>birth Date: {user.birthDate}</h6>
//                 </div>

//               </div>
//               <div className="edit-profile">
//                 <button
//                   className="btn btn-dark"
//                 >
//                   <NavLink to='/editProfile' style={{ color: 'white', textDecoration: 'none' }}>Edit profile</NavLink>
//                 </button>
//               </div>
//             </div>

//             <div className="center__header__divs text-light ">
//               <div>
//                  {/* <NavLink
//                   className={({isActive}) => (isActive) ? "left" : ""}
//                   style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}} */}
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/"><span>Posts</span> </NavLink>
//               </div>

//               <div>
//                  <NavLink
//                   className={({isActive}) => (isActive) ? "left" : ""}
//                   style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
//                   to="/profile/reposts"><span>Reposts</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/replies"><span>Replies</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/media"><span>Media</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/likes"><span>Likes</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/saves"><span>Saved</span> </NavLink>
//               </div>

//               <hr />
//             </div>


//             <Outlet />
//           </Col>

//           <Col md={4}>
//             <section className="right">
//               <Premium />

//               <div className="right__container">
//                 <h4 className="right__container__h4">Who to follow</h4>

//                 {Array.isArray(following) ? (
//                   following.slice(0, 4).map((following) => (
//                     <div key={following._id} className="right__container__who">
//                       <div className="right__container__who__left">
//                         <div className="right__container__who__left-img">
//                           <img src={following.profilePicture} alt="" />
//                         </div>
//                         <div className="right__container__who__left-name">
//                           <div>{following.name}</div>
//                           <span>@{following.username}</span>
//                         </div>
//                       </div>
//                       <div className="right__container__who__right">
//                         <button
//                           className={`right__container__who__right-btn ${following.followStatus ? 'following' : 'not-following'
//                             }`}
//                           onClick={() =>
//                             following.followStatus
//                               ? handleUnfollowToggle(following._id)
//                               : handleFollowToggle(following._id)
//                           }
//                         >
//                           {following.followStatus ? 'Following' : 'Follow'}
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No followings available</p>
//                 )}
//               </div>
//             </section>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Profile;



















import React, { useState, useEffect, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import Premium from "../../components/small/premium";
import Navbar from "../../components/big/navbar/navbar";
import "./profile.css";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const [user, setUser] = useState({});
  const [following, setNonFollowings] = useState([]);
  const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/following`;

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
      const data = response.data.data;
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error.message);
    }
  }, []);

  const fetchNonFollowings = useCallback(async () => {
    try {
      const authToken = localStorage.getItem('token');

      const [usersResponse, followingsResponse] = await Promise.all([
        axios.get("http://localhost:4005/users", { headers: { Authorization: authToken } }),
        axios.get(apiUrlFollowings, { headers: { Authorization: authToken } }),
      ]);

      const allUsers = usersResponse.data;
      const followingsData = followingsResponse.data.following;

      const nonFollowings = allUsers
        .filter(user => user._id !== localStorage.getItem('ID'))
        .filter(user => !followingsData.some(following => following._id === user._id));

      setNonFollowings(nonFollowings);
    } catch (error) {
      console.error("Error fetching non-following:", error);
    }
  }, [apiUrlFollowings]);

  useEffect(() => {
    fetchUser();
    fetchNonFollowings();
  }, [fetchUser, fetchNonFollowings]);

  const handleToggle = async (followingId, action) => {
    try {
      const authToken = localStorage.getItem('token');
      const url = action === "follow"
        ? `http://localhost:4005/users/follow/${followingId}`
        : `http://localhost:4005/users/unfollow/${followingId}`;

      await axios.put(url, {}, { headers: { Authorization: authToken } });

      const updatedFollowings = following.map(following =>
        following._id === followingId ? { ...following, followStatus: !following.followStatus } : following
      );

      setNonFollowings(updatedFollowings);
    } catch (error) {
      console.error(`Error toggling ${action}:`, error);
    }
  };
const {t}=useTranslation()
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
                    <NavLink to='/profilefollowers' style={{ color: 'white' }}>{t("home.part13")}: {user.followers?.length}</NavLink>
                  </h6>
                  <h6>
                    <NavLink to='/profilefollowing' style={{ color: 'white' }}>{t("home.part8")}: {user.following?.length}</NavLink>
                  </h6>
                  <h6>{user.email}</h6>
                  <h6>{t("home.part15")} {user.bio}</h6>
                  <h6>{t("home.part16")} {user.location}</h6>
                  <h6>{t("home.part17")} {user.birthDate}</h6>
                </div>
              </div>
              <div className="edit-profile">
                <button className="btn btn-dark">
                  <NavLink to='/editProfile' style={{ color: 'white', textDecoration: 'none' }}>{t("home.part18")}</NavLink>
                </button>
              </div>
            </div>
            <div className="center__header__divs text-light ">
              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/"><span>{t("side.part8")}</span> </NavLink>
              </div>
              {/* <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/reposts"><span>Reposts</span> </NavLink>
              </div> */}
              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/replies"><span>{t("home.part20")}</span> </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/media"><span>{t("home.part21")}</span> </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/likes"><span>{t("home.part22")}</span> </NavLink>
              </div>
              <div>
                <NavLink
                  className={({ isActive }) => (isActive) ? "left" : ""}
                  style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
                  to="/profile/saves"><span>{t("home.part23")}</span> </NavLink>
              </div>
              <hr />
            </div>
            <Outlet />
          </Col>
          <Col md={4}>
            <section className="right">
              <Premium />
              <div className="right__container">
                <h4 className="right__container__h4">{t("home.part24")}</h4>
                {Array.isArray(following) ? (
                  following.slice(0, 4).map(following => (
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
                          onClick={() => handleToggle(following._id, following.followStatus ? t('home.part14') : t('home.part7'))}
                        >
                          {following.followStatus ? t('home.part8') : t('home.part7')}
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



























// import React, { useState, useEffect, useMemo } from "react";
// import { Col, Row } from "react-bootstrap";
// import { NavLink, Outlet } from "react-router-dom";
// import axios from "axios";
// import Premium from "../../components/small/premium";
// import Navbar from "../../components/big/navbar/navbar";
// import "./profile.css";

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const [following, setNonFollowings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/following`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [userResponse, followingsResponse] = await Promise.all([
//           axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`),
//           axios.get(apiUrlFollowings, {
//             headers: {
//               Authorization: `${localStorage.getItem('token')}`,
//             },
//           }),
//         ]);

//         const userData = userResponse.data.data;
//         const followingsData = followingsResponse.data.following;

//         setUser(userData);

//         const allUsersResponse = await axios.get("http://localhost:4005/users", {
//           headers: {
//             Authorization: `${localStorage.getItem('token')}`,
//           },
//         });

//         const allUsers = allUsersResponse.data;

//         const nonFollowings = allUsers
//           .filter(user => user._id !== localStorage.getItem('ID'))
//           .filter(user => !followingsData.some(following => following._id === user._id));

//         setNonFollowings(nonFollowings);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiUrlFollowings]);

//   const handleToggleFollow = async (followingId, follow) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:4005/users/${follow ? 'follow' : 'unfollow'}/${followingId}`,
//         {},
//         {
//           headers: {
//             Authorization: `${localStorage.getItem('token')}`,
//           },
//         }
//       );

//       const updatedFollowings = following.map(f =>
//         f._id === followingId ? { ...f, followStatus: follow } : f
//       );

//       setNonFollowings(updatedFollowings);
//     } catch (error) {
//       console.error(`Error toggling ${follow ? 'follow' : 'unfollow'}:`, error);
//     }
//   };

//   const MemoizedNavbar = useMemo(() => <Navbar />, []); // Memoize Navbar component

//   return (
//     <div className="bodyprofile">
//       <div key={user.userId}>
//         <Row className="row">
//           <Col sm={12} md={2}>
//             {MemoizedNavbar}
//           </Col>
//           <Col
//             sm={12}
//             md={6}
//             className="center"
//             style={{
//               backgroundColor: "rgb(0, 0, 0)",
//               border: "#c71818",
//               position: "relative",
//             }}
//           >
//             <div>
//               {user.profileCover && <img className="cover-picture" src={user.profileCover} alt="cover" />}
//             </div>
//             <div className="profile-name">
//               <div className="profile-det">
//                 {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
//                 <h4>{user.name}</h4>
//                 <div className="user-profile-info-es">
//                   <h6>
//                     <NavLink to='/profilefollowers' style={{ color: 'white' }}>Followers: {user.followers?.length}</NavLink>
//                   </h6>
//                   <h6>
//                     <NavLink to='/profilefollowing' style={{ color: 'white' }}>Following: {user.following?.length}</NavLink>
//                   </h6>
//                   <h6>{user.email}</h6>
//                   <h6>bio: {user.bio}</h6>
//                   <h6>location: {user.location}</h6>
//                   <h6>birth Date: {user.birthDate}</h6>
//                 </div>
//               </div>
//               <div className="edit-profile">
//                 <button className="btn btn-dark">
//                   <NavLink to='/editProfile' style={{ color: 'white', textDecoration: 'none' }}>Edit profile</NavLink>
//                 </button>
//               </div>
//             </div>
//             <div className="center__header__divs text-light ">
//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/"><span>Posts</span> </NavLink>
//               </div>
//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/reposts"><span>Reposts</span> </NavLink>
//               </div>
//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/replies"><span>Replies</span> </NavLink>
//               </div>
//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/media"><span>Media</span> </NavLink>
//               </div>
//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/likes"><span>Likes</span> </NavLink>
//               </div>
//               <div>
//                 <NavLink
//                   className={({ isActive }) => (isActive) ? "left" : ""}
//                   style={({ isActive }) => (isActive) ? { color: "white", textDecoration: "none" } : { color: "gray", textDecoration: "none" }}
//                   to="/profile/saves"><span>Saved</span> </NavLink>
//               </div>
//               <hr />
//             </div>
//             <Outlet />
//           </Col>
//           <Col md={4}>
//             <section className="right">
//               <Premium />
//               <div className="right__container">
//                 <h4 className="right__container__h4">Who to follow</h4>
//                 {Array.isArray(following) ? (
//                   following.slice(0, 4).map(following => (
//                     <div key={following._id} className="right__container__who">
//                       <div className="right__container__who__left">
//                         <div className="right__container__who__left-img">
//                           <img src={following.profilePicture} alt="" />
//                         </div>
//                         <div className="right__container__who__left-name">
//                           <div>{following.name}</div>
//                           <span>@{following.username}</span>
//                         </div>
//                       </div>
//                       <div className="right__container__who__right">
//                         <button
//                           className={`right__container__who__right-btn ${following.followStatus ? 'following' : 'not-following'
//                             }`}
//                           onClick={() => handleToggleFollow(following._id, following.followStatus ? "unfollow" : "follow")}
//                         >
//                           {following.followStatus ? 'Following' : 'Follow'}
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No followings available</p>
//                 )}
//               </div>
//             </section>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Profile;