import { configureStore } from "@reduxjs/toolkit";

import homeLikesReducer from './slices/homeLikes';
import postsReducer from './slices/postsSlice';
import loaderReducer from './slices/loader'
import followingsReducer from './slices/followings';

export const store=configureStore({
    reducer:{
        
        homeLikes: homeLikesReducer,
        posts: postsReducer,
        loader: loaderReducer,
        followings: followingsReducer,

    }
    
})