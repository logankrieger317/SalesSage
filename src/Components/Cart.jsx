import React, { useContext } from 'react';
import  CartContext  from './CartContext';
import Header from './Header';
import Footer from './Footer';

export default function Cart() {
  const { cart } = useContext(CartContext);

  console.log(cart); // Log the cart items

  return (
    <>
      <Header />
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3> {/* Display the name of the item */}
            <h4>{item.price}</h4> {/* Display the price of the item */}
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p> // If the cart is empty, display this message
      )}
      <Footer/>
    </>
  );
}