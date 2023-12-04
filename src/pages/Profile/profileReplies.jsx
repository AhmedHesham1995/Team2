

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp , faEllipsisV,} from "@fortawesome/free-solid-svg-icons";

// import h from '../../assets/h.jpg';

// const ProfileReplies = () => {
//   const [replies, setReplies] = useState([]);

//   useEffect(() => {
//     const fetchReplies = async () => {
//       try {
//         const response = await axios.get("http://localhost:4005/posts");
//         const allReplies = response.data.reduce(
//           (acc, post) => acc.concat(post.replies),
//           []
//         );
//         setReplies(allReplies.reverse());
//       } catch (error) {
//         console.error("Error fetching replies:", error);
//       }
//     };

//     fetchReplies();
//   }, []);

//   const handleDeleteReply = async (replyId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${replyId}`);
//       setReplies((prevReplies) =>
//         prevReplies.filter((reply) => reply._id !== replyId)
//       );
//     } catch (error) {
//       console.error("Error deleting reply:", error.message);
//     }
//   };


//   const [userData, setUserData] = useState(null);

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData=response.data.data;
//       console.log(userData);
//       setUserData(userData)
//       console.log("user");
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };
//   getUser()
  
  

//   return (
//     <div>
//       {replies.map((reply) => (
//         <div key={reply._id} className="center__post">
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={userData && userData.profilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {userData && userData.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{userData && userData.username} . 27 june
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <FontAwesomeIcon
//                 icon={faEllipsisV}
//                 className="ellipsis-icon"
//                 onClick={() => handleDeleteReply(reply._id)}
//               />
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{reply.text}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span
//               className="center__post__bottom-span">
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
//     </div>
//   );
// };

// export default ProfileReplies;















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp , faEllipsisV,} from "@fortawesome/free-solid-svg-icons";

// import h from '../../assets/h.jpg';

// const ProfileReplies = () => {
//   const [replies, setReplies] = useState([]);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchReplies = async () => {
//       try {
//         const response = await axios.get("http://localhost:4005/posts");
//         const allReplies = response.data.reduce(
//           (acc, post) => acc.concat(post.replies),
//           []
//         );

//         // Filter replies to show only the ones posted by the logged-in user
//         const userReplies = allReplies.reverse().filter(reply => reply.postedBy._id === localStorage.getItem("ID"));
//         setReplies(userReplies);
//       } catch (error) {
//         console.error("Error fetching replies:", error);
//       }
//     };

//     fetchReplies();
//   }, []);

//   const handleDeleteReply = async (replyId) => {
//     try {
//       await axios.delete(`http://localhost:4005/posts/${replyId}`);
//       setReplies((prevReplies) =>
//         prevReplies.filter((reply) => reply._id !== replyId)
//       );
//     } catch (error) {
//       console.error("Error deleting reply:", error.message);
//     }
//   };

//   const getUser = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
//       var userData=response.data.data;
//       console.log(userData);
//       setUserData(userData)
//       console.log("user");
//     } catch (error) {
//       console.error('Error get user:', error);
//     }
//   };
//   getUser();

//   return (
//     <div>
//       {replies.map((reply) => (
//         <div key={reply._id} className="center__post">
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={userData && userData.profilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {userData && userData.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{userData && userData.username} . 27 june
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <FontAwesomeIcon
//                 icon={faEllipsisV}
//                 className="ellipsis-icon"
//                 onClick={() => handleDeleteReply(reply._id)}
//               />
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{reply.text}</span>
//           </div>
//           <div className="center__post__bottom">
//             <span
//               className="center__post__bottom-span">
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
//     </div>
//   );
// };

// export default ProfileReplies;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faChartBar, faArrowUp, faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { formatDistanceToNow } from 'date-fns';
// import Swal from 'sweetalert2';

// const ProfileReplies = () => {
//   const [replies, setReplies] = useState([]);
//   const [userData, setUserData] = useState(null);

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

//   useEffect(() => {
//     const fetchReplies = async () => {
//       try {
//         const response = await axios.get("http://localhost:4005/posts");
//         const allReplies = response.data.reduce(
//           (acc, post) => acc.concat(post.replies),
//           []
//         );

//         // Filter replies to show only the ones posted by the logged-in user
//         const userReplies = allReplies.reverse().filter(reply => reply.postedBy._id === localStorage.getItem("ID"));
//         setReplies(userReplies);
//       } catch (error) {
//         console.error("Error fetching replies:", error);
//       }
//     };

//     fetchReplies();
//   }, []);

//   // const handleDeleteReply = async (replyId) => {
//   //   try {
//   //     await axios.delete(`http://localhost:4005/posts/${replyId}`);
//   //     setReplies((prevReplies) =>
//   //       prevReplies.filter((reply) => reply._id !== replyId)
//   //     );
//   //   } catch (error) {
//   //     console.error("Error deleting reply:", error.message);
//   //   }
//   // };

//   const handleDeleteReply = async (replyId) => {
//     // Display SweetAlert confirmation dialog
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this reply!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     });

//     // If the user confirms the deletion, proceed with the deletion
//     if (result.isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:4005/posts/${replyId}`);
//         setReplies((prevReplies) =>
//           prevReplies.filter((reply) => reply._id !== replyId)
//         );

//         // Display success message with SweetAlert
//         Swal.fire('Deleted!', 'Your reply has been deleted.', 'success');
//       } catch (error) {
//         console.error('Error deleting reply:', error.message);
//         // Display error message with SweetAlert
//         Swal.fire('Error!', 'An error occurred while deleting the reply.', 'error');
//       }
//     }
//   };

  

//   return (
//     <div>
//       {replies.map((reply) => (
//         <div key={reply._id} className="center__post">
//           <div className="center__post__header">
//             <div className="center__post__header-left">
//               <img src={userData && userData.profilePicture} alt="" />
//               <span className="center__post__header-left__name">
//                 {userData && userData.name}
//               </span>
//               <span className="center__post__header-left__user">
//                 @{userData && userData.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
//               </span>
//             </div>
//             <div className="center__post__header-right">
//               <span>
//                 {/* <FontAwesomeIcon
//                   icon={faEllipsisV}
//                   className="ellipsis-icon"
//                   onClick={() => handleDeleteReply(reply._id)}
//                 /> */}
//                 <i onClick={()=> handleDeleteReply(reply._id)} className="fas fa-ellipsis svg" ></i>
                
//               </span> 
//             </div>
//           </div>
//           <div className="center__post__body">
//             <span className="center__post__body__content">{reply.text}</span>
//           </div>
//           {/* <div className="center__post__bottom">
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
//             <span className="center__post__bottom-span">
//               <FontAwesomeIcon icon={faBookmark}/>
//             </span>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProfileReplies;












import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faChartBar, faArrowUp, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { formatDistanceToNow } from 'date-fns';
import Swal from 'sweetalert2';
import Spinner from 'react-bootstrap/Spinner';

const ProfileReplies = () => {
  const [replies, setReplies] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem("ID")}`);
      var userData = response.data.data;
      setUserData(userData);
    } catch (error) {
      console.error('Error get user:', error);
    }
  };

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios.get("http://localhost:4005/posts");
        const allReplies = response.data.reduce(
          (acc, post) => acc.concat(post.replies),
          []
        );

        // Filter replies to show only the ones posted by the logged-in user
        const userReplies = allReplies.reverse().filter(reply => reply.postedBy._id === localStorage.getItem("ID"));
        setReplies(userReplies);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching replies:", error);
      }
    };

    fetchReplies();
    getUser();
  }, []);

  const handleDeleteReply = async (replyId) => {
    // Display SweetAlert confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this reply!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    // If the user confirms the deletion, proceed with the deletion
    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4005/posts/${replyId}`);
        setReplies((prevReplies) =>
          prevReplies.filter((reply) => reply._id !== replyId)
        );

        // Display success message with SweetAlert
        Swal.fire('Deleted!', 'Your reply has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting reply:', error.message);
        // Display error message with SweetAlert
        Swal.fire('Error!', 'An error occurred while deleting the reply.', 'error');
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
        <div className="loader-container">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          {replies.map((reply) => (
            <div key={reply._id} className="center__post">
              <div className="center__post__header">
                <div className="center__post__header-left">
                  <img src={userData && userData.profilePicture} alt="" />
                  <span className="center__post__header-left__name">
                    {userData && userData.name}
                  </span>
                  <span className="center__post__header-left__user">
                    @{userData && userData.username} . {formatDistanceToNow(new Date(reply.created), { addSuffix: true })}
                  </span>
                </div>
                <div className="center__post__header-right">
                  <span>
                    <i onClick={()=> handleDeleteReply(reply._id)} className="fas fa-ellipsis svg" ></i>
                  </span> 
                </div>
              </div>
              <div className="center__post__body">
                <span className="center__post__body__content">{reply.text}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {showToTopButton && (
        <button className="to-top-button" onClick={handleToTopClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default ProfileReplies;
