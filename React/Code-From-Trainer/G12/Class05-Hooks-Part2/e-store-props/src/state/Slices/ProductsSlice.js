import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/products.json";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [...productsData],
  },
  reducers: {
    addToCart: (state, action) => {
      const { selectedProduct } = action.payload;
      const product = state.products.find((product) => product.id === selectedProduct.id);
      if (product) {
        product.inCart = true;
      }
    },
    removeFromCart: (state, action) => {
      const { selectedProduct } = action.payload;
      const product = state.products.find((product) => product.id === selectedProduct.id);
      if (product) {
        product.inCart = false;
      }
    },
    
  },
});

export const { addToCart, removeFromCart } = ProductsSlice.actions;

export const getProductsInCart = (state) => {
  return state.products.products.filter((product) => product.inCart);
};


export default ProductsSlice.reducer;
