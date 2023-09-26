import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../Helper";

export const authRegister = createAsyncThunk("/user/signup", async (formData) => {
  let res = instance.post(`/user/signup`, formData);
  let resData = res?.data;
  return resData;
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: {},
  reducers: {},
  extraReducers: () => {},
});

export default authSlice.reducer;
