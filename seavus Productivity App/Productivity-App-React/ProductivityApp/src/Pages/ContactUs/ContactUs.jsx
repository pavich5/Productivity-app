import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import './ContactUs.css';
import Aside from '../../Layouts/Aside/Aside';

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <Aside />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>Email: info@example.com</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>Phone: +1 123-456-7890</p>
          </div>
          <div className="contact-item">
            <FaMapMarker className="contact-icon" />
            <p>123 Main Street, City, Country</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" className='formInput'/>
            <input type="email" placeholder="Your Email" className='formInput'/>
            <input type="text" placeholder="Your Message" className='formInput'/>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
