import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="thanks-container">
        <h2>Thanks for choosing us!</h2>
        <p>We appreciate your interest. Our team will get back to you soon.</p>
        <FaCheckCircle className="check-icon" />
      </div>
    </div>
  );
};

export default Contact;
