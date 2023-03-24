import { createSlice } from "@reduxjs/toolkit";
const initialState = { loading: false };
const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    handleChangeLoading: (state, actions) => {
      state.loading = actions.payload;
    },
  },
});

export const { handleChangeLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
