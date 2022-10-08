import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import authPopupReducer from "../features/auth/authPopupSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authPopup: authPopupReducer,
  },
});
