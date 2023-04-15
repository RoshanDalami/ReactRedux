import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = { isAuthenticated: false };
const authenticationSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authAction = authenticationSlice.actions;

export default authenticationSlice.reducer;