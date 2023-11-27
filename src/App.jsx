import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./components/appLayout/appLayout";
import Home from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Explore from "./pages/explore/explore";
import Lists from "./pages/lists";
import Join from "./pages/Join";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/notFound";
import Profile from "./pages/Profile/profile";
import Notification from "./pages/Notifications/notification";
import All from "./pages/Notifications/all";
import Mentions from "./pages/Notifications/mentions";
import Verified from "./pages/Notifications/verified";
import Communities from "./pages/communities";
import Followings from "./pages/home/followings";
import ProfilePosts from "./pages/Profile/profilePosts";
import ProfileReplies from "./pages/Profile/profileReplies";
import ProfileHighlights from "./pages/Profile/profileHighlights";
import ProfileMedia from "./pages/Profile/profileMedia";
import ProfileLikes from "./pages/Profile/ProfileLikes";
import Entertainment from "./pages/explore/entertainment";
import Trending from "./pages/explore/trending";
import News from "./pages/explore/news";
import Sports from "./pages/explore/sports";
import { AuthProvider } from "./contexts/authContext";
import { useState, useEffect } from "react";
import HomeNav from "./pages/home/home-nav";
import ExploreNav from "./pages/explore/explore-nav";
import Protected from "./components/protected/protected";
import { Provider, useSelector } from "react-redux";
import store from './redux/store'
import EditProfile from "./pages/Profile/EditProfile/EditProfile";
import ProfileSaved from "./pages/Profile/profileSaved";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Join /> },

      {
        path: "/home",
        element: <Protected><HomeNav /></Protected>,
        children: [
          { index: true, element: <Home /> },
          { path: "followings", element: <Followings /> },
        ],
      },


      {
        path: "/explore",
        element: <Protected><ExploreNav /></Protected>,
        children: [
          { index: true, element: <Explore /> },
          { path: "entertainment", element: <Entertainment /> },
          { path: "trend", element: <Trending /> },
          { path: "news", element: <News /> },
          { path: "sports", element: <Sports /> },
        ],
      },

      { path: "lists", element: <Protected><Lists /></Protected> },
      {
        path: "/notifications",
        element: <Protected><Notification /></Protected>,
        children: [
          { index: true, element: <All /> },
          { path: "mentions", element: <Mentions /> },
          { path: "verified", element: <Verified /> },
        ],
      },
      { path: "join", element: <Join /> },
      { path: "signUp", element: <SignUp /> },
      { path: "signIn", element: <SignIn /> },
      { path: "editProfile", element: <EditProfile /> },
      {
        path: "/profile",
        element: <Protected><Profile /></Protected>,
        children: [
          { index: true, element: <ProfilePosts /> },
          { path: "replies", element: <ProfileReplies /> },
          { path: "highlights", element: <ProfileHighlights /> },
          { path: "media", element: <ProfileMedia /> },
          { path: "likes", element: <ProfileLikes /> },
          { path: "saves", element: <ProfileSaved /> },
        ],
      },
      { path: "communities", element: <Protected><Communities /></Protected> },
      { path: "*", element: <NotFound /> }, //wildCard
    ],
  },
]);

function App() {

  const user = useSelector(data => data.user.userData)
  const [isLogin, setLogin] = useState((localStorage.getItem('token')) ? true : false)

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    // <AuthProvider value={{isLogin,setLogin}}>
    //  <Provider store={store}><RouterProvider router={router} /></Provider>

    // </AuthProvider>

    <Provider store={store}>
      <AuthProvider value={{ isLogin, setLogin }}>
        <RouterProvider router={router} >
          <Profile />
          <EditProfile />
        </RouterProvider>
      </AuthProvider>
    </Provider>

  );
}

export default App;
