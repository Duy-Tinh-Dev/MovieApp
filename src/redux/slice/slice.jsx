import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: () => {},
  },
});

export const { toggleLoading } = counterSlice.actions;
export default counterSlice.reducer;
