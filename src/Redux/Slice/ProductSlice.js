import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {},
  extraReducers: {},
});

export const productThunk = createAsyncThunk("/product/list", async () => {});

export default productSlice.reducer;
