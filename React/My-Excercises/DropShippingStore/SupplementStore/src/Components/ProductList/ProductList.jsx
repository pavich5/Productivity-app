import React, { useEffect, useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products");
        const data = await response.json();
        setProducts(data.allProducts);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleProductDetailsClose = () => {
    setSelectedProduct(null);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "all") {
      setCategoryFilter(null);
    } else {
      setCategoryFilter(selectedCategory);
    }
  };

  const handlePriceChange = (event) => {
    const selectedPriceRange = event.target.value;

    if (selectedPriceRange === "all") {
      setPriceFilter(null);
    } else {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      setPriceFilter({
        min: parseFloat(minPrice),
        max: parseFloat(maxPrice),
      });
    }
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      !categoryFilter || product.name === categoryFilter;
    const isPriceMatch =
      !priceFilter ||
      (product.price >= priceFilter.min && product.price <= priceFilter.max);

    return isCategoryMatch && isPriceMatch;
  });

  return (
    <div className="product-list">
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onClose={handleProductDetailsClose}
          addToCart={props.addToCart}
          addToCartProducts={props.addToCartProducts}
        />
      ) : (
        <>
          <div className="product-filter">
            <label htmlFor="category">Category:</label>
            <select id="category" onChange={handleCategoryChange}>
              <option value="all">All</option>
              <option value="protein">Protein</option>
              <option value="creatine">Creatine</option>
              <option value="preworkout">Pre-workout</option>
            </select>

            <label htmlFor="price">Price Range:</label>
            <select id="price" onChange={handlePriceChange}>
              <option value="all">All</option>
              <option value="0-50">0 - 50</option>
              <option value="50-100">50 - 100</option>
              <option value="100-200">100 - 200</option>
              <option value="200+">200+</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-container">
              {filteredProducts.map((product, index) => (
                <ProductItem
                  key={product + index}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <div className="no-products-message">
                No products found with the selected filters.
              </div>
              <div className="no-products-icon">🚫</div>

            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProductList;
