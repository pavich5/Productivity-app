import './ProductDetails.css';
import React from 'react';

const ProductDetails = (props) => {
  const { product, addToCart, onClose } = props;

  const mockIngredients = [
    'Vitamin D',
    'Omega-3 Fatty Acids',
    'Probiotics',
    'Magnesium',
    'Turmeric (Curcumin)',
  ];
  

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon = i <= rating ? '★' : '☆';
      stars.push(<span key={i}>{starIcon}</span>);
    }
    return stars;
  };

  return (
    <div className="ProductDetails">
      <div className="ProductInfo">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-rating">
            <span className='rating'>Rating:</span> {renderStarRating(product.rating)}
          </div>
          <div className="product-price">Price: {product.price}$</div>
          <div className="product-flavor">
            Flavor: <span>{product.flavor}</span>
          </div>
          <div className="product-quantity">
            Quantity: <input type="number" defaultValue="1" />
          </div>
          <div className="product-stock">
            {product.stock > 0 ? (
              <span className="stock-available">In Stock</span>
            ) : (
              <span className="stock-unavailable">Out of Stock</span>
            )}
          </div>
          <button className="Add-button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="Close-button" onClick={() => onClose()}>
            Close
          </button>
        </div>
      </div>
      <div className="product-description">
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>
      <div className="product-ingredients">
        <h2>Ingredients</h2>
        <ul>
          {mockIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
