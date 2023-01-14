import { createSlice } from "@reduxjs/toolkit";

export const Carts = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addtocartitem: (state, action) => {
      const product = { ...action.payload, quantity: 1, disable: true };

      state.items.push(product);
    },

    isdisable: (state, action) => {
      state.disable = state.items.some((item) => item.id === action.payload.id);
    },

    removeProduct: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(idx, 1);
    },

    addtotal: (state, action) => {
      const tot = state.total + parseInt(action.payload.price);
      state.total = tot;
    },
    subtotal: (state, action) => {
      const tot =
        state.total - parseInt(action.payload.price) * action.payload.quantity;

      state.total = tot;
    },
    incre: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[idx].quantity = state.items[idx].quantity + 1;
      state.total = state.total + parseInt(action.payload.price);
    },

    decre: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[idx].quantity = state.items[idx].quantity - 1;
      state.total = state.total - parseInt(action.payload.price);
    },
  },
});

export const {
  addtocartitem,
  removeProduct,
  addtotal,
  subtotal,
  isdisable,
  incre,
  decre,
} = Carts.actions;

export default Carts.reducer;
