import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance, { STATUSES } from "../Helper";

export const blogThunk = createAsyncThunk("/allBlog", async () => {
  const res = await Instance.get(`/allBlog`);
  let resData = res?.data;
  return resData;
});

export const blogCategoryThunk = createAsyncThunk("/showallcategory", async () => {
  const res = await Instance.get(`/showallcategory`);
  let resData = res?.data;
  return resData;
});

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    categories: [], // Category list
    items: [], // Normal item list
    status: {
      categories: STATUSES.SUCCESS,
      items: STATUSES.SUCCESS,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(blogCategoryThunk.pending, (state) => {
        state.status.categories = STATUSES.LOADING;
      })
      .addCase(blogCategoryThunk.fulfilled, (state, { payload }) => {
        state.status.categories = STATUSES.SUCCESS;
        state.categories = payload.data;
      })
      .addCase(blogCategoryThunk.rejected, (state) => {
        state.status.categories = STATUSES.ERROR;
      })
      .addCase(blogThunk.pending, (state) => {
        state.status.items = STATUSES.LOADING;
      })
      .addCase(blogThunk.fulfilled, (state, { payload }) => {
        state.status.items = STATUSES.SUCCESS;
        state.items = payload.data;
      })
      .addCase(blogThunk.rejected, (state) => {
        state.status.items = STATUSES.ERROR;
      });
  },
});

export default BlogSlice.reducer;
