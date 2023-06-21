import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import { Pages } from './Pages/Pages';

function App() {
  const navbarLoginData = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Categories',
      link: '/categories',
    },
    {
      text: 'About',
      link: '/asd',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
    {
      text: 'Login',
      link: '/login',
    },
  ];

  const navbarDashboardData = [
    {
      text: 'Home',
      link: '/productivity',
    },
    {
      text: 'Logout',
      link: '/',
    },
   
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Header navbarLoginData={navbarLoginData} navbarDashboardData={navbarDashboardData} />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
