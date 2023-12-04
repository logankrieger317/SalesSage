import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Components/ThemeProvider.jsx';
import  CartContext  from './Components/CartContext.jsx';
import { CartProvider } from './Components/CartProvider.jsx';

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
        <CartProvider>
          <CartContext.Provider value={{ cart, addToCart }}>
            <App />
          </CartContext.Provider>
        </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);