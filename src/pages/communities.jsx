// import React from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Container, Row } from "react-bootstrap";
// import FollowParent from "../components/medium/followParent";
// import ExploreComp from "../components/small/exploreComp";
// import english from "../assets/englishh.jfif";
// import Groups from "../components/small/groups";
// import books from "../assets/books.jfif" ; 
// const Communities = () => {
//   return (
//     <div className="bodyprofile">
//       <Row className="row">
//         <Col sm={12} md={2}>
//           <Navbar />
//         </Col>
//         <Col
//           sm={12}
//           md={6}
//           className="center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             border: "#c71818",
//             position: "relative",
//           }}
//         >
//           <h3 style={{ color: "white" }} >Discover new Communities</h3>
         
//           <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
//         <br/>
//           <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
//         <br/>
//         <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
//         <br/>
//           <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
//         <br/>
//         <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
//         <br/>
//           <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
//         <br/>
//         <Groups imagee={english} title='تعلم اللغه الانجليزيه ' nummember='1.4k Members'/>
//         <br/>
//           <Groups imagee={books} title='توصيات كتب ' nummember='8k Members'/>
//         <br/>
        
//         </Col>

//         <Col md={4} className="right" style={{ backgroundColor: "black" }}>
//           <nav className="nav-bar">
//             <div className="search-bar-container">
//               <input
//                 type="text"
//                 className="search-bar"
//                 placeholder="Search..."
//               />
//             </div>
//           </nav>

//           <div className="youmay" style={{ backgroundColor: "#2c2c2c" }}>
//             <p
//               style={{
//                 fontSize: "xx-large",
//                 color: "white",
//                 marginLeft: "20px",
//               }}
//             >
//               <b>What’s happening</b>
//             </p>

//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//           </div>

//           <div className="right__container">
//             <FollowParent />
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Communities;



















// import React from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Container, Row } from "react-bootstrap";
// import FollowParent from "../components/medium/followParent";
// import ExploreComp from "../components/small/exploreComp";
// import english from "../assets/englishh.jfif";
// import Groups from "../components/small/groups";
// import books from "../assets/books.jfif" ; 
// const Communities = () => {
//   return (
//     <div className="bodyprofile">
//       <Row className="row">
//         <Col sm={12} md={2}>
//           <Navbar />
//         </Col>
//         <Col
//           sm={12}
//           md={6}
//           className="center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             border: "#c71818",
//             position: "relative",
//           }}
//         >
//         <div className="right__container__who">
//         <div className="right__container__who__left">
//             <div className="right__container__who__left-img">
//             <img src={props.img} alt="" />
//             </div>
//             <div className="right__container__who__left-name">
//             <div>{props.name}</div>
//             <span>{props.username}</span>
//             </div>
//         </div>
//         <div className="right__container__who__right">
//             <button className="right__container__who__right-btn">Follow</button>
//         </div>
//         </div>
//         </Col>

//         <Col md={4} className="right" style={{ backgroundColor: "black" }}>
//           <nav className="nav-bar">
//             <div className="search-bar-container">
//               <input
//                 type="text"
//                 className="search-bar"
//                 placeholder="Search..."
//               />
//             </div>
//           </nav>

//           <div className="youmay" style={{ backgroundColor: "#2c2c2c" }}>
//             <p
//               style={{
//                 fontSize: "xx-large",
//                 color: "white",
//                 marginLeft: "20px",
//               }}
//             >
//               <b>What’s happening</b>
//             </p>

//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//             <ExploreComp
//               trend="#اعصار__دانيال"
//               country="Trending in Egypt"
//               posts="58.4K Posts"
//             />
//           </div>

//           <div className="right__container">
//             <FollowParent />
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Communities;







// import React, { useEffect, useState } from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Row } from "react-bootstrap";
// import axios from 'axios';

// const Communities = () => {
//   const [users, setUsers] = useState([]);
//   const apiUrl = "http://localhost:4005/users";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         const data = response.data;
//         setUsers(data);
//         console.log(users);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="bodyprofile" style={{color:"#fff"}}>
//       <Row className="row">
//         <Col sm={12} md={2}>
//           <Navbar />
//         </Col>
//         <Col
//           sm={12}
//           md={6}
//           className="center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             border: "#c71818",
//             position: "relative",
//             paddingTop:"100px"
//           }}
//         >
//           {/* Display users here using map */}
//           {users.map((user) => (
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
//                 <button className="right__container__who__right-btn">Follow</button>
//               </div>
//             </div>
//           ))}
//         </Col>

//         {/* ... The rest of your components */}
//       </Row>
//     </div>
//   );
// };

// export default Communities;







// import React, { useEffect, useState } from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Row } from "react-bootstrap";
// import axios from 'axios';

// const Communities = () => {
//   const [users, setUsers] = useState([]);
//   const apiUrl = "http://localhost:4005/users";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         const data = response.data;
//         // Add 'followStatus' property to each user object
//         const usersWithFollowStatus = data.map(user => ({ ...user, followStatus: false }));
//         setUsers(usersWithFollowStatus);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleFollowToggle = (userId) => {
//     setUsers(prevUsers => 
//       prevUsers.map(user => 
//         user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//       )
//     );
//   };

//   return (
//     <div className="bodyprofile" style={{color:"#fff"}}>
//       <Row className="row">
//         <Col sm={12} md={2}>
//           <Navbar />
//         </Col>
//         <Col
//           sm={12}
//           md={6}
//           className="center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             border: "#c71818",
//             position: "relative",
//             paddingTop:"100px"
//           }}
//         >
//           {/* Display users here using map */}
//           {users.map((user) => (
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
//                   onClick={() => handleFollowToggle(user._id)}
//                 >
//                   {user.followStatus ? "Unfollow" : "Follow"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Col>

//         {/* ... The rest of your components */}
//       </Row>
//     </div>
//   );
// };

// export default Communities;









// import React, { useEffect, useState } from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Row } from "react-bootstrap";
// import axios from 'axios';

// const Communities = () => {
//   const [users, setUsers] = useState([]);
//   const apiUrl = "http://localhost:4005/users";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(apiUrl);
//         const data = response.data;
//         // Add 'followStatus' property to each user object
//         const usersWithFollowStatus = data.map(user => ({ ...user, followStatus: false }));
//         setUsers(usersWithFollowStatus);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleFollowToggle = (userId) => {
//     setUsers(prevUsers => 
//       prevUsers.map(user => 
//         user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//       )
//     );
//   };

//   return (
//     <div className="bodyprofile" style={{color:"#fff"}}>
//       <Row className="row">
//         <Col sm={12} md={2}>
//           <Navbar />
//         </Col>
//         <Col
//           sm={12}
//           md={6}
//           className="center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             border: "#c71818",
//             position: "relative",
//             paddingTop:"100px"
//           }}
//         >
//           {/* Display users here using map */}
//           {users.map((user) => (
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
//                   onClick={() => handleFollowToggle(user._id)}
//                 >
//                   {user.followStatus ? "Unfollow" : "Follow"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Col>

//         {/* ... The rest of your components */}
//       </Row>
//     </div>
//   );
// };

// export default Communities;









// import React, { useEffect, useState } from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Row } from "react-bootstrap";
// import axios from 'axios';

// const Communities = () => {
//   const [users, setUsers] = useState([]);
//   const apiUrl = "http://localhost:4005/users";

//   // useEffect(() => {
//   //   const fetchUsers = async () => {
//   //     try {
//   //       const response = await axios.get(apiUrl);
//   //       const data = response.data;
//   //       // Add 'followStatus' property to each user object
//   //       const usersWithFollowStatus = data.map(user => ({ ...user, followStatus: false }));
//   //       setUsers(usersWithFollowStatus);
//   //     } catch (error) {
//   //       console.error("Error fetching users:", error);
//   //     }
//   //   };

//   //   fetchUsers();
//   // }, []);


//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const authToken = localStorage.getItem('token');
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         });
  
//         const data = response.data;
  
//         // Assuming you have the ID of the logged-in user
//         const loggedUserId = localStorage.getItem('ID'); // replace with the actual logged-in user ID
  
//         // Filter out the logged-in user from the fetched users
//         const otherUsers = data.filter(user => user._id !== loggedUserId);
  
//         // Add 'followStatus' property to each user object
//         const usersWithFollowStatus = otherUsers.map(user => ({
//           ...user,
//           followStatus: user.followers.includes(loggedUserId),
//         }));
  
//         setUsers(usersWithFollowStatus);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
  
//     fetchUsers();
//   }, []);
  
  

//   // const handleFollowToggle = (userId) => {
//   //   setUsers(prevUsers => 
//   //     prevUsers.map(user => 
//   //       user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//   //     )
//   //   );
//   // };

//   // const handleFollowToggle = async (userId) => {
//   //   try {
//   //     const response = await axios.put(`http://localhost:4005/users/follow/${userId}`);
//   //     const updatedUsers = users.map(user =>
//   //       user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//   //     );
//   //     setUsers(updatedUsers);
//   //   } catch (error) {
//   //     console.error("Error toggling follow:", error);
//   //     // Add error handling logic, e.g., show a message to the user
//   //   }
//   // };

//   const handleFollowToggle = async (userId) => {
//     try {
//       // Assuming you have the authentication token stored in localStorage
//       const authToken = localStorage.getItem('token');
  
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
//         user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//       );
//       setUsers(updatedUsers);
//     } catch (error) {
//       console.error("Error toggling follow:", error);
//       // Add error handling logic, e.g., show a message to the user
//     }
//   };

  
  
  

//   return (
//     <div className="bodyprofile" style={{color:"#fff"}}>
//       <Row className="row">
//         <Col sm={12} md={2}>
//           <Navbar />
//         </Col>
//         <Col
//           sm={12}
//           md={6}
//           className="center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             border: "#c71818",
//             position: "relative",
//             paddingTop:"100px"
//           }}
//         >
//           {/* Display users here using map */}
//           {users.map((user) => (
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
//                   onClick={() => handleFollowToggle(user._id)}
//                 >
//                   {user.followStatus ? "Unfollow" : "Follow"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Col>

//         {/* ... The rest of your components */}
//       </Row>
//     </div>
//   );
// };

// export default Communities;









// import React, { useEffect, useState } from "react";
// import Navbar from "../components/big/navbar/navbar";
// import { Col, Row } from "react-bootstrap";
// import axios from 'axios';
// import Premium from "../components/small/premium";

// const Communities = () => {
//   const [users, setUsers] = useState([]);
//   const apiUrl = "http://localhost:4005/users";

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const authToken = localStorage.getItem('token');
//         const response = await axios.get(apiUrl, {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         });
  
//         const data = response.data;
  
//         const loggedUserId = localStorage.getItem('ID'); 
  
//         const otherUsers = data.filter(user => user._id !== loggedUserId);
  
//         const usersWithFollowStatus = otherUsers.map(user => ({
//           ...user,
//           followStatus: user.followers.includes(loggedUserId),
//         }));
  
//         setUsers(usersWithFollowStatus);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
  
//     fetchUsers();
//   }, []);
  
//   const handleFollowToggle = async (userId) => {
//     try {
//       const authToken = localStorage.getItem('token');
  
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
//         user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//       );
//       setUsers(updatedUsers);
//     } catch (error) {
//       console.error("Error toggling follow:", error);
//     }
//   };

//   const handleUnfollowToggle = async (userId) => {
//     try {
//       const authToken = localStorage.getItem('token');
  
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
//         user._id === userId ? { ...user, followStatus: !user.followStatus } : user
//       );
//       setUsers(updatedUsers);
//     } catch (error) {
//       console.error("Error toggling unfollow:", error);
//     }
//   };

//   return (
//     <div className="bodyprofile" style={{color:"#fff"}}>
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
//               <div className="col text-start h2" style={{padding:"20px"}}>All people</div>

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
//                   onClick={() => user.followStatus ? handleUnfollowToggle(user._id) : handleFollowToggle(user._id)}
//                 >
//                   {user.followStatus ? "Following" : "Follow"}
//                 </button>
//               </div>
//             </div>
//           ))} */}

//           {users.map((user) => (
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
//                   className={`right__container__who__right-btn ${
//                     user.followStatus ? 'following' : 'not-following'
//                   }`}
//                   onClick={() =>
//                     user.followStatus
//                       ? handleUnfollowToggle(user._id)
//                       : handleFollowToggle(user._id)
//                   }
//                 >
//                   {user.followStatus ? 'Following' : 'Follow'}
//                 </button>
//               </div>
//             </div>
//           ))}

//         </Col>
//         <Col md={4}>
//           <section className="right">
//             <Premium/>
//           </section>
//         </Col>
        
//       </Row>
//     </div>
//   );
// };

// export default Communities;











import React, { useEffect, useState } from "react";
import Navbar from "../components/big/navbar/navbar";
import { Col, Row, Spinner } from "react-bootstrap";
import axios from 'axios';
import Premium from "../components/small/premium";

const Communities = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "http://localhost:4005/users";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `${authToken}`,
          },
        });

        const data = response.data;

        const loggedUserId = localStorage.getItem('ID');

        const otherUsers = data.filter(user => user._id !== loggedUserId);

        const usersWithFollowStatus = otherUsers.map(user => ({
          ...user,
          followStatus: user.followers.includes(loggedUserId),
        }));

        setUsers(usersWithFollowStatus);
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleFollowToggle = async (userId) => {
    try {
      const authToken = localStorage.getItem('token');

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
        user._id === userId ? { ...user, followStatus: !user.followStatus } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };

  const handleUnfollowToggle = async (userId) => {
    try {
      const authToken = localStorage.getItem('token');

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
        user._id === userId ? { ...user, followStatus: !user.followStatus } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error toggling unfollow:", error);
    }
  };

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
          {loading && (  // Show the spinner when loading is true
            <div className="loader-container-1">
            <div className="loader-overlay" />
            <Spinner className="loader-spinner" animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          )}

          <div className="col text-start h2" style={{ padding: "20px" }}>
            All people
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
                    user.followStatus ? 'following' : 'not-following'
                  }`}
                  onClick={() =>
                    user.followStatus
                      ? handleUnfollowToggle(user._id)
                      : handleFollowToggle(user._id)
                  }
                >
                  {user.followStatus ? 'Following' : 'Follow'}
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

export default Communities;
