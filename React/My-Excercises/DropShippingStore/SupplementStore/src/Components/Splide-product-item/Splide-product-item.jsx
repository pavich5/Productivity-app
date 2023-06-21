import { NavLink } from "react-router-dom";

const SplideProductItem = ({product}) => {
  return (
    <div className="splide-product-item" key={product.name + product.id}>
      <img
        src={product.image}
        className="splide-product-image"
      />
      <h2 className="splide-product-name">{product.name}</h2>
      <h3 className="splide-product-description">{product.description}</h3>
      <h4 className="splide-product-price">{product.price}$</h4>
      <NavLink to="/Product-list">
        <button className="splide-buy-button">Buy Now</button>
      </NavLink>
    </div>
  );
};

export default SplideProductItem;
