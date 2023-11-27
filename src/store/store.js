import { configureStore } from "@reduxjs/toolkit";

import homeLikesReducer from './slices/homeLikes';
import postsReducer from './slices/postsSlice';

export const store=configureStore({
    reducer:{
        
        homeLikes: homeLikesReducer,
        posts: postsReducer,
    }
    
})