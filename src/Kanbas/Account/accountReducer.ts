import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateEnrollments: (state, {payload: user}) => {
      state.currentUser = user;
    }
  },
});
export const { setCurrentUser, updateEnrollments } = accountSlice.actions;
export default accountSlice.reducer;

