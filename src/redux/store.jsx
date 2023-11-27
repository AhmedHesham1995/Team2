import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import homeLikesReducer from './slices/homeLikes';
import postsReducer from './slices/postsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    homeLikes: homeLikesReducer,
        posts: postsReducer,
  },
});

export default store;