import Button from "../Button/Button";
import "./ProductDetailsPanel.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../state/Slices/ProductsSlice";

const ProductDetailsPanel = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ selectedProduct: product }));
  };
  
  return (
    <div className="ProductDetailsPanel">
      <h3>{product.title}</h3>
      <div className="panel-content">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="panel-details">
          <p>{product.description}</p>
          <div className="panel-controls">
            <p>${product.price}</p>
            <Button
              btnText={product.inCart ? "ADDED" : "🛒"}
              onBtnClick={() => {
                handleAddToCart(product);
              }}
              disabled={product.inCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPanel;
