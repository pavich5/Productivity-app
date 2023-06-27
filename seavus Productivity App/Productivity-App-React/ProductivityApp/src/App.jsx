import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import { Pages } from "./Pages/Pages";
function App() {
  const navbarLoginData = [
    {
      text: "Tips",
      link: "/productive-tips",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "Login",
      link: "/login",
    },
  ];
  const navbarDashboardData = [
    {
      text: "Logout",
      link: "/",
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          navbarLoginData={navbarLoginData}
          navbarDashboardData={navbarDashboardData}
        />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
