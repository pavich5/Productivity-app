import React, { useState, useEffect } from "react";
import "./DashboardPage.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { NavLink } from "react-router-dom";
import SplideProductItem from "../../Components/splide-product-item/splide-product-item";
import TestamonialItem from '../../Components/TestamonialsItem/TestamonialItem'

const DashboardPage = () => {
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const starsThreshold = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products");
        const data = await response.json();
        setFeaturedProduct(data.allProducts);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    const fetchTestimonials = () => {
      const mockTestimonials = [
        {
          id: 1,
          text: "I love the products from this store. They have excellent quality and great prices.",
          author: "John Doe",
          image: "https://m.timesofindia.com/photo/83890830/83890830.jpg",
        },
        {
          id: 2,
          text: "The customer service is top-notch. They are always responsive and helpful.",
          author: "Jane Smith",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsOrgFUEOgQw7BtfBgmTEbwaLPssdYRloxw&usqp=CAU",
        },
        {
          id: 3,
          text: "I'm a regular customer of this store. The products always arrive on time and in perfect condition.",
          author: "David Johnson",
          image:
            "https://media.istockphoto.com/id/523478288/photo/handsome-young-man-on-white-background.jpg?s=170667a&w=0&k=20&c=XPkEfJvxc0bYyboxcMxgc3QGnyh2MqsEPjvGZ5HVtEI=",
        },
        {
          id: 4,
          text: "The selection of products is amazing. I always find what I need at this store.",
          author: "Emily Wilson",
          image:
            "https://t4.ftcdn.net/jpg/02/44/80/33/360_F_244803369_cNviClISSSUV5FGcYsJR9anLrqiRrHVK.jpg",
        },
      ];

      setTestimonials(mockTestimonials);
    };

    fetchProducts();
    fetchTestimonials();
  }, []);

  return (
    <div className="DashboardPage">

      <section className="banner-section">
        <div className="banner-content">
          <h1>Boost Your Health and Performance</h1>
          <p>Explore our premium selection of top-quality supplements</p>
          <NavLink to={'/Product-list'}>
            <button>Shop Now</button>
          </NavLink>
        </div>
      </section>

      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="product-slider">
          <Splide options={{ perPage: 3, gap: "1rem", rewind: true }}>
            {featuredProduct.map((product) => (
              <SplideSlide key={product.id}>
                <SplideProductItem
                product={product}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestamonialItem
            testimonial={testimonial}
            starsThreshold={starsThreshold}
            />
          ))}
        </div>
      </section>

      <section className="subscription-section">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest news and offers.</p>
        <div className="subscription-form">
          <input type="text" placeholder="Enter email here" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
