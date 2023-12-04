
// import React from 'react';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import HappenParent from '../../components/medium/happenParent';
// import FollowParent from '../../components/medium/followParent';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//     return (
//         <section>

//             <div className="center__happen">
//                 <div className="center__happen__top">
//                     <img src={h} alt="" />
//                     <input type="text" placeholder="what's happening?!" />
//                 </div>
//                 <div className="center__happen__bottom">
//                     <div className="center__happen__bottom-icons">
//                         <span>
//                             <FontAwesomeIcon icon={faImage} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//                         </span>
//                     </div>
//                     <button className="center__happen__bottom-btn">Post</button>
//                 </div>
//             </div>

//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//         </section>
//     );
// }

// export default Home;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <Posts
//           key={post._id}
//           username="@ahmed10_hesham"
//           name="Ahmed Hesham"
//           date="Jun 27"
//           content={post.title}
//           img={post.userProfilePicture}
//         />
//       ))}
//     </section>
//   );
// };

// export default Home;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <>
//           <div className="center__post" key={post._id}>
//         <div className="center__post__header">
//             <div className="center__post__header-left">
//                 <img src={post.userProfilePicture} alt="" />
//                 <span className="center__post__header-left__name">
//                     Ahmed
//                 </span>
//                 <span className="center__post__header-left__user">
//                     @ahmed10 . 27 june
//                 </span>
//             </div>
//             <div className="center__post__header-right">
//                 <i className="fas fa-ellipsis svg"></i>
//             </div>
//         </div>
//         <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//         </div>
//         <div className="center__post__bottom">
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faHeart} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//         </div>
//     </div>
//         </>
//       ))}
//     </section>
//   );
// };

// export default Home;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${postId}`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 Ahmed
//               </span>
//               <span className="center__post__header-left__user">
//                 @ahmed10 . 27 june
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <FontAwesomeIcon
//                 icon={faEllipsisV}
//                 className="ellipsis-icon"
//                 onClick={() => handleDeletePost(post._id)}
//               />
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faHeart} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const Allposts = useSelector((state) => state.posts.posts); 


//   const posts = Allposts.filter((p) => p.userId && p.userId._id !== localStorage.getItem("ID"));



//   const loved = useSelector((state) => state.homeLikes);

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


//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       // const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}/posts`);
//       console.log(localStorage.getItem("ID"));
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);



//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       setReplies(response.data.replies);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     await axios.post('http://localhost:4005/posts', {
//   //       title: newPost,
//   //     });

//   //     setNewPost('');
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };


//   const handlePost = async () => {
//     try {
//       // Get the JWT token from your authentication system (e.g., localStorage)
//       const token = localStorage.getItem('token'); // Replace with your actual token retrieval method

//       // Make the POST request with the JWT token in the Authorization header
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//       // Handle the error, e.g., display an error message to the user
//     }
//   };


//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };




//   // const formatDate = (dateString) => {
//   //   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
//   //   const formattedDate = new Date(dateString).toLocaleString('en-US', options);
//   //   return formattedDate;
//   // };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//         <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 />
//               </span>

//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//             <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const Allposts = useSelector((state) => state.posts.posts);

//   const posts = Allposts.filter((p) => p.userId && p.userId._id !== localStorage.getItem("ID"));

//   const loved = useSelector((state) => state.homeLikes);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       setReplies(response.data.replies);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${postId}`);
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, // Assuming this is the correct endpoint for adding a reply
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };


//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   onClick={() => handleDeletePost(post._id)}
//                 />
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       setReplies(response.data.replies);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${postId}`);
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {randomOrder && randomOrder.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   onClick={() => handleDeletePost(post._id)}
//                 />
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data; 
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {randomOrder && randomOrder.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {/* <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 /> */}
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data; 
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   // const isLoved = (postId) => loved.includes(postId);

//   // const handleLoved = (postId) => {
//   //   if (!isLoved(postId)) {
//   //     dispatch(addToLikes(postId));
//   //   } else {
//   //     dispatch(removeFromLikes(postId));
//   //   }
//   // };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };


//   const handleLike = async (postId) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.post(
//             'http://localhost:4005/posts/toggle-like',
//             { postId },
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             }
//         );
//         fetchAndSetPosts();
//     } catch (error) {
//         console.error('Error', error.message);
//     }
// };



//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {/* {randomOrder && randomOrder.map((post) => ( */}
//       {allPosts && allPosts.map((post) => (

//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {/* <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 /> */}
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//                 <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             {/* Add the like button */}
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                 <FontAwesomeIcon
//                     style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                     icon={faHeart}
//                 />
//                 {post.likes.length>0&&post.likes.length}
//             </span>

//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;

























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data; 
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     await axios.post('http://localhost:4005/posts', {
//   //       title: newPost,
//   //     }, {
//   //       headers: {
//   //         Authorization: token,
//   //       },
//   //     });

//   //     setNewPost('');
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   // const isLoved = (postId) => loved.includes(postId);

//   // const handleLoved = (postId) => {
//   //   if (!isLoved(postId)) {
//   //     dispatch(addToLikes(postId));
//   //   } else {
//   //     dispatch(removeFromLikes(postId));
//   //   }
//   // };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };


//   const handleLike = async (postId) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.post(
//             'http://localhost:4005/posts/toggle-like',
//             { postId },
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             }
//         );
//         fetchAndSetPosts();
//     } catch (error) {
//         console.error('Error', error.message);
//     }
// };



// const [imageFile, setImageFile] = useState(null);

// const handleImageSelect = (e) => {
//   const file = e.target.files[0];
//   setImageFile(file);
// };

// const handlePost = async () => {
//   try {
//     const token = localStorage.getItem('token');
//     const formData = new FormData();
//     formData.append('title', newPost);
//     formData.append('image', imageFile);

//     await axios.post('http://localhost:4005/posts', formData, {
//       headers: {
//         Authorization: token,
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     setNewPost('');
//     setImageFile(null);
//     fetchAndSetPosts();
//   } catch (error) {
//     console.error('Error', error.message);
//   }
// };



//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />

//         </div>
//         {imageFile && (
//           <img
//             src={URL.createObjectURL(imageFile)}
//             alt="Selected"
//             style={{ maxWidth: '100%', marginTop: '10px' }}
//           />
//         )}

//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//           <span>
//             <label htmlFor="imageInput">
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </label>
//             <input
//               id="imageInput"
//               type="file"
//               accept="image/*"
//               style={{ display: 'none' }}
//               onChange={handleImageSelect}
//             />
//           </span>

//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {/* {randomOrder && randomOrder.map((post) => ( */}
//       {allPosts && allPosts.map((post) => (

//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {/* <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 /> */}
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//                 <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             {/* Add the like button */}
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                 <FontAwesomeIcon
//                     style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                     icon={faHeart}
//                 />
//                 {post.likes.length>0&&post.likes.length}
//             </span>

//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data;
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handleImageSelect = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     const formData = new FormData();
//   //     formData.append('title', newPost);
//   //     formData.append('image', imageFile);

//   //     await axios.post('http://localhost:4005/posts', formData, {
//   //       headers: {
//   //         Authorization: token,
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     setNewPost('');
//   //     setImageFile(null);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//     const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');

//   //     const formData = new FormData();
//   //     formData.append('title', newPost);
//   //     formData.append('image', imageFile);

//   //     await axios.post('http://localhost:4005/posts', formData, {
//   //       headers: {
//   //         Authorization: token,
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     setNewPost('');
//   //     setImageFile(null);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };





//   const handleCommentClick = (postId) => {
//         setSelectedPost(postId);
//         fetchReplies(postId);
//       };


//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`,
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-like',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleRepost = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-repost',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         {imageFile && (
//           <img
//             src={URL.createObjectURL(imageFile)}
//             alt="Selected"
//             style={{ maxWidth: '100%', marginTop: '10px' }}
//           />
//         )}
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <label htmlFor="imageInput">
//                 <FontAwesomeIcon icon={faImage} className="happenIcon" />
//               </label>
//               <input
//                 id="imageInput"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageSelect}
//               />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {allPosts && allPosts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//               <FontAwesomeIcon
//                 icon={faRetweet}
//                 style={{
//                   color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
//                     ? 'green'
//                     : 'gray',
//                 }}
//               />
//               {post.reposts.length > 0 && post.reposts.length}
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//               <FontAwesomeIcon
//                 style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//               {post.likes.length > 0 && post.likes.length}
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faBookmark, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data;
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handleImageSelect = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();

//       // Show Toastify notification for successful post
//       toast.success('Post successfully created!');
//     } catch (error) {
//       console.error('Error', error.message);

//       // Show Toastify notification for error
//       toast.error('Error creating post. Please try again.');
//     }
//   };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`,
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-like',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleRepost = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-repost',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };



//   const handleSave = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-saved',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };














//   return (
//     <section>
//       <ToastContainer />
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         {imageFile && (
//           <img
//             src={URL.createObjectURL(imageFile)}
//             alt="Selected"
//             style={{ maxWidth: '100%', marginTop: '10px' }}
//           />
//         )}
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <label htmlFor="imageInput">
//                 <FontAwesomeIcon icon={faImage} className="happenIcon" />
//               </label>
//               <input
//                 id="imageInput"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageSelect}
//               />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {allPosts && allPosts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//               <FontAwesomeIcon
//                 icon={faRetweet}
//                 style={{
//                   color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
//                     ? 'green'
//                     : 'gray',
//                 }}
//               />
//               {post.reposts.length > 0 && post.reposts.length}
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//               <FontAwesomeIcon
//                 style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//               {post.likes.length > 0 && post.likes.length}
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
//               <FontAwesomeIcon icon={faBookmark}
//                 style={{
//                   color: post.saved.some(savedPost => savedPost.userId === localStorage.getItem('ID'))
//                     ? 'yellow'
//                     : 'gray',
//                 }}
//               />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;
















// import React from 'react';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { Col, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import HappenParent from '../../components/medium/happenParent';
// import FollowParent from '../../components/medium/followParent';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//     return (
//         <section>

//             <div className="center__happen">
//                 <div className="center__happen__top">
//                     <img src={h} alt="" />
//                     <input type="text" placeholder="what's happening?!" />
//                 </div>
//                 <div className="center__happen__bottom">
//                     <div className="center__happen__bottom-icons">
//                         <span>
//                             <FontAwesomeIcon icon={faImage} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//                         </span>
//                         <span>
//                             <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//                         </span>
//                     </div>
//                     <button className="center__happen__bottom-btn">Post</button>
//                 </div>
//             </div>

//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//             <Posts name="Ahmed Hesham" username="@ahmed10_hesham" date="Jun 27" content="You can do it!" img={h}/>
//         </section>
//     );
// }

// export default Home;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <Posts
//           key={post._id}
//           username="@ahmed10_hesham"
//           name="Ahmed Hesham"
//           date="Jun 27"
//           content={post.title}
//           img={post.userProfilePicture}
//         />
//       ))}
//     </section>
//   );
// };

// export default Home;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <>
//           <div className="center__post" key={post._id}>
//         <div className="center__post__header">
//             <div className="center__post__header-left">
//                 <img src={post.userProfilePicture} alt="" />
//                 <span className="center__post__header-left__name">
//                     Ahmed
//                 </span>
//                 <span className="center__post__header-left__user">
//                     @ahmed10 . 27 june
//                 </span>
//             </div>
//             <div className="center__post__header-right">
//                 <i className="fas fa-ellipsis svg"></i>
//             </div>
//         </div>
//         <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//         </div>
//         <div className="center__post__bottom">
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faHeart} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//         </div>
//     </div>
//         </>
//       ))}
//     </section>
//   );
// };

// export default Home;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/big/navbar/navbar';
// import h from '../../assets/h.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [posts, setPosts] = useState([]);

//   const navigate = useNavigate();

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4005/posts');
//       console.log(response.data);
//       setPosts(response.data.reverse());
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handlePost = async () => {
//     try {
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       });

//       setNewPost('');
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${postId}`);
//       fetchPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={h} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 Ahmed
//               </span>
//               <span className="center__post__header-left__user">
//                 @ahmed10 . 27 june
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <FontAwesomeIcon
//                 icon={faEllipsisV}
//                 className="ellipsis-icon"
//                 onClick={() => handleDeletePost(post._id)}
//               />
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faHeart} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Premium from '../../components/small/premium';
// import Posts from '../../components/small/posts';
// import { useNavigate } from 'react-router-dom';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const Allposts = useSelector((state) => state.posts.posts); 


//   const posts = Allposts.filter((p) => p.userId && p.userId._id !== localStorage.getItem("ID"));



//   const loved = useSelector((state) => state.homeLikes);

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


//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       // const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}/posts`);
//       console.log(localStorage.getItem("ID"));
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);



//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       setReplies(response.data.replies);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     await axios.post('http://localhost:4005/posts', {
//   //       title: newPost,
//   //     });

//   //     setNewPost('');
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };


//   const handlePost = async () => {
//     try {
//       // Get the JWT token from your authentication system (e.g., localStorage)
//       const token = localStorage.getItem('token'); // Replace with your actual token retrieval method

//       // Make the POST request with the JWT token in the Authorization header
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//       // Handle the error, e.g., display an error message to the user
//     }
//   };


//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };




//   // const formatDate = (dateString) => {
//   //   const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
//   //   const formattedDate = new Date(dateString).toLocaleString('en-US', options);
//   //   return formattedDate;
//   // };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//         <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 />
//               </span>

//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//             <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const Allposts = useSelector((state) => state.posts.posts);

//   const posts = Allposts.filter((p) => p.userId && p.userId._id !== localStorage.getItem("ID"));

//   const loved = useSelector((state) => state.homeLikes);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       setReplies(response.data.replies);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${postId}`);
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, // Assuming this is the correct endpoint for adding a reply
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };


//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   onClick={() => handleDeletePost(post._id)}
//                 />
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       setReplies(response.data.replies);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${postId}`);
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {randomOrder && randomOrder.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   onClick={() => handleDeletePost(post._id)}
//                 />
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data; 
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const isLoved = (postId) => loved.includes(postId);

//   const handleLoved = (postId) => {
//     if (!isLoved(postId)) {
//       dispatch(addToLikes(postId));
//     } else {
//       dispatch(removeFromLikes(postId));
//     }
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {randomOrder && randomOrder.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {/* <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 /> */}
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon
//                 onClick={() => handleLoved(post._id)}
//                 style={{ color: isLoved(post._id) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data; 
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   // const isLoved = (postId) => loved.includes(postId);

//   // const handleLoved = (postId) => {
//   //   if (!isLoved(postId)) {
//   //     dispatch(addToLikes(postId));
//   //   } else {
//   //     dispatch(removeFromLikes(postId));
//   //   }
//   // };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };


//   const handleLike = async (postId) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.post(
//             'http://localhost:4005/posts/toggle-like',
//             { postId },
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             }
//         );
//         fetchAndSetPosts();
//     } catch (error) {
//         console.error('Error', error.message);
//     }
// };



//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {/* {randomOrder && randomOrder.map((post) => ( */}
//       {allPosts && allPosts.map((post) => (

//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {/* <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 /> */}
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//                 <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             {/* Add the like button */}
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                 <FontAwesomeIcon
//                     style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                     icon={faHeart}
//                 />
//                 {post.likes.length>0&&post.likes.length}
//             </span>

//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;

























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data; 
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     await axios.post('http://localhost:4005/posts', {
//   //       title: newPost,
//   //     }, {
//   //       headers: {
//   //         Authorization: token,
//   //       },
//   //     });

//   //     setNewPost('');
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   // const handleDeletePost = async (postId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${postId}`);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   // const isLoved = (postId) => loved.includes(postId);

//   // const handleLoved = (postId) => {
//   //   if (!isLoved(postId)) {
//   //     dispatch(addToLikes(postId));
//   //   } else {
//   //     dispatch(removeFromLikes(postId));
//   //   }
//   // };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`, 
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };


//   const handleLike = async (postId) => {
//     try {
//         const token = localStorage.getItem('token');
//         await axios.post(
//             'http://localhost:4005/posts/toggle-like',
//             { postId },
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             }
//         );
//         fetchAndSetPosts();
//     } catch (error) {
//         console.error('Error', error.message);
//     }
// };



// const [imageFile, setImageFile] = useState(null);

// const handleImageSelect = (e) => {
//   const file = e.target.files[0];
//   setImageFile(file);
// };

// const handlePost = async () => {
//   try {
//     const token = localStorage.getItem('token');
//     const formData = new FormData();
//     formData.append('title', newPost);
//     formData.append('image', imageFile);

//     await axios.post('http://localhost:4005/posts', formData, {
//       headers: {
//         Authorization: token,
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     setNewPost('');
//     setImageFile(null);
//     fetchAndSetPosts();
//   } catch (error) {
//     console.error('Error', error.message);
//   }
// };



//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />

//         </div>
//         {imageFile && (
//           <img
//             src={URL.createObjectURL(imageFile)}
//             alt="Selected"
//             style={{ maxWidth: '100%', marginTop: '10px' }}
//           />
//         )}

//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//           <span>
//             <label htmlFor="imageInput">
//               <FontAwesomeIcon icon={faImage} className="happenIcon" />
//             </label>
//             <input
//               id="imageInput"
//               type="file"
//               accept="image/*"
//               style={{ display: 'none' }}
//               onChange={handleImageSelect}
//             />
//           </span>

//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {/* {randomOrder && randomOrder.map((post) => ( */}
//       {allPosts && allPosts.map((post) => (

//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {/* <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   // onClick={() => handleDeletePost(post._id)}
//                 /> */}
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//                 <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span">
//                 <FontAwesomeIcon icon={faRetweet} />
//             </span>
//             {/* Add the like button */}
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                 <FontAwesomeIcon
//                     style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                     icon={faHeart}
//                 />
//                 {post.likes.length>0&&post.likes.length}
//             </span>

//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faEllipsisV, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);

//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data;
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handleImageSelect = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     const formData = new FormData();
//   //     formData.append('title', newPost);
//   //     formData.append('image', imageFile);

//   //     await axios.post('http://localhost:4005/posts', formData, {
//   //       headers: {
//   //         Authorization: token,
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     setNewPost('');
//   //     setImageFile(null);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };

//     const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   // const handlePost = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');

//   //     const formData = new FormData();
//   //     formData.append('title', newPost);
//   //     formData.append('image', imageFile);

//   //     await axios.post('http://localhost:4005/posts', formData, {
//   //       headers: {
//   //         Authorization: token,
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     setNewPost('');
//   //     setImageFile(null);
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };





//   const handleCommentClick = (postId) => {
//         setSelectedPost(postId);
//         fetchReplies(postId);
//       };


//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/`,
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-like',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleRepost = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-repost',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   return (
//     <section>
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         {imageFile && (
//           <img
//             src={URL.createObjectURL(imageFile)}
//             alt="Selected"
//             style={{ maxWidth: '100%', marginTop: '10px' }}
//           />
//         )}
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <label htmlFor="imageInput">
//                 <FontAwesomeIcon icon={faImage} className="happenIcon" />
//               </label>
//               <input
//                 id="imageInput"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageSelect}
//               />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {allPosts && allPosts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userProfilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 <i className="fas fa-ellipsis svg"></i>
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//               <FontAwesomeIcon
//                 icon={faRetweet}
//                 style={{
//                   color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
//                     ? 'green'
//                     : 'gray',
//                 }}
//               />
//               {post.reposts.length > 0 && post.reposts.length}
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//               <FontAwesomeIcon
//                 style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//               {post.likes.length > 0 && post.likes.length}
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Add a reply..."
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>
//                   </div>
//                   <span>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Home;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faBookmark, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Swal from 'sweetalert2';  // Import SweetAlert
// import Spinner from 'react-bootstrap/Spinner';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const [userData, setUserData] = useState(null);


//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   const [randomOrder, setRandomOrder] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);


//   useEffect(() => {
//     const order = [...allPosts].sort(() => Math.random() - 0.5);
//     setRandomOrder(order);
//   }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data;
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }finally {
//       // Set loading to false regardless of success or failure
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     }
//   };

//   const handleImageSelect = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//   };

//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts/addPost', {
//         title: newPost,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();

//       // Show Toastify notification for successful post
//       toast.success('Post successfully created!');
//     } catch (error) {
//       console.error('Error', error.message);

//       // Show Toastify notification for error
//       toast.error('Error creating post. Please try again.');
//     }
//   };

//   const handleCommentClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   // const handleReply = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     await axios.put(
//   //       `http://localhost:4005/posts/`,
//   //       { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//   //       {
//   //         headers: {
//   //           Authorization: token,
//   //         },
//   //       }
//   //     );
//   //     setReplyText('');
//   //     fetchReplies(selectedPost);
//   //   } catch (error) {
//   //     console.error('Error replying to post:', error.message);
//   //   }
//   // };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/replies`,
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);

//       // Show a success toast
//       toast.success('Reply added successfully!');
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//       // Show an error toast
//       toast.error('Error adding reply. Please try again.');
//     }
//   };


//   const handleLike = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-like',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleRepost = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-repost',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };



//   // const handleSave = async (postId) => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     await axios.post(
//   //       'http://localhost:4005/posts/toggle-saved',
//   //       { postId },
//   //       {
//   //         headers: {
//   //           Authorization: token,
//   //         },
//   //       }
//   //     );
//   //     fetchAndSetPosts();
//   //   } catch (error) {
//   //     console.error('Error', error.message);
//   //   }
//   // };




//   const handleSave = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-saved',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );

//       fetchAndSetPosts();

//       // Show Toastify message for saved post
//       toast.success('Post saved!');

//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };



//   const handleDeleteSpecificPost = async (postId) => {
//     // Show SweetAlert confirmation
//     const isConfirmed = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this post!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, keep it',
//       reverseButtons: true,
//     });

//     if (isConfirmed.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:4005/posts/${postId}`);
//         fetchAndSetPosts();
//         Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
//       } catch (error) {
//         console.error('Error', error.message);
//       }
//     }
//   };










//   return (
//     <>
//     {isLoading ? (
//         // Show spinner while data is being loaded
//         <div className="loader-container" >
//           <Spinner animation="border" role="status" variant="primary">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//         </div>

//       ) : (
//         <section>
//       <ToastContainer />
//       <div className="center__happen">
//         <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//           <input
//             type="text"
//             placeholder="What's happening?!"
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//           />
//         </div>
//         {imageFile && (
//           <img
//             src={URL.createObjectURL(imageFile)}
//             alt="Selected"
//             style={{ maxWidth: '100%', marginTop: '10px' }}
//           />
//         )}
//         <div className="center__happen__bottom">
//           <div className="center__happen__bottom-icons">
//             <span>
//               <label htmlFor="imageInput">
//                 <FontAwesomeIcon icon={faImage} className="happenIcon" />
//               </label>
//               <input
//                 id="imageInput"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageSelect}
//               />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span>
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {allPosts && allPosts.map((post) => (
//         <div className="center__post" key={post._id}>
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={post.userId.profilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {post.userId && post.userId.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {post.userId && post.userId._id === localStorage.getItem('ID') && (
//                   <span className="center__post__bottom-span">
//                     <i onClick={() => handleDeleteSpecificPost(post._id)} className="fas fa-ellipsis svg" ></i>
//                   </span>
//                 )}
//               </span>
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{post.title}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//               <FontAwesomeIcon
//                 icon={faRetweet}
//                 style={{
//                   color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
//                     ? 'green'
//                     : 'gray',
//                 }}
//               />
//               {post.reposts.length > 0 && post.reposts.length}
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//               <FontAwesomeIcon
//                 style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? 'red' : 'gray' }}
//                 icon={faHeart}
//               />
//               {post.likes.length > 0 && post.likes.length}
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span>
//             <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
//               <FontAwesomeIcon icon={faBookmark}
//                 style={{
//                   color: post.saved.some(savedPost => savedPost.userId === localStorage.getItem('ID'))
//                     ? 'yellow'
//                     : 'gray',
//                 }}
//               />
//             </span>
//           </div>
//           {selectedPost === post._id && (
//             <div>
//               <div className='reply-input-container'>
//                 <input
//                   className='reply-input'
//                   type="text"
//                   placeholder="Post your reply"
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button className='reply-button' onClick={handleReply}>Reply</button>
//               </div>
//               {Array.isArray(replies) && replies.map((reply) => (
//                 <div className='reply-container' key={reply._id}>
//                   <div className="center__post__header-left">
//                     <img src={reply.postedBy.profilePicture} alt="" />
//                     <span className="center__post__header-left__name">
//                       {reply.postedBy.name}
//                     </span>
//                     <span className="center__post__header-left__user">
//                       @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                     </span>

//                     {/* <span className="center__post__bottom-span-reply">
//                       <span>
//                       <i onClick={() => handleDeleteSpecificReply(post._id)} className="fas fa-ellipsis svg" ></i>

//                       </span>
//                     </span> */}
//                   </div>
//                   <span className='reply-text'>{reply.text}</span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </section>
//       )}

//     </>
//   );
// };

// export default Home;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faBookmark, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { useNavigate } from 'react-router-dom';
// import { formatDistanceToNow } from 'date-fns';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Swal from 'sweetalert2';
// import Spinner from 'react-bootstrap/Spinner';
// import { Cloudinary } from "@cloudinary/url-gen";
// import CloudinaryUploadWidgetForPost from '../Profile/CloudinaryUploadWidgetForPost';

// const Home = () => {
//   const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoadingReplies, setIsLoadingReplies] = useState(false);

//   const [following, setNonFollowings] = useState([]);
//   const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/following`;


//   const [postPublicId, setPostPublicId] = useState("");
//   const [cloudName] = useState("dvkh03fhr");
//   const [uploadPreset] = useState("ml_default");

//   const [uwConfigPost] = useState({
//     cloudName,
//     uploadPreset,
//     // cropping: true, //add a cropping step
//     // showAdvancedOptions: true,  //add advanced options (public_id and tag)
//     // sources: [ "local", "url"], // restrict the upload sources to URL and local files
//     // multiple: true,  //restrict upload to a single file
//     // folder: "user_images", //upload files to the specified folder
//     // tags: ["users", "profile"], //add the given tags to the uploaded files
//     // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
//     // clientAllowedFormats: ["images"], //restrict uploading to image files only
//     // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
//     // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
//     // theme: "purple", //change to a purple theme
//   });
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName
//     }
//   });


//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);

//   // console.log(allPosts);
//   // useEffect(() => {
//   //   const order = [...allPosts].sort(() => Math.random() - 0.5);
//   //   setRandomOrder(order);
//   // }, [allPosts]);

//   const loved = useSelector((state) => state.homeLikes);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${userId}`);
//       return response.data.data;
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//       return null;
//     }
//   };

//   const fetchReplyUserDetails = async (replies) => {
//     const userDetailsPromises = replies.map(async (reply) => {
//       const userDetails = await fetchUserDetails(reply.postedBy);
//       return {
//         ...reply,
//         postedBy: userDetails,
//       };
//     });

//     return Promise.all(userDetailsPromises);
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData = response.data.data;
//       setUserData(userData);
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };

//   getUser();

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//       const latestPost = localStorage.getItem('imagesPost') || '';
//       localStorage.removeItem('images');
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchReplies = async (postId) => {
//     setIsLoadingReplies(true);
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
//     } finally {
//       setIsLoadingReplies(false);
//     }
//   };

//   // const handleImageSelect = (e) => {
//   //   const file = e.target.files[0];
//   //   setImageFile(file);
//   // };



//   const handlePost = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('http://localhost:4005/posts/addPost', {
//         title: newPost,
//         image: cld.image(postPublicId).toURL(),
//         imagePublicId: postPublicId,
//       }, {
//         headers: {
//           Authorization: token,
//         },
//       });

//       setNewPost('');
//       fetchAndSetPosts();

//       toast.success('Post successfully created!');
//     } catch (error) {
//       console.error('Error', error.message);
//       toast.error('Error creating post. Please try again.');
//     }
//   };

//   const handleCommentClick = async (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/replies`,
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setReplyText('');
//       fetchReplies(selectedPost);
//       toast.success('Reply added successfully!');
//     } catch (error) {
//       console.error('Error replying to post:', error.message);
//       toast.error('Error adding reply. Please try again.');
//     }
//   };

//   const handleLike = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-like',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleRepost = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-repost',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       fetchAndSetPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleSave = async (postId) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post(
//         'http://localhost:4005/posts/toggle-saved',
//         { postId },
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );

//       fetchAndSetPosts();
//       toast.success('Post saved!');
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeleteSpecificPost = async (postId) => {
//     const isConfirmed = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this post!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, keep it',
//       reverseButtons: true,
//     });

//     if (isConfirmed.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:4005/posts/${postId}`);
//         fetchAndSetPosts();
//         Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
//       } catch (error) {
//         console.error('Error', error.message);
//       }
//     }
//   };

//   return (
//     <>
//       {isLoading ? (
//         <div className="loader-container">
//           <Spinner animation="border" role="status" variant="primary">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       ) : (
//         <section>
//           <ToastContainer />
//           <div className="center__happen">
//             <div className="center__happen__top">
//               <img src={userData && userData.profilePicture} alt="" />
//               <input
//                 type="text"
//                 placeholder="What's happening?!"
//                 value={newPost}
//                 onChange={(e) => setNewPost(e.target.value)}
//               />
//             </div>
//             {imageFile && (
//               <img
//                 src={URL.createObjectURL(imageFile)}
//                 alt="Selected"
//                 style={{ maxWidth: '100%', marginTop: '10px' }}
//               />
//             )}
//             <div className="center__happen__bottom">
//               <div className="center__happen__bottom-icons">
//                 <span>
//                   <label htmlFor="imageInput">
//                     {/* <FontAwesomeIcon icon={faImage} className="happenIcon" /> */}
//                     <CloudinaryUploadWidgetForPost uwConfigPost={uwConfigPost} setPostPublicId={setPostPublicId} />
//                   </label>
//                   {/* <input
//                 id="imageInput"
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageSelect}
//               /> */}
//                 </span>
//                 {/* <span>
//               <FontAwesomeIcon icon={faSquare} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faSmile} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faCalendar} className="happenIcon" />
//             </span>
//             <span>
//               <FontAwesomeIcon icon={faLocationDot} className="happenIcon" />
//             </span> */}
//               </div>
//               <button className="center__happen__bottom-btn" onClick={handlePost}>
//                 Post
//               </button>
//             </div>
//           </div>

//           {allPosts && allPosts.map((post) => (
//             <div className="center__post" key={post._id}>
//               <div className="center__post__header">
//                 <div className="center__post__header-left">
//                   {post.userId && post.userId.profilePicture && (
//                     <img src={post.userId.profilePicture} alt="" />
//                   )}
//                   <span className="center__post__header-left__name">
//                     {post.userId && post.userId.name}
//                   </span>
//                   <span className="center__post__header-left__user">
//                     @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//                   </span>
//                 </div>
//                 <div className="center__post__header-right">
//                   <span>
//                     {post.userId && post.userId._id === localStorage.getItem('ID') && (
//                       <span className="center__post__bottom-span">
//                         <i onClick={() => handleDeleteSpecificPost(post._id)} className="fas fa-ellipsis svg" ></i>
//                       </span>
//                     )}
//                   </span>
//                 </div>
//               </div>
//               <div className="center__post__body">
//                 <span className="center__post__body__content">{post.title}</span>
//                 <div>
//                   {post.image && (
//                     <img
//                       src={post.image}
//                       alt="Post Image"
//                       style={{ Width: 'auto', height: 'auto', marginTop: '10px', paddingTop: '0px' }}
//                       className='container-fluid'
//                     />
//                   )}
//                 </div>
//               </div>

//               <div className="center__post__bottom">
//                 {/* <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//                   <FontAwesomeIcon icon={faComment} />
//                 </span> */}
//                 <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
//                   <FontAwesomeIcon icon={faComment} style={{ color: post.replies.length > 0 ? '#1C96E8' : 'gray' }} />
//                   {post.replies.length > 0 && (
//                     <span style={{ color: '#1C96E8', marginLeft: '4px' }}>
//                       {post.replies.length}
//                     </span>
//                   )}
//                 </span>

//                 {/* <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//                   <FontAwesomeIcon
//                     icon={faRetweet}
//                     style={{
//                       color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
//                         ? 'green'
//                         : 'gray',
//                     }}
//                   />
//                   {post.reposts.length > 0 && post.reposts.length}
//                 </span> */}

//               <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//                 <FontAwesomeIcon
//                   icon={faRetweet}
//                   style={{
//                     color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID')) ? '#00BA7C' : 'gray',
//                   }}
//                 />
//                 {post.reposts.length > 0 && (
//                   <span style={{ color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID')) ? '#00BA7C' : 'inherit', marginLeft: '4px' }}>
//                     {post.reposts.length}
//                   </span>
//                 )}
//               </span>
//                 {/* <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                   <FontAwesomeIcon
//                     style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? '#F91880' : 'gray' }}
//                     icon={faHeart}
//                   />
//                   {post.likes.length > 0 && post.likes.length}
//                 </span> */}
//                 <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                 <FontAwesomeIcon
//                   style={{ color: post.likes.some(like => like.userId === localStorage.getItem('ID')) ? '#F91880' : 'gray' }}
//                   icon={faHeart}
//                 />
//                 {post.likes.length > 0 && (
//                   <span style={{ color: post.likes.some(like => like.userId === localStorage.getItem('ID')) ? '#F91880' : 'inherit', marginLeft: '4px' }}>
//                     {post.likes.length}
//                   </span>
//                 )}
//               </span>
//                 {/* <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span> */}
//                 {/* <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
//                   <FontAwesomeIcon icon={faBookmark}
//                     style={{
//                       color: post.saved.some(savedPost => savedPost.userId === localStorage.getItem('ID'))
//                         ? '#1D9BF0'
//                         : 'gray',
//                     }}
//                   />
//                 </span> */}
//                 <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
//                 <FontAwesomeIcon
//                   icon={faBookmark}
//                   style={{
//                     color: post.saved.some(save => save.userId === localStorage.getItem('ID')) ? '#FFD700' : 'gray',
//                   }}
//                 />
//               </span>
//               </div>
//               {selectedPost === post._id && (
//                 <div>
//                   <div className='reply-input-container'>
//                     <input
//                       className='reply-input'
//                       type="text"
//                       placeholder="Post your reply"
//                       value={replyText}
//                       onChange={(e) => setReplyText(e.target.value)}
//                     />
//                     <button className='reply-button' onClick={handleReply}>Reply</button>
//                   </div>
//                   {Array.isArray(replies) && replies.map((reply) => (
//                     <div className='reply-container' key={reply._id}>
//                       <div className="center__post__header-left">
//                         <img src={reply.postedBy.profilePicture} alt="" />
//                         <span className="center__post__header-left__name">
//                           {reply.postedBy.name}
//                         </span>
//                         <span className="center__post__header-left__user">
//                           @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                         </span>

//                         {/* <span className="center__post__bottom-span-reply">
//                       <span>
//                       <i onClick={() => handleDeleteSpecificReply(post._id)} className="fas fa-ellipsis svg" ></i>

//                       </span>
//                     </span> */}
//                       </div>
//                       <span className='reply-text'>{reply.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* {isLoadingReplies && (
//             <div className="loader-container">
//               <Spinner animation="border" role="status" variant="primary">
//                 <span className="visually-hidden">Loading Replies...</span>
//               </Spinner>
//             </div>
//           )} */}

//         </section>
//       )}
//     </>
//   );
// };

// export default Home;










import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Spinner} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faRetweet, faComment, faHeart, faBookmark,faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import CloudinaryUploadWidgetForPost from '../Profile/CloudinaryUploadWidgetForPost';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const [newPost, setNewPost] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [postPublicId, setPostPublicId] = useState("");
  const [cloudName] = useState("dvkh03fhr");
  const [uploadPreset] = useState("ml_default");

  const uwConfigPost = useMemo(
    () => ({
      cloudName,
      uploadPreset,
    }),
    [cloudName, uploadPreset]
  );
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.posts);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${userId}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };

  const fetchReplyUserDetails = async (replies) => {
    const userDetailsPromises = replies.map(async (reply) => {
      const userDetails = await fetchUserDetails(reply.postedBy);
      return {
        ...reply,
        postedBy: userDetails,
      };
    });

    return Promise.all(userDetailsPromises);
  };

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
      var userData = response.data.data;
      setUserData(userData);
    } catch (error) {
      console.error('Error get user:', error);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const fetchAndSetPosts = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4005/posts`);
      dispatch(setPostsAction(response.data.reverse()));
      const latestPost = localStorage.getItem('imagesPost') || '';
      localStorage.removeItem('images');
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAndSetPosts();
  }, [fetchAndSetPosts]);

  const fetchReplies = useCallback(async (postId) => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${postId}`);
      const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
      setReplies(repliesWithUserDetails);
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  }, []);

  const handlePost = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:4005/posts/addPost', {
        title: newPost,
        image: cld.image(postPublicId).toURL(),
        imagePublicId: postPublicId,
      }, {
        headers: {
          Authorization: token,
        },
      });

      setNewPost('');
      fetchAndSetPosts();

      toast.success('Post successfully created!');
    } catch (error) {
      console.error('Error', error.message);
      toast.error('Error creating post. Please try again.');
    }
  };

  const handleCommentClick = async (postId) => {
    setSelectedPost(postId);
    fetchReplies(postId);
  };

  const handleReply = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:4005/posts/replies`,
        { text: replyText, postId: selectedPost, userId: localStorage.getItem("ID") },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setReplyText('');
      fetchReplies(selectedPost);
      toast.success('Reply added successfully!');
    } catch (error) {
      console.error('Error replying to post:', error.message);
      toast.error('Error adding reply. Please try again.');
    }
  };

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:4005/posts/toggle-like',
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      fetchAndSetPosts();
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  // const handleRepost = async (postId) => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     await axios.post(
  //       'http://localhost:4005/posts/toggle-repost',
  //       { postId },
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     );
  //     fetchAndSetPosts();
  //   } catch (error) {
  //     console.error('Error', error.message);
  //   }
  // };
  const {t}=useTranslation()

  const handleSave = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:4005/posts/toggle-saved',
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      fetchAndSetPosts();
      toast.success('Post saved!');
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  const handleDeleteSpecificPost = async (postId) => {
    const isConfirmed = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this post!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      reverseButtons: true,
    });

    if (isConfirmed.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4005/posts/${postId}`);
        fetchAndSetPosts();
        Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
      } catch (error) {
        console.error('Error', error.message);
      }
    }
  };

  const [showToTopButton, setShowToTopButton] = useState(false);

  const handleScroll = () => {
    // Set showToTopButton to true if the user has scrolled down 300 pixels or more, otherwise set it to false.
    setShowToTopButton(window.scrollY > 300);
  };

  const handleToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container-1">
        <div className="loader-overlay" />
        <Spinner className="loader-spinner" animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      ) : (
        <section>
          <ToastContainer />
          <div className="center__happen">
            <div className="center__happen__top">
              <img src={userData && userData.profilePicture} alt="" />
              <input
                type="text"
                placeholder={t("home.part11")}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </div>
            <div className="center__happen__bottom">
              <div className="center__happen__bottom-icons">
                <span>
                  <label htmlFor="imageInput">
                    <CloudinaryUploadWidgetForPost uwConfigPost={uwConfigPost} setPostPublicId={setPostPublicId} />
                  </label>
                </span>
              </div>
              <button className="center__happen__bottom-btn" onClick={handlePost}>
                {t("side.part8")}
              </button>
            </div>
          </div>

          {allPosts && allPosts.map((post) => (
            <div className="center__post" key={post._id}>
              <div className="center__post__header">
                <div className="center__post__header-left">
                  {post.userId && post.userId.profilePicture && (
                    <img src={post.userId.profilePicture} alt="" />
                  )}
                  <span className="center__post__header-left__name">
                    {post.userId && post.userId.name}
                  </span>
                  <span className="center__post__header-left__user">
                    @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                  </span>
                </div>
                <div className="center__post__header-right">
                  <span>
                    {post.userId && post.userId._id === localStorage.getItem('ID') && (
                      <span className="center__post__bottom-span">
                        <i onClick={() => handleDeleteSpecificPost(post._id)} className="fas fa-ellipsis svg" ></i>
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div className="center__post__body">
                <span className="center__post__body__content">{post.title}</span>
                <div>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post Image"
                      style={{ width: '100%', height: 'auto', marginTop: '10px', paddingTop: '0px' }}
                    />
                  )}
                </div>
              </div>

              <div className="center__post__bottom">
                <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
                  <FontAwesomeIcon icon={faComment} style={{ color: post.replies.length > 0 ? '#1C96E8' : 'gray' }} />
                  {post.replies.length > 0 && (
                    <span style={{ color: '#1C96E8', marginLeft: '4px' }}>
                      {post.replies.length}
                    </span>
                  )}
                </span>

                {/* <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
                  <FontAwesomeIcon
                    icon={faRetweet}
                    style={{
                      color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID'))
                        ? '#00BA7C'
                        : 'gray',
                    }}
                  />
                  {post.reposts.length > 0 && (
                    <span style={{ color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID')) ? '#00BA7C' : 'inherit', marginLeft: '4px' }}>
                      {post.reposts.length}
                    </span>
                  )}
                </span> */}

                <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
                  <FontAwesomeIcon
                    style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? '#F91880' : 'gray' }}
                    icon={faHeart}
                  />
                  {post.likes.length > 0 && (
                    <span style={{ color: post.likes.some(like => like.userId === localStorage.getItem('ID')) ? '#F91880' : 'inherit', marginLeft: '4px' }}>
                      {post.likes.length}
                    </span>
                  )}
                </span>

                <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    style={{
                      color: post.saved.some(save => save.userId === localStorage.getItem('ID')) ? '#FFD700' : 'gray',
                    }}
                  />
                </span>
              </div>
              {selectedPost === post._id && (
                <div>
                  <div className='reply-input-container'>
                    <input
                      className='reply-input'
                      type="text"
                      placeholder="Post your reply"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <button className='reply-button' onClick={handleReply}>{t("home.part10")}</button>
                  </div>
                  {Array.isArray(replies) && replies.map((reply) => (
                    <div className='reply-container' key={reply._id}>
                      <div className="center__post__header-left">
                        <img src={reply.postedBy.profilePicture} alt="" />
                        <span className="center__post__header-left__name">
                          {reply.postedBy.name}
                        </span>
                        <span className="center__post__header-left__user">
                          @{reply.postedBy.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
                        </span>
                      </div>
                      <span className='reply-text'>{reply.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

      {showToTopButton && (
        <button className="to-top-button" onClick={handleToTopClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}

        </section>
      )}
    </>
  );
};

export default Home;
