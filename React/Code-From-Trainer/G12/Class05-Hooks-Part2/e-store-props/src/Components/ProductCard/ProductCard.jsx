import { Link } from "react-router-dom";
import "./ProductCard.css";
import Button from "../Button/Button";
import { addToCart } from "../../state/Slices/ProductsSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductCard = ({ product}) => {
const dispatch = useDispatch()

const handleAddToCart = (product) => {
  dispatch(addToCart({ selectedProduct: product }));
};

  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-details">
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
  );
};

export default ProductCard;
