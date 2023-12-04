import React from 'react';

const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
});

export default CartContext;
   
