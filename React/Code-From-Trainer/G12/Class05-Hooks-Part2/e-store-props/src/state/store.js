import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./Slices/ProductsSlice";

export default configureStore({
  reducer: {
    products: ProductsSlice.reducer,
  },
});
