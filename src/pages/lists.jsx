// import React from 'react';
// import { Row,Col } from 'react-bootstrap';
// import Navbar from '../components/big/navbar/navbar';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faMagnifyingGlass,faCirclePlus} from '@fortawesome/free-solid-svg-icons';

// import fashion from '../assets/fashion.jpg';
// import h from '../assets/h.jpg';
// import Premium from '../components/small/premium';
// import Happen from '../components/small/happen';
// import Follow from '../components/small/follow';
// import ListComp from '../components/small/listComp';
// import HappenParent from '../components/medium/happenParent';
// import FollowParent from '../components/medium/followParent';
// import ListsParent from '../components/medium/listsParent';
// const Lists = () => {
//     return (
//         <section className="home">
//             <Row>
//                 <Col sm={12} md={2}>
//                     {/* Navbar section */}
//                     <Navbar />
//                 </Col>
//                 <Col sm={6} md={6} className="test">
//                 <section className="center">
//                     <div className="right__search">
//                         <FontAwesomeIcon icon={faMagnifyingGlass} className="right-search-icon" />
//                         <input className='input-a' type="search" placeholder="Search" />
//                     </div>
//                     <div className="center__discover">
//                         <h5>Discover New Lists</h5>
//                         <ListComp content="318 followers including @CinemaTweets1" img={fashion} title="film"/>
//                         {/* Repeat the structure for additional items */}
//                     </div>
//                     <hr />
//                     <div className="center__discover">
                        
//                         <ListsParent/>
                        
                        
//                         {/* Repeat the structure for additional items */}
//                     </div>
                    
//                     </section>
//                 </Col>
//                 <Col md={4}>
//                 <section className="right">
//                     <div className="right__search">
//                         <FontAwesomeIcon icon={faMagnifyingGlass} className="right-search-icon" />
//                         <input type="search" placeholder="Search" />
//                     </div>
//                     <Premium/>
//                     <div className="right__container">
//                     <HappenParent/>     

//                         {/* Repeat the structure for additional items */}
//                     </div>
//                     <div className="right__container">
//                         <FollowParent/>

//                         {/* Repeat the structure for additional items */}
//                     </div>
//                     </section>
//                 </Col>
//             </Row>
//         </section>
//     );
// }

// export default Lists;

















// import React, { useEffect, useState } from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Row } from "react-bootstrap";
// import axios from 'axios';
// import Premium from "../components/small/premium";
// const Lists = () => {
//     const [users, setUsers] = useState([]);
//     const apiUrl = "http://localhost:4005/users";
  
//     useEffect(() => {
//       const fetchUsers = async () => {
//         try {
//           const authToken = localStorage.getItem('token');
//           const response = await axios.get(apiUrl, {
//             headers: {
//               Authorization: `${authToken}`,
//             },
//           });
    
//           const data = response.data;
    
//           // Assuming you have the ID of the logged-in user
//           const loggedUserId = localStorage.getItem('ID'); // replace with the actual logged-in user ID
    
//           // Filter out the logged-in user from the fetched users
//           const otherUsers = data.filter(user => user._id !== loggedUserId);
    
//           // Add 'followStatus' property to each user object
//           const usersWithFollowStatus = otherUsers.map(user => ({
//             ...user,
//             followStatus: user.followers.includes(loggedUserId),
//           }));
    
//           setUsers(usersWithFollowStatus);
//         } catch (error) {
//           console.error("Error fetching users:", error);
//         }
//       };
    
//       fetchUsers();
//     }, []);
    
//     const handleFollowToggle = async (userId) => {
//       try {
//         // Assuming you have the authentication token stored in localStorage
//         const authToken = localStorage.getItem('token');
    
//         const response = await axios.put(
//           `http://localhost:4005/users/follow/${userId}`,
//           {},
//           {
//             headers: {
//               Authorization: `${authToken}`,
//             },
//           }
//         );
    
//         const updatedUsers = users.map((user) =>
//           user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//         );
//         setUsers(updatedUsers);
//       } catch (error) {
//         console.error("Error toggling follow:", error);
//         // Add error handling logic, e.g., show a message to the user
//       }
//     };
  
//     const handleUnfollowToggle = async (userId) => {
//       try {
//         const authToken = localStorage.getItem('token');
    
//         const response = await axios.put(
//           `http://localhost:4005/users/unfollow/${userId}`,
//           {},
//           {
//             headers: {
//               Authorization: `${authToken}`,
//             },
//           }
//         );
    
//         const updatedUsers = users.map((user) =>
//           user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//         );
//         setUsers(updatedUsers);
//       } catch (error) {
//         console.error("Error toggling unfollow:", error);
//       }
//     };
  
//     return (
//       <div className="bodyprofile" style={{color:"#fff"}}>
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
//                 <div className="col text-start h2" style={{padding:"20px"}}>people you may know</div>
  
//             {/* Display users here using map */}
//             {users.map((user) => (
//               <div key={user._id} className="right__container__who">
//                 <div className="right__container__who__left">
//                   <div className="right__container__who__left-img">
//                     <img src={user.profilePicture} alt="" />
//                   </div>
//                   <div className="right__container__who__left-name">
//                     <div>{user.name}</div>
//                     <span>@{user.username}</span>
//                   </div>
//                 </div>
//                 <div className="right__container__who__right">
//                   <button 
//                     className="right__container__who__right-btn" 
//                     onClick={() => user.followStatus ? handleUnfollowToggle(user._id) : handleFollowToggle(user._id)}
//                   >
//                     {user.followStatus ? "Unfollow" : "Follow"}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </Col>
//           <Col md={4}>
//             <section className="right">
//               <Premium/>
//             </section>
//           </Col>
          
//         </Row>
//       </div>
//     );
// }

// export default Lists;









// import React, { useEffect, useState } from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Row } from "react-bootstrap";
// import axios from "axios";
// import Premium from "../components/small/premium";

// const Lists = () => {
//   const [users, setUsers] = useState([]);
//   const apiUrl = "http://localhost:4005/users";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const authToken = localStorage.getItem("token");

//         const loggedUserId = localStorage.getItem("ID");

//         const followingsResponse = await axios.get(
//           `http://localhost:4005/users/${loggedUserId}/following`,
//           {
//             headers: {
//               Authorization: `${authToken}`,
//             },
//           }
//         );

//         const followingsData = followingsResponse.data.following;

//         const usersResponse = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         });

//         const data = usersResponse.data;

//         const otherUsers = data.filter(
//           (user) =>
//             user._id !== loggedUserId &&
//             !followingsData.some((following) => following._id === user._id)
//         );

//         const usersWithFollowStatus = otherUsers.map((user) => ({
//           ...user,
//           followStatus: user.followers.includes(loggedUserId),
//         }));

//         setUsers(usersWithFollowStatus);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, [apiUrl]);

//   const handleFollowToggle = async (userId) => {
//     try {
//       const authToken = localStorage.getItem("token");

//       const response = await axios.put(
//         `http://localhost:4005/users/follow/${userId}`,
//         {},
//         {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         }
//       );

//       const updatedUsers = users.map((user) =>
//         user._id === userId
//           ? { ...user, followStatus: !user.followStatus }
//           : user
//       );

//       setUsers(updatedUsers);
//     } catch (error) {
//       console.error("Error toggling follow:", error);
//     }
//   };

//   const handleUnfollowToggle = async (userId) => {
//     try {
//       const authToken = localStorage.getItem("token");

//       const response = await axios.put(
//         `http://localhost:4005/users/unfollow/${userId}`,
//         {},
//         {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         }
//       );

//       const updatedUsers = users.map((user) =>
//         user._id === userId
//           ? { ...user, followStatus: !user.followStatus }
//           : user
//       );

//       setUsers(updatedUsers);
//     } catch (error) {
//       console.error("Error toggling unfollow:", error);
//     }
//   };

//   return (
//     <div className="bodyprofile" style={{ color: "#fff" }}>
//       <Row className="row">
//         <Col sm={12} md={2}>
//           <Navbar />
//         </Col>
//         <Col
//           sm={12}
//           md={6}
//           className="center-1 center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             border: "#c71818",
//             position: "relative",
//           }}
//         >
//           <div
//             className="col text-start h2"
//             style={{ padding: "20px" }}
//           >
//             People you may know
//           </div>

//           {/* {users.map((user) => (
//             <div key={user._id} className="right__container__who">
//               <div className="right__container__who__left">
//                 <div className="right__container__who__left-img">
//                   <img src={user.profilePicture} alt="" />
//                 </div>
//                 <div className="right__container__who__left-name">
//                   <div>{user.name}</div>
//                   <span>@{user.username}</span>
//                 </div>
//               </div>
//               <div className="right__container__who__right">
//                 <button
//                   className="right__container__who__right-btn"
//                   onClick={() =>
//                     user.followStatus
//                       ? handleUnfollowToggle(user._id)
//                       : handleFollowToggle(user._id)
//                   }
//                 >
//                   {user.followStatus ? "Following" : "Follow"}
//                 </button>
//               </div>
//             </div>
//           ))} */}

//             {users.map((user) => (
//             <div key={user._id} className="right__container__who">
//                 <div className="right__container__who__left">
//                 <div className="right__container__who__left-img">
//                     <img src={user.profilePicture} alt="" />
//                 </div>
//                 <div className="right__container__who__left-name">
//                     <div>{user.name}</div>
//                     <span>@{user.username}</span>
//                 </div>
//                 </div>
//                 <div className="right__container__who__right">
//                 <button
//                     className={`right__container__who__right-btn ${
//                     user.followStatus ? 'following' : 'not-following'
//                     }`}
//                     onClick={() =>
//                     user.followStatus
//                         ? handleUnfollowToggle(user._id)
//                         : handleFollowToggle(user._id)
//                     }
//                 >
//                     {user.followStatus ? 'Following' : 'Follow'}
//                 </button>
//                 </div>
//             </div>
//             ))}

//         </Col>
//         <Col md={4}>
//           <section className="right">
//             <Premium />
//           </section>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Lists;




















import React, { useEffect, useState } from "react";
import Navbar from "../components/big/navbar/navbar";
import { Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import Premium from "../components/small/premium";
import { useTranslation } from "react-i18next";

const Lists = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "http://localhost:4005/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const authToken = localStorage.getItem("token");

        const loggedUserId = localStorage.getItem("ID");

        const followingsResponse = await axios.get(
          `http://localhost:4005/users/${loggedUserId}/following`,
          {
            headers: {
              Authorization: `${authToken}`,
            },
          }
        );

        const followingsData = followingsResponse.data.following;

        const usersResponse = await axios.get(apiUrl, {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        const data = usersResponse.data;

        const otherUsers = data.filter(
          (user) =>
            user._id !== loggedUserId &&
            !followingsData.some((following) => following._id === user._id)
        );

        const usersWithFollowStatus = otherUsers.map((user) => ({
          ...user,
          followStatus: user.followers.includes(loggedUserId),
        }));

        setUsers(usersWithFollowStatus);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  const handleFollowToggle = async (userId) => {
    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.put(
        `http://localhost:4005/users/follow/${userId}`,
        {},
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );

      const updatedUsers = users.map((user) =>
        user._id === userId
          ? { ...user, followStatus: !user.followStatus }
          : user
      );

      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };

  const handleUnfollowToggle = async (userId) => {
    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.put(
        `http://localhost:4005/users/unfollow/${userId}`,
        {},
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );

      const updatedUsers = users.map((user) =>
        user._id === userId
          ? { ...user, followStatus: !user.followStatus }
          : user
      );

      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error toggling unfollow:", error);
    }
  };
const {t}=useTranslation()
  return (
    <div className="bodyprofile" style={{ color: "#fff" }}>
      <Row className="row">
        <Col sm={12} md={2}>
          <Navbar />
        </Col>
        <Col
          sm={12}
          md={6}
          className="center-1 center"
          style={{
            backgroundColor: "rgb(0, 0, 0)",
            border: "#c71818",
            position: "relative",
          }}
        >
          {loading && (
            <div className="loader-container-1">
            <div className="loader-overlay" />
            <Spinner className="loader-spinner" animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          )}

          <div className="col text-start h2" style={{ padding: "20px" }}>
          {t("home.part12")}
          </div>

          {users.map((user) => (
            <div key={user._id} className="right__container__who">
              <div className="right__container__who__left">
                <div className="right__container__who__left-img">
                  <img src={user.profilePicture} alt="" />
                </div>
                <div className="right__container__who__left-name">
                  <div>{user.name}</div>
                  <span>@{user.username}</span>
                </div>
              </div>
              <div className="right__container__who__right">
                <button
                  className={`right__container__who__right-btn ${
                    user.followStatus ? "following" : "not-following"
                  }`}
                  onClick={() =>
                    user.followStatus
                      ? handleUnfollowToggle(user._id)
                      : handleFollowToggle(user._id)
                  }
                >
                  {user.followStatus ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          ))}
        </Col>
        <Col md={4}>
          <section className="right">
            <Premium />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Lists;
