import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../Components/ProductList/ProductList";
import CardPage from "./CardPage/CardPage";
import DashboardPage from "./DashboardPage/DashboardPage";
import Contact from "./Contact/Contact";
import { CheckOut } from "./CheckOutPage/CheckOut";
export const Pages = (props) => {
  return (
    <Routes>
      <Route
        path="/Product-list"
        element={
          <ProductList
            addToCartProducts={props.addToCartProducts}
            addToCart={props.addToCart}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CardPage
            cartProducts={props.addToCartProducts}
            addToCardFunction={props.addToCart}
            removeFromCart={props.removeFromCart}
          />
        }
      />
      <Route path="/" element={<DashboardPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/checkout" element={<CheckOut />} />

    </Routes>
  );
};

export default Pages;
