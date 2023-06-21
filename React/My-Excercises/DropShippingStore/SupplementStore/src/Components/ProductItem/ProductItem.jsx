import React from 'react';
import './ProductItem.css';

function ProductItem(props) {
  const handleProductClick = () => {
    props.onClick();
  };

  return (
    <div className="product-item" onClick={handleProductClick}>
      <div className="product-image-container">
        <img src={props.image} alt={props.name} className="product-image" />
      </div>
      <div className="product-info">
        <h2 className="product-name">{props.name}</h2>
        <p>{props.description}</p>
        <h4 className="product-price">{props.price}$</h4>
        <button className="buy-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
