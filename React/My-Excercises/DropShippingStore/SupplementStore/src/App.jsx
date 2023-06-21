import React, { useState,useEffect} from "react";
import "./App.css";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";


function App() {
  const [addToCartProducts, setAddToCartProducts] = useState([]);

  const addToCart = (product) => {
    const updatedCartProducts = [...addToCartProducts, product];
    setAddToCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };
  
  const removeFromCart = (productId) => {
    let isProductRemoved = false; 
    const updatedCartProducts = addToCartProducts.filter(product => {
      if (product.id === productId && !isProductRemoved) {
        isProductRemoved = true;
        return false; 
      }
      return true;
    });
  
    setAddToCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };
  

  useEffect(() => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    if (storedCartProducts) {
      setAddToCartProducts(JSON.parse(storedCartProducts));
    }
  }, []);
  
  console.log(addToCartProducts);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Pages addToCartProducts={addToCartProducts} addToCart={addToCart} removeFromCart={removeFromCart} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
