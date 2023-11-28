// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import Cart from './Cart';
// import Modal from './Modal';


// const DogProducts = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div>
//       <Header />
//       <h1>Dog Products</h1>
//       {/* Render the dog products */}
//       {dogProducts.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <button onClick={() => handleProductClick(product)}>Add to Cart</button>
//         </div>
//       ))}
//       {/* Render the Cart component */}
//       <Cart selectedProduct={selectedProduct} />
//       <Footer />
//     </div>
//   );
// };

// export default DogProducts;

export default function Cart({ selectedProduct }) {
    return (
        <div>
        {/* Render the Modal component */}
        {selectedProduct && <Modal product={selectedProduct} />}
        </div>
    );
    }