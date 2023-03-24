import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice } from "../slice";
const store = configureStore({
  reducer: { loadingSlice },
});
export default store;
