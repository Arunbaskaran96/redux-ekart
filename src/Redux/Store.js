import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Reducer/ProductSlice";
import CartSlice from "./Reducer/CartSlice";

export default configureStore({
  reducer: {
    Product: ProductSlice,
    Cart: CartSlice,
  },
});
