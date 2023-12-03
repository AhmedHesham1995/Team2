// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp, faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { formatDistanceToNow } from 'date-fns';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Swal from 'sweetalert2';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import Spinner from 'react-bootstrap/Spinner';

// const ProfileReposts = () => {
//   const [repostedPosts, setRepostedPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [userData, setUserData] = useState(null);

//   const Allposts = useSelector((state) => state.posts.posts);
//   console.log(Allposts);
//   const dispatch = useDispatch();
//   const posts = Allposts.filter((p) => p.userId && p.userId._id == localStorage.getItem('ID'));

//   const [isLoading, setIsLoading] = useState(true);

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchRepostedPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${userId}/reposted`);
//       setRepostedPosts(response.data);
//       console.log(repostedPosts);
//     } catch (error) {
//       console.error('Error fetching liked posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchRepostedPosts();
//   }, [userId]);

//   const handleReplyClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/replies`,
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem('ID') },
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

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
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
//       fetchRepostedPosts();
//     } catch (error) {
//       console.error('Error', error.message);
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

//   const handleDeletePost = async (postId) => {
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

//   const combinedPosts = [...posts, ...repostedPosts];
//   const sortedPosts = combinedPosts.sort((a, b) => new Date(b.createdAt));

//   console.log('combined', combinedPosts);
//   console.log('sorted', sortedPosts);

//   return (
//     <>
//       <ToastContainer />
//       {isLoading ? (
//         <div className="loader-container">
//           <Spinner animation="border" role="status" variant="primary">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       ) : sortedPosts.length === 0 ? (
//         <h1>No posts</h1>
//       ) : (
//         sortedPosts.map((post) => (
//           <div className="center__post" key={post._id}>
//             <div className="center__post__header">
//               <div className="center__post__header-left">
//                 <img src={post.userId.profilePicture} alt="" />
//                 <span className="center__post__header-left__name">{post.userId && post.userId.name}</span>
//                 <span className="center__post__header-left__user">
//                   @{post.userId && post.userId.username} .{' '}
//                   {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//                 </span>
//               </div>
//               <div className="center__post__header-right">
//                 <span>
//                   <i onClick={() => handleDeletePost(post._id)} className="fas fa-ellipsis svg"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="center__post__body">
//               <span className="center__post__body__content">{post.title}</span>
//             </div>
//             <div className="center__post__bottom">
//               <span className="center__post__bottom-span" onClick={() => handleReplyClick(post._id)}>
//                 <FontAwesomeIcon icon={faComment} />
//               </span>
//               <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//                 <FontAwesomeIcon
//                   icon={faRetweet}
//                   style={{
//                     color: post.reposts.some((repost) => repost.userId === localStorage.getItem('ID'))
//                       ? 'green'
//                       : 'gray',
//                   }}
//                 />
//                 {post.reposts.length > 0 && post.reposts.length}
//               </span>
//               <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                 <FontAwesomeIcon
//                   style={{
//                     color: post.likes.some((like) => like.userId === localStorage.getItem('ID')) ? 'red' : 'gray',
//                   }}
//                   icon={faHeart}
//                 />
//                 {post.likes.length > 0 && post.likes.length}
//               </span>
//               <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
//                 <FontAwesomeIcon
//                   icon={faBookmark}
//                   style={{
//                     color: post.saved.some((savedPost) => savedPost.userId === localStorage.getItem('ID'))
//                       ? 'yellow'
//                       : 'gray',
//                   }}
//                 />
//               </span>
//             </div>
//             {selectedPost === post._id && (
//               <div>
//                 <div className="reply-input-container">
//                   <input
//                     className="reply-input"
//                     type="text"
//                     placeholder="Post your reply"
//                     value={replyText}
//                     onChange={(e) => setReplyText(e.target.value)}
//                   />
//                   <button className="reply-button" onClick={handleReply}>
//                     Reply
//                   </button>
//                 </div>
//                 {Array.isArray(replies) &&
//                   replies.map((reply) => (
//                     <div className="reply-container" key={reply._id}>
//                       <div className="center__post__header-left">
//                         <img src={reply.postedBy.profilePicture} alt="" />
//                         <span className="center__post__header-left__name">{reply.postedBy.name}</span>
//                         <span className="center__post__header-left__user">
//                           @{reply.postedBy.username} .{' '}
//                           {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                         </span>
//                       </div>
//                       <span className="reply-text">{reply.text}</span>
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </>
//   );
// };

// export default ProfileReposts;





















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp, faBookmark } from '@fortawesome/free-solid-svg-icons';
// import { formatDistanceToNow } from 'date-fns';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Swal from 'sweetalert2';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import Spinner from 'react-bootstrap/Spinner';

// const ProfileReposts = () => {

//     const userId = localStorage.getItem('ID');


//   const [repostedPosts, setRepostedPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [userData, setUserData] = useState(null);

//   const Allposts = useSelector((state) => state.posts.posts);
//   console.log(Allposts);
//   const dispatch = useDispatch();
//   const posts = Allposts.filter((p) => p.userId && p.userId._id == localStorage.getItem('ID'));

//   const [isLoading, setIsLoading] = useState(true);

//   const fetchAndSetPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts`);
//       dispatch(setPostsAction(response.data.reverse()));
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAndSetPosts();
//   }, []);

//   const fetchRepostedPosts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${userId}/reposted`);
//       setRepostedPosts(response.data);
//       console.log(repostedPosts);
//     } catch (error) {
//       console.error('Error fetching reposted posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchRepostedPosts();
//   }, [userId]);

//   const handleReplyClick = (postId) => {
//     setSelectedPost(postId);
//     fetchReplies(postId);
//   };

//   const handleReply = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(
//         `http://localhost:4005/posts/replies`,
//         { text: replyText, postId: selectedPost, userId: localStorage.getItem('ID') },
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

//   const fetchReplies = async (postId) => {
//     try {
//       const response = await axios.get(`http://localhost:4005/posts/${postId}`);
//       const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
//       setReplies(repliesWithUserDetails);
//     } catch (error) {
//       console.error('Error fetching replies:', error);
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
//       fetchRepostedPosts();
//     } catch (error) {
//       console.error('Error', error.message);
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
//       fetchRepostedPosts();
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const handleDeletePost = async (postId) => {
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
//         fetchRepostedPosts();
//         Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
//       } catch (error) {
//         console.error('Error', error.message);
//       }
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

//       fetchRepostedPosts();

//       toast.success('Post saved!');
//     } catch (error) {
//       console.error('Error', error.message);
//     }
//   };

//   const combinedPosts = [...posts, ...repostedPosts];
//   const sortedPosts = combinedPosts.sort((a, b) => new Date(b.createdAt));

// //   console.log('combined', combinedPosts);
// //   console.log('sorted', sortedPosts);

// console.log(repostedPosts);

//   return (
//     <>
//       <ToastContainer />
//       {isLoading ? (
//         <div className="loader-container">
//           <Spinner animation="border" role="status" variant="primary">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       ) : repostedPosts.length === 0 ? (
//         <h1>No posts</h1>
//       ) : (
//         repostedPosts.map((post) => (
//           <div className="center__post" key={post._id}>
//             <div className="center__post__header">
//               <div className="center__post__header-left">
//                 <img src={post.userId.profilePicture} alt="" />
//                 <span className="center__post__header-left__name">{post.userId && post.userId.name}</span>
//                 <span className="center__post__header-left__user">
//                   @{post.userId && post.userId.username} .{' '}
//                   {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//                 </span>
//               </div>
//               <div className="center__post__header-right">
//                 <span>
//                   <i onClick={() => handleDeletePost(post._id)} className="fas fa-ellipsis svg"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="center__post__body">
//               <span className="center__post__body__content">{post.title}</span>
//             </div>
//             <div className="center__post__bottom">
//               <span className="center__post__bottom-span" onClick={() => handleReplyClick(post._id)}>
//                 <FontAwesomeIcon icon={faComment} />
//               </span>
//               <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
//                 <FontAwesomeIcon
//                   icon={faRetweet}
//                   style={{
//                     color: post.reposts.some((repost) => repost.userId === localStorage.getItem('ID'))
//                       ? 'green'
//                       : 'gray',
//                   }}
//                 />
//                 {post.reposts.length > 0 && post.reposts.length}
//               </span>
//               <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
//                 <FontAwesomeIcon
//                   style={{
//                     color: post.likes.some((like) => like.userId === localStorage.getItem('ID')) ? 'red' : 'gray',
//                   }}
//                   icon={faHeart}
//                 />
//                 {post.likes.length > 0 && post.likes.length}
//               </span>
//               <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
//                 <FontAwesomeIcon
//                   icon={faBookmark}
//                   style={{
//                     color: post.saved.some((savedPost) => savedPost.userId === localStorage.getItem('ID'))
//                       ? 'yellow'
//                       : 'gray',
//                   }}
//                 />
//               </span>
//             </div>
//             {selectedPost === post._id && (
//               <div>
//                 <div className="reply-input-container">
//                   <input
//                     className="reply-input"
//                     type="text"
//                     placeholder="Post your reply"
//                     value={replyText}
//                     onChange={(e) => setReplyText(e.target.value)}
//                   />
//                   <button className="reply-button" onClick={handleReply}>
//                     Reply
//                   </button>
//                 </div>
//                 {Array.isArray(replies) &&
//                   replies.map((reply) => (
//                     <div className="reply-container" key={reply._id}>
//                       <div className="center__post__header-left">
//                         <img src={reply.postedBy.profilePicture} alt="" />
//                         <span className="center__post__header-left__name">{reply.postedBy.name}</span>
//                         <span className="center__post__header-left__user">
//                           @{reply.postedBy.username} .{' '}
//                           {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//                         </span>
//                       </div>
//                       <span className="reply-text">{reply.text}</span>
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </>
//   );
// };

// export default ProfileReposts;



















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
import { faComment, faRetweet, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

const ProfileReposts = () => {
  const [repostedPosts, setRepostedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');

  const userId = localStorage.getItem('ID');
  const Allposts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const posts = Allposts.filter((p) => p.userId && p.userId._id == userId);

  const [isLoading, setIsLoading] = useState(true);

  const fetchAndSetPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/posts`);
      dispatch(setPostsAction(response.data.reverse()));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchAndSetPosts();
  }, []);

  const fetchRepostedPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${userId}/reposted`);
      setRepostedPosts(response.data);
    } catch (error) {
      console.error('Error fetching reposted posts:', error);
    }
  };

  useEffect(() => {
    fetchRepostedPosts();
  }, [userId]);

  const handleReplyClick = (postId) => {
    setSelectedPost(postId);
    fetchReplies(postId);
  };

  const handleReply = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:4005/posts/replies`,
        { text: replyText, postId: selectedPost, userId: localStorage.getItem('ID') },
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

  const fetchReplies = async (postId) => {
    try {
      const response = await axios.get(`http://localhost:4005/posts/${postId}`);
      const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
      setReplies(repliesWithUserDetails);
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };

  const handleRepost = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:4005/posts/toggle-repost',
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      fetchRepostedPosts();
    } catch (error) {
      console.error('Error', error.message);
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

  const handleDeletePost = async (postId) => {
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

//   const combinedPosts = [...posts, ...repostedPosts];
//   const sortedPosts = combinedPosts.sort((a, b) => new Date(b.createdAt));

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <div className="loader-container">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : repostedPosts.length === 0 ? (
        <h1>No posts</h1>
      ) : (
        repostedPosts.map((post) => (
          <div className="center__post" key={post._id}>
            <div className="center__post__header">
              <div className="center__post__header-left">
                <img src={post.userId.profilePicture} alt="" />
                <span className="center__post__header-left__name">{post.userId && post.userId.name}</span>
                <span className="center__post__header-left__user">
                  @{post.userId && post.userId.username} .{' '}
                  {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                </span>
              </div>
              <div className="center__post__header-right">
                {post.userId._id === userId && (
                  <span>
                    <i onClick={() => handleDeletePost(post._id)} className="fas fa-ellipsis svg"></i>
                  </span>
                )}
              </div>
            </div>
            <div className="center__post__body">
              <span className="center__post__body__content">{post.title}</span>
              <div>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post Image"
                      style={{ Width: 'auto', height: 'auto' ,marginTop: '10px', paddingTop: '0px'}}
                      className='container-fluid'
                      />
                      )}
                </div>
            </div>
            <div className="center__post__bottom">
              {/* <span className="center__post__bottom-span" onClick={() => handleReplyClick(post._id)}>
                <FontAwesomeIcon icon={faComment} />
              </span> */}
              <span className="center__post__bottom-span" onClick={() => handleReplyClick(post._id)}>
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
                    color: post.reposts.some((repost) => repost.userId === userId) ? 'green' : 'gray',
                  }}
                />
                {post.reposts.length > 0 && post.reposts.length}
              </span> */}

                <span className="center__post__bottom-span" onClick={() => handleRepost(post._id)}>
                <FontAwesomeIcon
                  icon={faRetweet}
                  style={{
                    color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID')) ? '#00BA7C' : 'gray',
                  }}
                />
                {post.reposts.length > 0 && (
                  <span style={{ color: post.reposts.some(repost => repost.userId === localStorage.getItem('ID')) ? '#00BA7C' : 'inherit', marginLeft: '4px' }}>
                    {post.reposts.length}
                  </span>
                )}
              </span>
              {/* <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
                <FontAwesomeIcon
                  style={{
                    color: post.likes.some((like) => like.userId === userId) ? '#F91880' : 'gray',
                  }}
                  icon={faHeart}
                />
                {post.likes.length > 0 && post.likes.length}
              </span> */}

                <span className="center__post__bottom-span" onClick={() => handleLike(post._id)}>
                <FontAwesomeIcon
                  style={{ color: post.likes.some(like => like.userId === localStorage.getItem('ID')) ? '#F91880' : 'gray' }}
                  icon={faHeart}
                />
                {post.likes.length > 0 && (
                  <span style={{ color: post.likes.some(like => like.userId === localStorage.getItem('ID')) ? '#F91880' : 'inherit', marginLeft: '4px' }}>
                    {post.likes.length}
                  </span>
                )}
              </span>
              {/* <span className="center__post__bottom-span" onClick={() => handleSave(post._id)}>
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{
                    color: post.saved.some((savedPost) => savedPost.userId === userId) ? '#1D9BF0' : 'gray',
                  }}
                />
              </span> */}
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
                <div className="reply-input-container">
                  <input
                    className="reply-input"
                    type="text"
                    placeholder="Post your reply"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button className="reply-button" onClick={handleReply}>
                    Reply
                  </button>
                </div>
                {Array.isArray(replies) &&
                  replies.map((reply) => (
                    <div className="reply-container" key={reply._id}>
                      <div className="center__post__header-left">
                        <img src={reply.postedBy.profilePicture} alt="" />
                        <span className="center__post__header-left__name">{reply.postedBy.name}</span>
                        <span className="center__post__header-left__user">
                          @{reply.postedBy.username} .{' '}
                          {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
                        </span>
                      </div>
                      <span className="reply-text">{reply.text}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default ProfileReposts;
