import { createSlice } from "@reduxjs/toolkit";

export const authPopupSlice = createSlice({
  name: "authPopup",
  initialState: {
    open: false,
  },

  reducers: {
    openAuthPopup: (state) => {
      state.open = true;
    },
    closeAuthPopup: (state) => {
      state.open = false;
    },
  },
});

export const { closeAuthPopup, openAuthPopup } = authPopupSlice.actions;

export const selectAuthPopup = (state) => state.authPopup.open;
export default authPopupSlice.reducer;
