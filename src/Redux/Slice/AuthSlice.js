import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance from "../Helper";

export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
});

export const registerThunk = createAsyncThunk("/register", async (payload) => {
  const res = await Instance.post(`/register`, payload);
  let resData = res?.data;
  return resData;
});

export const loginThunk = createAsyncThunk("/login", async (payload) => {
  const res = await Instance.post(`/login`, payload);
  let resData = res?.data;
  return resData;
});

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    status: STATUSES.SUCCESS,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.status = STATUSES.SUCCESS;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default AuthSlice.reducer;
