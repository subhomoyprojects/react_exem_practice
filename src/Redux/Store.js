import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slice/AuthSlice";
import BlogSlice from "./Slice/BlogSlice";

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Blog: BlogSlice,
  },
});

export default store;
