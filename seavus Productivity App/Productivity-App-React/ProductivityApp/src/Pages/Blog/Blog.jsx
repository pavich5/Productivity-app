import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Blog.css";
import BlogSalesArticle from "./BlogSalesArticle";
import BlogEfficencyArticle from "./BlogEfficencyArticle";
import BlogCompensationArticle from "./BlogCompensationArticle";
import BlogLoyaltyArticle from "./BlogLoyaltyArticle";

const BlogArticle = () => {
  const location = useLocation();
  const isLearnMoreSales = location.pathname === "/learn-more-sales";
  const isLearnMoreEff = location.pathname === "/learn-more-efficiency";
  const isLearnMoreComp = location.pathname === "/learn-more-compensation";
  const isLearnMoreLoyalty = location.pathname === "/learn-more-loyalty";

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (splide) => {
    setActiveSlide(splide.index);
  };

  const renderSlides = () => {
    if (isLearnMoreEff) {
      return (
        <>
          <SplideSlide>
            <BlogEfficencyArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogSalesArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogCompensationArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogLoyaltyArticle />
          </SplideSlide>
        </>
      );
    } else if (isLearnMoreSales) {
      return (
        <>
          <SplideSlide>
            <BlogSalesArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogEfficencyArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogCompensationArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogLoyaltyArticle />
          </SplideSlide>
        </>
      );
    } else if (isLearnMoreComp) {
      return (
        <>
          <SplideSlide>
            <BlogCompensationArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogSalesArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogEfficencyArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogLoyaltyArticle />
          </SplideSlide>
        </>
      );
    } else if (isLearnMoreLoyalty) {
      return (
        <>
          <SplideSlide>
            <BlogLoyaltyArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogCompensationArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogSalesArticle />
          </SplideSlide>
          <SplideSlide>
            <BlogEfficencyArticle />
          </SplideSlide>
        </>
      );
    }
  };

  return (
    <div className="blog-article-content__content">
      <div className="splide-wrapper">
        <Splide
          options={{
            perPage: 1,
            rewind: false,
          }}
          onMoved={handleSlideChange}
        >
          {renderSlides()}
        </Splide>
      </div>
    </div>
  );
};

export default BlogArticle;
