import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../Helper";

export const status = Object.freeze({
  success: "SUCCESS",
  loading: "LOADING",
  error: "ERROR",
});

export const authRegister = createAsyncThunk("/user/signup", async (formData) => {
  let res = instance.post(`/user/signup`, formData);
  let resData = res?.data;
  return resData;
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    status: status.success,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(authRegister.fulfilled, (state) => {
        state.status = status.success;
      })
      .addCase(authRegister.rejected, (state) => {
        state.status = status.error;
      });
  },
});

export default authSlice.reducer;
