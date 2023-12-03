import { createSlice } from "@reduxjs/toolkit";



const homeLikesSlice=createSlice({
    name: "homeLikes",
    initialState: [],
    reducers:{
        addToLikes:function(state,action){
            state.push(action.payload)
        },
        removeFromLikes:function(state,action){
            return state.filter((posts)=>posts.id != action.payload.id)
        }
    }
})

export const {addToLikes,removeFromLikes}=homeLikesSlice.actions
export default homeLikesSlice.reducer