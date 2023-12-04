// import React from 'react';
// import { Container,Row } from 'react-bootstrap';

// const NavBar = () => {
//     return (
//         <div className="navbar">
//             <Container>
//                 <Row>
//                     <nav class="home__nav">
//                         <div class="home__icon__img">
//                             <a href="./index.html"><img class="home__icon" src="./img/logo-white.png" alt=""/></a>
//                         </div>
//                         <ul class="home__nav__ul">
//                             <li class="home__nav__li"><a class="home__nav__a" href="./index.html"><i class="fa-solid fa-house svg"></i>Home</a><a class="home__nav__a-hidden" href="#"><i class="fa-solid fa-house svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="../hesham explore/index.html"><i class="fa-solid fa-magnifying-glass svg"></i>Explore</a><a class="home__nav__a-hidden" href="../hesham explore/index.html"><i class="fa-solid fa-magnifying-glass svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-regular fa-bell svg"></i>Notifications</a><a class="home__nav__a-hidden" href="#"><i class="fa-regular fa-bell svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-regular fa-envelope svg"></i>Messages</a><a class="home__nav__a-hidden" href="#"><i class="fa-regular fa-envelope svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="../hesham lists/index.html"><i class="fa-solid fa-list-ul svg"></i>Lists</a><a class="home__nav__a-hidden" href="../hesham lists/index.html"><i class="fa-solid fa-list-ul svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-solid fa-user-group svg"></i>Communities</a><a class="home__nav__a-hidden" href="#"></i><i class="fa-solid fa-user-group svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-brands fa-x-twitter svg"></i>Vertified</a><a class="home__nav__a-hidden" href="#"><i class="fa-brands fa-x-twitter svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-regular fa-user svg"></i>Profile</a><a class="home__nav__a-hidden" href="#"><i class="fa-regular fa-user svg"></i></a></li>
//                             <li class="home__nav__li"><a class="home__nav__a" href="#"><i class="fa-solid fa-ellipsis svg"></i>More</a><a class="home__nav__a-hidden" href="#"><i class="fa-solid fa-ellipsis svg"></i></a></li>
//                         </ul>
//                         <button class="home__nav__btn">Post</button><button class="home__nav__btn-hidden"><i class="fa-brands fa-twitter tweet"></i></i></button>
//                         <div class="home__nav__profile">
//                             <div class="home__nav__profile__img">
//                                 <img src={h} alt=""/>
//                             </div>
//                             <div class="home__nav__profile__name">
//                                 <div>Ahmed Hesham</div>
//                                 <span>@ahmed10_hesh...</span>
//                             </div>
//                             <div class="home__nav__profile__svg">
//                                 <i class="fa-solid fa-ellipsis svg"></i>
//                             </div>
//                         </div>
//                         <div class="home__nav__profile-hidden">
//                             <img src={h} alt=""/>
//                         </div>
//                     </nav>
//                 </Row>
//             </Container>
//         </div>

//     );
// }

// export default NavBar;

// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import logo from '../../../assets/logo-white.png'
// import h from '../../../assets/h.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@fortawesome/free-solid-svg-icons'

// const Navbar = () => {
//     return (
//         <div className="navbar home">
//             <Container>
//                 <Row>
//                     <nav className="home__nav">
//                         <div className="home__icon__img">
//                             <a href="./index.html"><img className="home__icon" src={logo} alt="" /></a>
//                         </div>
//                         <ul className="home__nav__ul">
//                             <li className="home__nav__li">
//                                 <a className="home__nav__a" href="./index.html">
//                                 <FontAwesomeIcon className='svg' icon={faHouse} />Home
//                                 </a>
//                                 <a className="home__nav__a-hidden" href="#">
//                                 <FontAwesomeIcon className='svg' icon={faHouse} />
//                                 </a>
//                             </li>
//                             {/* Add more list items similarly */}
//                         </ul>
//                         <button className="home__nav__btn">Post</button>
//                         <button className="home__nav__btn-hidden">
//                             <i className="fa-brands fa-twitter tweet"></i>
//                         </button>
//                         <div className="home__nav__profile">
//                             <div className="home__nav__profile__img">
//                                 <img src={h} alt="" />
//                             </div>
//                             <div className="home__nav__profile__name">
//                                 <div>Ahmed Hesham</div>
//                                 <span>@ahmed10_hesh...</span>
//                             </div>
//                             <div className="home__nav__profile__svg">
//                                 <i className="fa-solid fa-ellipsis svg"></i>
//                             </div>
//                         </div>
//                         <div className="home__nav__profile-hidden">
//                             <img src={h} alt="" />
//                         </div>
//                     </nav>
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default Navbar;

// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import logo from '../../../assets/logo-white.png';
// import h from '../../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHouse,
//   faMagnifyingGlass,
//   faBell,
//   faEnvelope,
//   faListUl,
//   faUserGroup,
//   faFeatherPointed,

// //   faTwitter,
//   faUser,
//   faEllipsis,
// } from '@fortawesome/free-solid-svg-icons';
//  // Import more icons as needed
//  import { faXTwitter } from "@fortawesome/free-brands-svg-icons"

// const Navbar = () => {
//   return (
//     <div className="navbar home">
//         <nav className="home__nav">
//             <div className="home__icon__img">
//               <a href="./index.html">
//                 <img className="home__icon" src={logo} alt="" />
//               </a>
//             </div>
//             <ul className="home__nav__ul">
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="./index.html">
//                   <FontAwesomeIcon className="svg" icon={faHouse} />
//                   Home
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faHouse} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="../hesham explore/index.html">
//                   <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//                   Explore
//                 </a>
//                 <a className="home__nav__a-hidden" href="../hesham explore/index.html">
//                   <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faBell} />
//                   Notifications
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faBell} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEnvelope} />
//                   Messages
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEnvelope} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="../hesham lists/index.html">
//                   <FontAwesomeIcon className="svg" icon={faListUl} />
//                   Lists
//                 </a>
//                 <a className="home__nav__a-hidden" href="../hesham lists/index.html">
//                   <FontAwesomeIcon className="svg" icon={faListUl} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUserGroup} />
//                   Communities
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUserGroup} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                 <FontAwesomeIcon className='svg' icon={faXTwitter} />
//                   Verified
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                 <FontAwesomeIcon className='svg' icon={faXTwitter} />

//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUser} />
//                   Profile
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faUser} />
//                 </a>
//               </li>
//               <li className="home__nav__li">
//                 <a className="home__nav__a" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEllipsis} />
//                   More
//                 </a>
//                 <a className="home__nav__a-hidden" href="#">
//                   <FontAwesomeIcon className="svg" icon={faEllipsis} />
//                 </a>
//               </li>
//               {/* Add more list items similarly */}
//             </ul>
//             <button className="home__nav__btn">Post</button>
//             <button className="home__nav__btn-hidden">
//               <i className="fa-brands fa-twitter tweet"></i>
//               <FontAwesomeIcon className='tweet' icon={faFeatherPointed} />
//             </button>
//             <div className="home__nav__profile">
//               <div className="home__nav__profile__img">
//                 <img src={h} alt="" />
//               </div>
//               <div className="home__nav__profile__name">
//                 <div>Ahmed Hesham</div>
//                 <span>@ahmed10_hesh...</span>
//               </div>
//               <div className="home__nav__profile__svg">
//                 <i className="fa-solid fa-ellipsis svg"></i>
//               </div>
//             </div>
//             <div className="home__nav__profile-hidden">
//               <img src={h} alt="" />
//             </div>
//           </nav>

//     </div>
//   );
// };

// export default Navbar;


























// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Container, Row } from "react-bootstrap";
// import logo from "../../../assets/logo-white.png";
// import h from "../../../assets/h.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouse,
//   faMagnifyingGlass,
//   faBell,
//   faEnvelope,
//   faListUl,
//   faUserGroup,
//   faFeatherPointed,
//   faUser,
//   faEllipsis,
// } from "@fortawesome/free-solid-svg-icons";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import { useContext } from "react";
// import { authContext } from "../../../contexts/authContext";
// import { useState } from "react";
// import axios from "axios";
// const Navbar = () => {

//   const {isLogin,setLogin} = useContext(authContext)

//   const navigate=useNavigate()

//   const [userData, setUserData] = useState(null);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData=response.data.data;
//       // console.log(userData);
//       setUserData(userData)
//       // console.log("user");
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };
//   getUser()

//   return (
//     <div className="navbar home">
//       <nav className="home__nav">
//         <div className="home__icon__img">
//           <NavLink to="/home">
//             <img className="home__icon" src={logo} alt="" />
//           </NavLink>
//         </div>
//         <ul className="home__nav__ul">
//           <li className="home__nav__li">
//             <NavLink to="/home" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faHouse} />
//               Home
//             </NavLink>
//             <NavLink to="/home" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faHouse} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/explore" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//               Explore
//             </NavLink>
//             <NavLink to="/explore" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/notifications" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faBell} />
//               Notifications
//             </NavLink>
//             <NavLink to="/notifications" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faBell} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/messages" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faEnvelope} />
//               Messages
//             </NavLink>
//             <NavLink to="/messages" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faEnvelope} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/lists" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faListUl} />
//               Lists
//             </NavLink>
//             <NavLink to="/lists" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faListUl} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/communities" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faUserGroup} />
//               Communities
//             </NavLink>
//             <NavLink to="/communities" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faUserGroup} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/verified" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faXTwitter} />
//               Verified
//             </NavLink>
//             <NavLink to="/verified" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faXTwitter} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/profile" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faUser} />
//               Profile
//             </NavLink>
//             <NavLink to="/profile" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faUser} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/more" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faEllipsis} />
//               More
//             </NavLink>
//             <NavLink to="/more" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faEllipsis} />
//             </NavLink>
//           </li>
//         </ul>
//         <button className="home__nav__btn">Post</button>
//         <button className="home__nav__btn-hidden">
//           <FontAwesomeIcon className="tweet" icon={faFeatherPointed} />
//         </button>





//         {/* <div className="home__nav__profile">
//           <div className="home__nav__profile__img">
//             <img src={h} alt="" />
//           </div>
//           <div className="home__nav__profile__name">
//             <div>Ahmed Hesham</div>
//             <span>@ahmed10_hesh...</span>
//           </div>
//           <div className="home__nav__profile__svg">
//             <i className="fa-solid fa-ellipsis svg"></i>
//           </div>
//         </div>
//         <div className="home__nav__profile-hidden">
//           <img src={h} alt="" />
//         </div> */}

//         {(isLogin)&&<><div onClick={()=>{
//                         setLogin(false)
//                         localStorage.removeItem('token')
//                         navigate('/signIn')
//                    }}  className="home__nav__profile">
//           <div className="home__nav__profile__img">
//             <img src={userData && userData.profilePicture} alt="" />
//           </div>
//           <div className="home__nav__profile__name">
//             <div>{userData && userData.name}</div>
//             <span>{userData && userData.username}</span>
//           </div>
//           <div className="home__nav__profile__svg">
//             <i className="fa-solid fa-ellipsis svg"></i>
//           </div>
//         </div>
//         <div onClick={()=>{
//                         setLogin(false)
//                         localStorage.removeItem('token')
//                         navigate('/signIn')

//                    }} className="home__nav__profile-hidden">
//           <img src={userData && userData.profilePicture} alt="" />
//         </div></>}

//       </nav>
//     </div>
//   );
// };

// export default Navbar;


























// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Container, Row } from "react-bootstrap";
// import logo from "../../../assets/logo-white.png";
// import h from "../../../assets/h.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouse,
//   faMagnifyingGlass,
//   faBell,
//   faEnvelope,
//   faListUl,
//   faUserGroup,
//   faFeatherPointed,
//   faUser,
//   faEllipsis,
// } from "@fortawesome/free-solid-svg-icons";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import { useContext } from "react";
// import { authContext } from "../../../contexts/authContext";
// import { useState } from "react";
// import axios from "axios";
// import { Modal, Button } from 'react-bootstrap';

// const Navbar = () => {

//   const {isLogin,setLogin} = useContext(authContext)

//   const navigate=useNavigate()

//   const [userData, setUserData] = useState(null);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData=response.data.data;
//       // console.log(userData);
//       setUserData(userData)
//       // console.log("user");
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };
//   getUser()

//   const handleLogout = () => {
//     setLogin(false);
//     localStorage.removeItem('token');
//     navigate('/signIn');
//   };

//   const confirmLogout = () => {
//     setShowLogoutModal(true);
//   };

//   const handleCloseLogoutModal = () => {
//     setShowLogoutModal(false);
//   };

//   const handleConfirmLogout = () => {
//     handleLogout();
//     handleCloseLogoutModal();
//   };

//   return (
//     <div className="navbar home">
//       <nav className="home__nav">
//         <div className="home__icon__img">
//           <NavLink to="/home">
//             <img className="home__icon" src={logo} alt="" />
//           </NavLink>
//         </div>
//         <ul className="home__nav__ul">
//           <li className="home__nav__li">
//             <NavLink to="/home" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faHouse} />
//               Home
//             </NavLink>
//             <NavLink to="/home" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faHouse} />
//             </NavLink>
//           </li>
//           {/* <li className="home__nav__li">
//             <NavLink to="/explore" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//               Explore
//             </NavLink>
//             <NavLink to="/explore" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
//             </NavLink>
//           </li> */}
//           <li className="home__nav__li">
//             <NavLink to="/notifications" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faBell} />
//               Notifications
//             </NavLink>
//             <NavLink to="/notifications" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faBell} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/messages" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faEnvelope} />
//               Messages
//             </NavLink>
//             <NavLink to="/messages" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faEnvelope} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/lists" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faUserGroup} />
//               Find friends
//             </NavLink>
//             <NavLink to="/lists" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faUserGroup} />
//             </NavLink>
//           </li>
//           <li className="home__nav__li">
//             <NavLink to="/communities" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faXTwitter}/>
//                 Community
//             </NavLink>
//             <NavLink to="/communities" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faXTwitter} />
//             </NavLink>
//           </li>
//           {/* <li className="home__nav__li">
//             <NavLink to="/verified" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faXTwitter} />
//               Verified
//             </NavLink>
//             <NavLink to="/verified" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faXTwitter} />
//             </NavLink>
//           </li> */}
//           <li className="home__nav__li">
//             <NavLink to="/profile" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faUser} />
//               Profile
//             </NavLink>
//             <NavLink to="/profile" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faUser} />
//             </NavLink>
//           </li>
//           {/* <li className="home__nav__li">
//             <NavLink to="/more" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faEllipsis} />
//               More
//             </NavLink>
//             <NavLink to="/more" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faEllipsis} />
//             </NavLink>
//           </li> */}
//         </ul>
//         <button className="home__nav__btn">Post</button>
//         <button className="home__nav__btn-hidden">
//           <FontAwesomeIcon className="tweet" icon={faFeatherPointed} />
//         </button>





//         {/* <div className="home__nav__profile">
//           <div className="home__nav__profile__img">
//             <img src={h} alt="" />
//           </div>
//           <div className="home__nav__profile__name">
//             <div>Ahmed Hesham</div>
//             <span>@ahmed10_hesh...</span>
//           </div>
//           <div className="home__nav__profile__svg">
//             <i className="fa-solid fa-ellipsis svg"></i>
//           </div>
//         </div>
//         <div className="home__nav__profile-hidden">
//           <img src={h} alt="" />
//         </div> */}

//         {(isLogin)&&<><div onClick={confirmLogout} className="home__nav__profile">
//           <div className="home__nav__profile__img">
//             <img src={userData && userData.profilePicture} alt="" />
//           </div>
//           <div className="home__nav__profile__name">
//             <div>{userData && userData.name}</div>
//             <span>@{userData && userData.username}</span>
//           </div>
//           <div className="home__nav__profile__svg">
//             <i className="fa-solid fa-ellipsis svg"></i>
//           </div>
//         </div>
//         <div onClick={confirmLogout} className="home__nav__profile-hidden">
//               <img src={userData && userData.profilePicture} alt="" />
//             </div></>}
//         <Modal show={showLogoutModal} onHide={handleCloseLogoutModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Confirm Logout</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Are you sure you want to logout?</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseLogoutModal}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={handleConfirmLogout}>
//               Logout
//             </Button>
//           </Modal.Footer>
//         </Modal>

//       </nav>
//     </div>
//   );
// };

// export default Navbar;


























// import React, { useEffect, useState, useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Container, Row, Modal, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouse,
//   faBell,
//   faEnvelope,
//   faUserGroup,
//   faFeatherPointed,
//   faUser,
//   faEllipsis,
  
// } from "@fortawesome/free-solid-svg-icons";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
// import axios from "axios";

// import { authContext } from "../../../contexts/authContext";

// import logo from "../../../assets/logo-white.png"; // Add this line for the logo import

// const Navbar = () => {
//   const { isLogin, setLogin } = useContext(authContext);
//   const navigate = useNavigate();

//   const [userData, setUserData] = useState(null);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const [loadingUser, setLoadingUser] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//         const userData = response.data.data;
//         setUserData(userData);
//       } catch (error) {
//         console.error('Error fetching user:', error);
//       } finally {
//         setLoadingUser(false);
//       }
//     };

//     if (isLogin) {
//       fetchUser();
//     }
//   }, [isLogin]);

//   const handleLogout = () => {
//     setLogin(false);
//     localStorage.removeItem('token');
//     navigate('/signIn');
//   };

//   const confirmLogout = () => {
//     setShowLogoutModal(true);
//   };

//   const handleCloseLogoutModal = () => {
//     setShowLogoutModal(false);
//   };

//   const handleConfirmLogout = () => {
//     handleLogout();
//     handleCloseLogoutModal();
//   };

//   return (
//     <>
//       {isLogin && !loadingUser && (
//         <div className="navbar home">
//           <nav className="home__nav">
//             <div className="home__icon__img">
//               <NavLink to="/home">
//                 <img className="home__icon" src={logo} alt="" />
//               </NavLink>
//             </div>
//             <ul className="home__nav__ul">
//            <li className="home__nav__li">
//              <NavLink to="/home" className="home__nav__a">
//                <FontAwesomeIcon className="svg" icon={faHouse} />
//                Home
//              </NavLink>
//              <NavLink to="/home" className="home__nav__a-hidden">
//                <FontAwesomeIcon className="svg" icon={faHouse} />
//              </NavLink>
//            </li>
//            {/* <li className="home__nav__li">
// //             <NavLink to="/explore" className="home__nav__a">
// //               <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
// //               Explore
// //             </NavLink>
// //             <NavLink to="/explore" className="home__nav__a-hidden">
// //               <FontAwesomeIcon className="svg" icon={faMagnifyingGlass} />
// //             </NavLink>
// //           </li> */}
//            <li className="home__nav__li">
//              <NavLink to="/notifications" className="home__nav__a">
//                <FontAwesomeIcon className="svg" icon={faBell} />
//                Notifications
//              </NavLink>
//              <NavLink to="/notifications" className="home__nav__a-hidden">
//                <FontAwesomeIcon className="svg" icon={faBell} />
//              </NavLink>
//            </li>
//            <li className="home__nav__li">
//              <NavLink to="/messages" className="home__nav__a">
//               <FontAwesomeIcon className="svg" icon={faEnvelope} />
//                Messages
//              </NavLink>
//              <NavLink to="/messages" className="home__nav__a-hidden">
//                <FontAwesomeIcon className="svg" icon={faEnvelope} />
//              </NavLink>
//            </li>
//            <li className="home__nav__li">
//             <NavLink to="/lists" className="home__nav__a">
//                <FontAwesomeIcon className="svg" icon={faUserGroup} />
//                Find friends
//              </NavLink>
//              <NavLink to="/lists" className="home__nav__a-hidden">
//                <FontAwesomeIcon className="svg" icon={faUserGroup} />
//             </NavLink>
//            </li>
//            <li className="home__nav__li">
//              <NavLink to="/communities" className="home__nav__a">
//                <FontAwesomeIcon className="svg" icon={faXTwitter}/>
//                  Community
//              </NavLink>
//              <NavLink to="/communities" className="home__nav__a-hidden">
//                <FontAwesomeIcon className="svg" icon={faXTwitter} />
//              </NavLink>
//            </li>
//            {/* <li className="home__nav__li">
// //             <NavLink to="/verified" className="home__nav__a">
// //               <FontAwesomeIcon className="svg" icon={faXTwitter} />
// //               Verified
// //             </NavLink>
// //             <NavLink to="/verified" className="home__nav__a-hidden">
// //               <FontAwesomeIcon className="svg" icon={faXTwitter} />
// //             </NavLink>
// //           </li> */}
//            <li className="home__nav__li">
//              <NavLink to="/profile" className="home__nav__a">
//                <FontAwesomeIcon className="svg" icon={faUser} />
//                Profile
//              </NavLink>
//              <NavLink to="/profile" className="home__nav__a-hidden">
//               <FontAwesomeIcon className="svg" icon={faUser} />
//              </NavLink>
//            </li>
//            {/* <li className="home__nav__li">
// //             <NavLink to="/more" className="home__nav__a">
// //               <FontAwesomeIcon className="svg" icon={faEllipsis} />
// //               More
// //             </NavLink>
// //             <NavLink to="/more" className="home__nav__a-hidden">
// //               <FontAwesomeIcon className="svg" icon={faEllipsis} />
// //             </NavLink>
// //           </li> */}
//          </ul>
//             <button className="home__nav__btn">Post</button>
//             <button className="home__nav__btn-hidden">
//               <FontAwesomeIcon className="tweet" icon={faFeatherPointed} />
//             </button>

//             {isLogin && (
//               <>
//                 <div onClick={confirmLogout} className="home__nav__profile">
//                   <div className="home__nav__profile__img">
//                     <img src={userData && userData.profilePicture} alt="" />
//                   </div>
//                   <div className="home__nav__profile__name">
//                     <div>{userData && userData.name}</div>
//                     <span>@{userData && userData.username}</span>
//                   </div>
//                   <div className="home__nav__profile__svg">
//                     <i className="fa-solid fa-ellipsis svg"></i>
//                   </div>
//                 </div>
//                 <div onClick={confirmLogout} className="home__nav__profile-hidden">
//                   <img src={userData && userData.profilePicture} alt="" />
//                 </div>
//               </>
//             )}

//             <Modal show={showLogoutModal} onHide={handleCloseLogoutModal}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Confirm Logout</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>Are you sure you want to logout?</Modal.Body>
//               <Modal.Footer>
//                 <Button variant="secondary" onClick={handleCloseLogoutModal}>
//                   Cancel
//                 </Button>
//                 <Button variant="primary" onClick={handleConfirmLogout}>
//                   Logout
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;










import React, { useEffect, useState, useContext, memo, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Container, Row, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBell, faEnvelope, faUserGroup, faFeatherPointed, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { authContext } from "../../../contexts/authContext";
import logo from "../../../assets/logo-white.png";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import "./nav.css";
import { FaEarthAfrica } from "react-icons/fa6";

// Memoized NavLink component
const NavLinkMemoized = memo(NavLink);

const Navbar = () => {
  const { isLogin, setLogin } = useContext(authContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
	const {lang, setLang} = useContext(authContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
        const userData = response.data.data;
        setUserData(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoadingUser(false);
      }
    };

    if (isLogin) {
      fetchUser();
    }
  }, [isLogin]);

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem('token');
    navigate('/signIn');
  };

  const confirmLogout = () => {
    setShowLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    handleCloseLogoutModal();
  };
//
const {t} = useTranslation();
const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  if (language === "ar") {
    setLang("ar");
  } else {
    setLang("en");
  }
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
};
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

//
  return (
    <>
      {isLogin && !loadingUser && (
        <div className="navbar home">
          <nav className="home__nav">
            <div className="home__icon__img">
              <Link to="/home">
                <img className="home__icon" src={logo} alt="" />
              </Link>
            </div>
            <ul className="home__nav__ul">
              <li className="home__nav__li">
                <NavLinkMemoized to="/home" className="home__nav__a">
                  <FontAwesomeIcon className="svg" icon={faHouse} />
             {t("side.part1")}
                </NavLinkMemoized>
                <NavLinkMemoized to="/home" className="home__nav__a-hidden">
                  <FontAwesomeIcon className="svg" icon={faHouse} />
                </NavLinkMemoized>
              </li>
              {/* <li className="home__nav__li">
                <NavLinkMemoized to="/notifications" className="home__nav__a">
                  <FontAwesomeIcon className="svg" icon={faBell} />
                  {t("side.part2")}
                </NavLinkMemoized>
                <NavLinkMemoized to="/notifications" className="home__nav__a-hidden">
                  <FontAwesomeIcon className="svg" icon={faBell} />
                </NavLinkMemoized>
              </li> */}
              <li className="home__nav__li">
                <NavLinkMemoized to="/messages" className="home__nav__a">
                  <FontAwesomeIcon className="svg" icon={faEnvelope} />
                  {t("side.part3")}
                </NavLinkMemoized>
                <NavLinkMemoized to="/messages" className="home__nav__a-hidden">
                  <FontAwesomeIcon className="svg" icon={faEnvelope} />
                </NavLinkMemoized>
              </li>
        
              <li className="home__nav__li">
                <NavLinkMemoized to="/lists" className="home__nav__a">
                  <FontAwesomeIcon className="svg" icon={faUserGroup} />
                  {t("side.part4")}
                </NavLinkMemoized>
                <NavLinkMemoized to="/lists" className="home__nav__a-hidden">
                  <FontAwesomeIcon className="svg" icon={faUserGroup} />
                </NavLinkMemoized>
              </li>
              <li className="home__nav__li">
                <NavLinkMemoized to="/communities" className="home__nav__a">
                  <FontAwesomeIcon className="svg" icon={faXTwitter}/>
                  {t("side.part5")}
                </NavLinkMemoized>
                <NavLinkMemoized to="/communities" className="home__nav__a-hidden">
                  <FontAwesomeIcon className="svg" icon={faXTwitter} />
                </NavLinkMemoized>
              </li>
              <li className="home__nav__li">
                <NavLinkMemoized to="/profile" className="home__nav__a">
                  <FontAwesomeIcon className="svg" icon={faUser} />
                  {t("side.part6")}
                </NavLinkMemoized>
                <NavLinkMemoized to="/profile" className="home__nav__a-hidden">
                  <FontAwesomeIcon className="svg" icon={faUser} />
                </NavLinkMemoized>
              </li>
              <li className="home__nav__li" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLinkMemoized className="home__nav__a">
        <FaEarthAfrica /> {t("side.part7")}

      </NavLinkMemoized>
      {isDropdownVisible && (
        <div className="dropdown-content">
          {/* Your dropdown content goes here */}
          <NavLinkMemoized className="home__nav__a-hidden">
           <p		onClick={() =>
												changeLanguage(
													"ar"
												)
											} ><input
											type='radio'
											id='arabic'
											name='languge'
											onClick={() =>
												changeLanguage(
													"ar"
												)
											}
										/>Ar-العربية</p>
          </NavLinkMemoized>
          <NavLinkMemoized className="home__nav__a-hidden">
          <p 	onClick={() =>
												changeLanguage(
													"en"
												)
											}><input
											type='radio'
											id='english'
											name='languge'
											onClick={() =>
												changeLanguage(
													"en"
												)
											}
										/>EN-English</p>
          </NavLinkMemoized>
          {/* Add more items as needed */}
        </div>
      )}
    </li>
            </ul>
 
   


            <button className="home__nav__btn"> {t("side.part8")}</button>
            <button className="home__nav__btn-hidden">
              <FontAwesomeIcon className="tweet" icon={faFeatherPointed} />
            </button>

            {isLogin && (
              <>
                <div onClick={confirmLogout} className="home__nav__profile">
                  <div className="home__nav__profile__img">
                    <img src={userData.profilePicture} alt="" />
                  </div>
                  <div className="home__nav__profile__name">
                    <div>{userData.name}</div>
                    <span>@{userData.username}</span>
                  </div>
                  <div className="home__nav__profile__svg">
                    <i className="fa-solid fa-ellipsis svg"></i>
                  </div>
                </div>
                <div onClick={confirmLogout} className="home__nav__profile-hidden">
                  <img src={userData.profilePicture} alt="" />
                </div>
              </>
            )}

            <Suspense fallback={<div>Loading...</div>}>
              <Modal show={showLogoutModal} onHide={handleCloseLogoutModal}>
                <Modal.Header closeButton>
                  <Modal.Title>{t("side.part9")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{t("side.part10")}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseLogoutModal}>
                  {t("side.part11")}
                  </Button>
                  <Button variant="primary" onClick={handleConfirmLogout}>
                  {t("side.part12")}
                  </Button>
                </Modal.Footer>
              </Modal>
            </Suspense>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
