import { createSlice } from "@reduxjs/toolkit";

export const Products = createSlice({
  name: "Product",
  initialState: {
    items: [],
  },
  reducers: {
    additems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { additems } = Products.actions;

export default Products.reducer;
