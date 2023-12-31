import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.value = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
