import './CheckOut.css';
import { FaCreditCard } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

export const CheckOut = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">
            <FaCreditCard className="icon" /> Card Number
          </label>
          <input type="text" id="cardNumber" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expirationDate">
              <MdDateRange className="icon" /> Expiration Date
            </label>
            <input type="text" id="expirationDate" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">
              <RiLockPasswordFill className="icon" /> CVV
            </label>
            <input type="text" id="cvv" />
          </div>
        </div>
        <button type="submit">
          Pay Now
        </button>
      </form>
      <p>Thank you for your purchase!</p>
    </div>
  );
};
