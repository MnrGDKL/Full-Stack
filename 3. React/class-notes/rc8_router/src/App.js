import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

import Footer from './componenets/Footer';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/> 
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/details/:productId" element={<Details/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
        <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
