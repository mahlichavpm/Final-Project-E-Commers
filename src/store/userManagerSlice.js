import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
  };
  
  export const userManagerSlice = createSlice({
    name: "userManagerSlice",
    initialState,
    reducers: {
      changeUserData: (state, action) => {
       
      },
    },
  });
  
  export const { changeUserData, } = userManagerSlice.actions;
  
  export default userManagerSlice.reducer;
  