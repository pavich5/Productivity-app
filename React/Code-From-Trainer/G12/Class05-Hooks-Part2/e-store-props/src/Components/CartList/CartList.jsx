import React from "react";
import { useSelector } from "react-redux";
import CartListItem from "../CartListItem/CartListItem";
import { getProductsInCart } from "../../state/Slices/ProductsSlice";
import "./CartList.css";

const CartList = () => {
  const cartProducts = useSelector(getProductsInCart); // Use the getProductsInCart selector
  console.log(cartProducts);
  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map((cartProduct) => (
            <CartListItem
              key={cartProduct.id}
              cartProduct={cartProduct}
            />
          ))}
        </ol>
      ) : (
        <h3 className="CartList-heading">
          No products in cart... don't be so stingy
        </h3>
      )}
    </>
  );
};

export default CartList;
