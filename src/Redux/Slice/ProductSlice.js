import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../Helper";
STATUSES;
const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {},
  extraReducers: () => {},
});

export default ProductSlice.reducer;
