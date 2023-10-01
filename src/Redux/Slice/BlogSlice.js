import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance from "../Helper";

export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});

export const blogThunk = createAsyncThunk("/allBlog", async () => {
  const res = await Instance.get(`/allBlog`);
  let resData = res?.data;
  return resData;
});

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    data: [{}],
    status: STATUSES.SUCCESS,
  },
  extraReducers: (builder) => {
    builder
      .addCase(blogThunk.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(blogThunk.fulfilled, (state, { payload }) => {
        state.status = STATUSES.SUCCESS;
        state.data = payload.data;
      })
      .addCase(blogThunk.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default BlogSlice.reducer;
