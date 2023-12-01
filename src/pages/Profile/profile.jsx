// import React, { useState, useEffect } from "react";
// import { Post } from "../../components/small/Links";
// import Navbar from "../../components/big/navbar/navbar";
// import images from "../../assets/images.jpeg";
// import { Col, Container, Row } from "react-bootstrap";
// import FollowPages from "../../components/medium/followPages";
// import ExploreComp from "../../components/small/exploreComp";
// import { Outlet, Link, NavLink } from "react-router-dom";
// import axios from "axios";
// import Premium from "../../components/small/premium";
// import FollowParent from "../../components/medium/followParent";
// // import { useSelector } from "react-redux";
// import './profile.css'


// const Profile = () => {

//   const [user, setuser] = useState({});

//   useEffect(() => {
//     const fetchuser = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
//         const data = response.data.data;
//         setuser(data);
//         console.log(response);
//       } catch (error) {
//         console.log('ddd');

//         console.error('Error fetching posts:', error.message);
//       }
//     };
//     fetchuser();
//   }, []);

//   return (
//     <div className="bodyprofile">
//       <div key={user.userId}>
//         <Row className="row">
//           <Col sm={12} md={2}>
//             <Navbar />
//           </Col>
//           <Col sm={12} md={6}
//             className="center"
//             style={{
//               backgroundColor: "rgb(0, 0, 0)",
//               border: "#c71818",
//               position: "relative",
//             }}
//           >
//             <div >
//               {user.profileCover && <img className="cover-picture" src={user.profileCover} alt="cover" />}
//             </div>
//             <div className="profile-name">
//               <div className="profile-det">

//                 {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
//                 <h4>{user.name}</h4>
//                 <div className="user-profile-info-es">
//                   <h6> 326 Followin 428 Followers</h6>
//                   <h6>  {user.email}</h6>
//                   <h6>bio: {user.bio}</h6>
//                   <h6>location: {user.location}</h6>
//                   <h6>birth Date: {user.birthDate}</h6>
//                 </div>

//               </div>
//               <div className="edit-profile">
//               <button
//                 className="btn btn-dark"
//               >
//                 <NavLink to='/editProfile' style={{color: 'white', textDecoration:'none'}}>Edit profile</NavLink>
//               </button>
//               </div>
//             </div>

//             <div className="center__header__divs text-light ">

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/"><span>Posts</span> </NavLink>
//             </div>

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/replies"><span>Replies</span> </NavLink>
//             </div>

//             {/* <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/highlights"><span>Hightlights</span> </NavLink>
//             </div> */}

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/media"><span>Media</span> </NavLink>
//             </div>  

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/likes"><span>Likes</span> </NavLink>
//             </div>  

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/saves"><span>Saved</span> </NavLink>
//             </div>  
              
//               <hr />
//             </div>
            
//             <Outlet />
//           </Col>

//           <Col md={4}>
//             <section className="right">
//               <Premium />

//               <div className="right__container">
//                 <FollowParent />
//               </div>
//             </section>
//           </Col>
//         </Row>
//       </div>

//     </div>
//   );
// };

// export default Profile;







// import React, { useState, useEffect } from "react";
// import { Col, Row } from "react-bootstrap";
// import { NavLink, Outlet } from "react-router-dom";
// import axios from "axios";
// import Premium from "../../components/small/premium";
// import Navbar from "../../components/big/navbar/navbar";
// import './profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const [followings, setFollowings] = useState([]);
//   const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/followings`; // Replace with your actual endpoint for fetching followings

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

//     const fetchFollowings = async () => {
//       try {
//         const authToken = localStorage.getItem('token');
//         const response = await axios.get(apiUrlFollowings, {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         });

//         const data = response.data.followings;

//         setFollowings(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching followings:", error);
//       }
//     };

//     fetchUser();
//     fetchFollowings();
//   }, []);

//   return (
//     <div className="bodyprofile">
//       <div key={user.userId}>
//         <Row className="row">
//           <Col sm={12} md={2}>
//             <Navbar />
//           </Col>
//           <Col sm={12} md={6}
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
//                   <h6>326 Following 428 Followers</h6>
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
//                   <NavLink to='/editProfile' style={{color: 'white', textDecoration:'none'}}>Edit profile</NavLink>
//                 </button>
//               </div>
//             </div>

//             <div className="center__header__divs text-light ">
//               {/* Navigation Links */}
//               <div>
//                 <NavLink
//                   className={({isActive}) => (isActive) ? "left" : ""}
//                   style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
//                   to="/profile/"><span>Posts</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({isActive}) => (isActive) ? "left" : ""}
//                   style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
//                   to="/profile/replies"><span>Replies</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({isActive}) => (isActive) ? "left" : ""}
//                   style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
//                   to="/profile/media"><span>Media</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({isActive}) => (isActive) ? "left" : ""}
//                   style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
//                   to="/profile/likes"><span>Likes</span> </NavLink>
//               </div>

//               <div>
//                 <NavLink
//                   className={({isActive}) => (isActive) ? "left" : ""}
//                   style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
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
//               {Array.isArray(followings) ? (
//               followings.map((following) => (
//                 <div key={following._id} className="right__container__who">
//                   <div className="right__container__who__left">
//                     <div className="right__container__who__left-img">
//                       <img src={following.profilePicture} alt="" />
//                     </div>
//                     <div className="right__container__who__left-name">
//                       <div>{following.name}</div>
//                       <span>@{following.username}</span>
//                     </div>
//                   </div>
//                   <div className="right__container__who__right">
//                     <button className="right__container__who__right-btn">Follow</button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No followings available</p>
//             )}

//               </div>
//             </section>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Profile;




import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import Premium from "../../components/small/premium";
import Navbar from "../../components/big/navbar/navbar";
import "./profile.css";

const Profile = () => {
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
  
        const followingsData = followingsResponse.data.followings;
  
        const nonFollowings = allUsers.filter(user =>
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
                   <h6>326 Following 428 Followers</h6>
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
                  <NavLink to='/editProfile' style={{color: 'white', textDecoration:'none'}}>Edit profile</NavLink>
                </button>
              </div>
            </div>

            <div className="center__header__divs text-light ">
            <div>
                 <NavLink
                  className={({isActive}) => (isActive) ? "left" : ""}
                  style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
                  to="/profile/"><span>Posts</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({isActive}) => (isActive) ? "left" : ""}
                  style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
                  to="/profile/replies"><span>Replies</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({isActive}) => (isActive) ? "left" : ""}
                  style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
                  to="/profile/media"><span>Media</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({isActive}) => (isActive) ? "left" : ""}
                  style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
                  to="/profile/likes"><span>Likes</span> </NavLink>
              </div>

              <div>
                <NavLink
                  className={({isActive}) => (isActive) ? "left" : ""}
                  style={({isActive}) => (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}
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











// import React, { useState, useEffect } from "react";
// import { Spinner } from "react-bootstrap";
// import { Post } from "../../components/small/Links";
// import Navbar from "../../components/big/navbar/navbar";
// import images from "../../assets/images.jpeg";
// import { Col, Container, Row } from "react-bootstrap";
// import FollowPages from "../../components/medium/followPages";
// import ExploreComp from "../../components/small/exploreComp";
// import { Outlet, Link, NavLink } from "react-router-dom";
// import axios from "axios";
// // import { useSelector } from "react-redux";
// import './profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
//         const data = response.data.data;
//         setUser(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching user:', error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <div className="bodyprofile">
//       {isLoading ? (
//         <div className="loader-container-1">
//           <div className="loader-overlay"></div>
//           <Spinner animation="border" role="status" variant="primary" className="loader-spinner">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       ) : (
//         <div key={user.userId}>
//           <Row className="row">
//             <Col sm={12} md={2}>
//               <Navbar />
//             </Col>
//             <Col sm={12} md={6}
//               className="center"
//               style={{
//                 backgroundColor: "rgb(0, 0, 0)",
//                 border: "#c71818",
//                 position: "relative",
//               }}
//             >
//               <div >
//                 {user.profileCover && <img className="cover-picture" src={user.profileCover} alt="cover" />}
//               </div>
//               <div className="profile-name">
//                 <div className="profile-det">
//                   {user.profilePicture && <img src={user.profilePicture} alt="Profile" />}
//                   <h4>{user.name}</h4>
//                   <div className="user-profile-info-es">
//                     <h6> 326 Followin 428 Followers</h6>
//                     <h6>  {user.email}</h6>
//                     <h6>bio: {user.bio}</h6>
//                     <h6>location: {user.location}</h6>
//                     <h6>birth Date: {user.birthDate}</h6>
//                   </div>
//                 </div>
//                 <div className="edit-profile">
//                   <button
//                     className="btn btn-dark"
//                   >
//                     <NavLink to='/editProfile' style={{ color: 'white', textDecoration: 'none' }}>Edit profile</NavLink>
//                   </button>
//                 </div>
//               </div>
//               <div className="center__header__divs text-light ">
//               <div>
//                  <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/"><span>Posts</span> </NavLink>
//             </div>

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/replies"><span>Replies</span> </NavLink>
//             </div>

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/highlights"><span>Hightlights</span> </NavLink>
//             </div>

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/media"><span>Media</span> </NavLink>
//             </div>  

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/likes"><span>Likes</span> </NavLink>
//             </div>  

//             <div>
//                 <NavLink className = {({isActive}) =>{return (isActive) ? "left" : "" }} 
//                 style = {({isActive}) =>{ return (isActive) ? {color: "white" , textDecoration:"none"} : {color : "gray" , textDecoration:"none"}}}
//                 to = "/profile/saves"><span>Saved</span> </NavLink>
//             </div>  
              
//               <hr />
//               </div>
//               <Outlet />
//             </Col>
//             <Col md={4}
//               className="right"
//               style={{ backgroundColor: "black" }}
//             >
//               <nav className="nav-bar">
//               <div className="search-bar-container">
//                 <input
//                   type="text"
//                   className="search-bar"
//                   placeholder="Search..."
//                 />
//               </div>
//             </nav>
//             <div className="right__container">
//               <FollowPages />
//             </div>
//             <div className="youmay" style={{ backgroundColor: "#2c2c2c" }}>
//               <p
//                 style={{
//                   fontSize: "xx-large",
//                   color: "white",
//                   marginLeft: "20px",
//                 }}
//               >
//                 <b>What’s happening</b>
//               </p>
//               <ExploreComp
//                 trend="#اعصار__دانيال"
//                 country="Trending in Egypt"
//                 posts="58.4K Posts"
//               />
//               <ExploreComp
//                 trend="#اعصار__دانيال"
//                 country="Trending in Egypt"
//                 posts="58.4K Posts"
//               />
//               <ExploreComp
//                 trend="#اعصار__دانيال"
//                 country="Trending in Egypt"
//                 posts="58.4K Posts"
//               />
//               <ExploreComp
//                 trend="#اعصار__دانيال"
//                 country="Trending in Egypt"
//                 posts="58.4K Posts"
//               />
//             </div>
//             </Col>
//           </Row>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
