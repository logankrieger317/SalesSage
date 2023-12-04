import React, { useState } from 'react';

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart); // Log the current cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;