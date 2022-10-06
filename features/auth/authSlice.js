import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
  name: "auth",
  initialState: {
    credential: null,
  },

  reducers: {
    login: (state,action) => {
      state.credential = action.payload;
    },
    logout: (state) => {
      state.credential = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectCredential = (state) => state?.auth?.credential;
export default authSlice.reducer;