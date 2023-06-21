import './App.css'
import Footer from './layouts/footer/footer';
import Header from './layouts/header/Header';
import Products from './components/Products/products';

function App() {
  return (
    <div className='App'>
    <Header/>
    <h2 className='productText'>Products:</h2>
    <Products/>
    <Footer/>
    </div>

  )
}

export default App
