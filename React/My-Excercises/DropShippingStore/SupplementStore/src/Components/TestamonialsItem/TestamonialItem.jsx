import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialItem = ({ testimonial, starsThreshold }) => {
  return (
    <div className="testimonial-item" key={testimonial.id}>
      <img
        src={testimonial.image}
        alt={testimonial.author}
        className="testimonial-image"
      />
      <p className="testimonial-text">{testimonial.text}</p>
      <p className="testimonial-author">- {testimonial.author}</p>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((index) => (
          <FaStar
            key={index}
            className={`star-icon ${index <= starsThreshold ? 'filled' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialItem;
