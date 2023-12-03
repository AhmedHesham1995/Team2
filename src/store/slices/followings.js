// redux/slices/followings.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  followingUserIds: [],
};

const followingsSlice = createSlice({
  name: 'followings',
  initialState,
  reducers: {
    setFollowingUserIds: (state, action) => {
      state.followingUserIds = action.payload;
    },
  },
});

export const { setFollowingUserIds } = followingsSlice.actions;
export default followingsSlice.reducer;
