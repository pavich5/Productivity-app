import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContent from './MainContent/MainContent';
import Header from './header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <MainContent/>
  </React.StrictMode>
);
