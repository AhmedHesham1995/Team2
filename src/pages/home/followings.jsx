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
// const Followings = () => {
//     const [newPost, setNewPost] = useState('');
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [replies, setReplies] = useState([]);
//   const [replyText, setReplyText] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoadingReplies, setIsLoadingReplies] = useState(false);

//   const [followings, setFollowings] = useState([]);
//   const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/followings`;

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts.posts);
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
//          <div className="center__happen__top">
//           <img src={userData && userData.profilePicture} alt="" />
//            <input
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
//             {/* <span>
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
//           </div>
//           <button className="center__happen__bottom-btn" onClick={handlePost}>
//             Post
//           </button>
//         </div>
//       </div>

//       {allPosts && allPosts.map((post) => (
//   <div className="center__post" key={post._id}>
//     <div className="center__post__header">
//       <div className="center__post__header-left">
//         {post.userId && post.userId.profilePicture && (
//           <img src={post.userId.profilePicture} alt="" />
//         )}
//         <span className="center__post__header-left__name">
//           {post.userId && post.userId.name}
//         </span>
//         <span className="center__post__header-left__user">
//           @{post.userId && post.userId.username} . {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//         </span>
//       </div>
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
//             {/* <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faChartBar} />
//             </span>
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faArrowUp} />
//             </span> */}
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
// }

// export default Followings;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faBookmark, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToLikes, removeFromLikes } from '../../redux/slices/homeLikes';
import { setPosts as setPostsAction } from '../../redux/slices/postsSlice';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Spinner from 'react-bootstrap/Spinner';

const Followings = () => {
  const [newPost, setNewPost] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingReplies, setIsLoadingReplies] = useState(false);

  const [followings, setFollowings] = useState([]);
  const apiUrlFollowings = `http://localhost:4005/users/${localStorage.getItem('ID')}/following`;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.posts);
  const loved = useSelector((state) => state.homeLikes);

  const fetchFollowings = async () => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await axios.get(apiUrlFollowings, {
        headers: {
          Authorization: token,
        },
      });
  
      setFollowings(response.data.following); // Assuming the response contains an array of user IDs that the logged-in user is following.
      // console.log(response.data.followings);
    } catch (error) {
      console.error('Error fetching followings:', error);
    }
  };
  

  useEffect(() => {
    fetchFollowings();
    
  }, [followings]);

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

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
      var userData = response.data.data;
      setUserData(userData);
    } catch (error) {
      console.error('Error get user:', error);
    }
  };

  getUser();

  const fetchAndSetPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/posts`);
      dispatch(setPostsAction(response.data.reverse()));
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetPosts();
  }, [followings]);

  const fetchReplies = async (postId) => {
    setIsLoadingReplies(true);
    try {
      const response = await axios.get(`http://localhost:4005/posts/${postId}`);
      const repliesWithUserDetails = await fetchReplyUserDetails(response.data.replies);
      setReplies(repliesWithUserDetails);
    } catch (error) {
      console.error('Error fetching replies:', error);
    } finally {
      setIsLoadingReplies(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handlePost = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:4005/posts/addPost', {
        title: newPost,
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
      fetchAndSetPosts();
    } catch (error) {
      console.error('Error', error.message);
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


  // let followingsIds=followings.map((e)=>{
  //   return e._id
  // })
  // console.log(followingsIds);

  let followingsIds = [];
  console.log(followings);
if (followings) {
  followingsIds = followings.map((e) => {
    return e._id;
  });
}

   followingsIds.push(localStorage.getItem("ID"))

   console.log(followingsIds);

  // const filteredPosts = allPosts.filter(post => followingsIds.includes(post.userId._id));
  // console.log(filteredPosts);
  // console.log(followings);
  // const filteredPosts = allPosts.filter(post => post.userId && followingsIds.includes(post.userId._id));
  const filteredPosts = allPosts.filter(post => post.userId && followingsIds.includes(post.userId._id));

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <Spinner animation="border" role="status" variant="primary">
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
                placeholder="What's happening?!"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </div>
            {imageFile && (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Selected"
                style={{ maxWidth: '100%', marginTop: '10px' }}
              />
            )}
            <div className="center__happen__bottom">
              <div className="center__happen__bottom-icons">
                <span>
                  <label htmlFor="imageInput">
                    <FontAwesomeIcon icon={faImage} className="happenIcon" />
                  </label>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageSelect}
                  />
                </span>
              </div>
              <button className="center__happen__bottom-btn" onClick={handlePost}>
                Post
              </button>
            </div>
          </div>

          {filteredPosts.map((post) => (
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
                        <i onClick={() => handleDeleteSpecificPost(post._id)} className="fas fa-ellipsis svg"></i>
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
                      style={{ Width: 'auto', height: 'auto' ,marginTop: '10px', paddingTop: '0px'}}
                      className='container-fluid'
                      />
                      )}
                </div>
            </div>
              <div className="center__post__bottom">
                {/* <span className="center__post__bottom-span" onClick={() => handleCommentClick(post._id)}>
                  <FontAwesomeIcon icon={faComment} />
                </span> */}

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
                        ? 'green'
                        : 'gray',
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
                    style={{ color: post.likes.some(like => like.userId === localStorage.getItem("ID")) ? '#F91880' : 'gray' }}
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
                  <FontAwesomeIcon icon={faBookmark}
                    style={{
                      color: post.saved.some(savedPost => savedPost.userId === localStorage.getItem('ID'))
                        ? '#1D9BF0'
                        : 'gray',
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
                  <div className='reply-input-container'>
                    <input
                      className='reply-input'
                      type="text"
                      placeholder="Post your reply"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <button className='reply-button' onClick={handleReply}>Reply</button>
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

          {/* {isLoadingReplies && (
            <div className="loader-container">
              <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading Replies...</span>
              </Spinner>
            </div>
          )} */}
        </section>
      )}
    </>
  );
}

export default Followings;






