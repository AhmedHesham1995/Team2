import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './userReducer'

const rootReducer = combineReducers({
    userId: userReducer
})

export default rootReducer;
