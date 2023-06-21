import React from 'react';
import './CardPage.css';

const CardPage = (props) => {
  const { cartProducts } = props;

  const calculateTotalAmount = () => {
    return cartProducts.reduce((total, product) => total + product.price, 0);
  };

  const handleRemoveFromCart = (productId) => {
    props.removeFromCart(productId);
  };

  if (cartProducts.length === 0) {
    return (
      <div className="card-page-container">
        <div className="no-products-container">
          <div className="no-products-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100"
              height="100"
              fill="#ccc"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm1 16h-2v-2h2zm0-4h-2V7h2z" />
            </svg>
            <p>Apologies, there are currently no products in your cart.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-page-container">
      <table className="card-products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id + Math.random()}>
              <td>
                <div className="card-product-info">
                  <img src={product.image} alt={product.name} className="card-product-image" />
                  <p className="card-product-name">{product.name}</p>
                </div>
              </td>
              <td className="card-product-price">{product.price}$</td>
              <td>x1</td>
              <td>
                <button
                  className="card-remove-button"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total-text">
              Total:
            </td>
            <td className="total-amount">{calculateTotalAmount()}$</td>
          </tr>
        </tfoot>
      </table>
      <button className="pay-button">Pay</button>
    </div>
  );
};

export default CardPage;
