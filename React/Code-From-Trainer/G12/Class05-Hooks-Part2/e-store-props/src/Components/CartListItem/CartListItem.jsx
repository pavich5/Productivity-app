import React from "react";
import Button from "../Button/Button";
import "./CartListItem.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../state/Slices/ProductsSlice";

const CartListItem = ({ cartProduct }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({selectedProduct:cartProduct}));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({selectedProduct:cartProduct}));
  };

  return (
    <li className="CartListItem">
      <strong>{cartProduct.title}</strong>
      <span>
        ${cartProduct.price}
        {cartProduct.inCart ? (
          <Button
            btnStyle={{ marginLeft: "20px" }}
            btnText="❌"
            onBtnClick={handleRemoveFromCart}
          />
        ) : (
          <Button
            btnStyle={{ marginLeft: "20px" }}
            btnText="Add to Cart"
            onBtnClick={handleAddToCart}
          />
        )}
      </span>
    </li>
  );
};

export default CartListItem;
