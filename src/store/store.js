import { configureStore } from "@reduxjs/toolkit";

import homeLikesReducer from './slices/homeLikes';
import postsReducer from './slices/postsSlice';
import loaderReducer from './slices/loader'

export const store=configureStore({
    reducer:{
        
        homeLikes: homeLikesReducer,
        posts: postsReducer,
        loader: loaderReducer,

    }
    
})