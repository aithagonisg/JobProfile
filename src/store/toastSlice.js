import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toastInfo: {},
  },
  reducers: {
    showToast: (state, info) => {
      state.toastInfo = { ...info?.payload };
    },
  },
});

export const { showToast } = toastSlice.actions;

export default toastSlice.reducer;
