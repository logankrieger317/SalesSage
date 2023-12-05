import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { BASE_URL } from '../../globals';

export default function BarProducts() {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error Fetching Products:', error);
    }
  };

  fetchProducts();
}, []);

const handleDelete = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/products/${id}`);
    const response = await axios.get(`${BASE_URL}/products`);
    setProducts(response.data);
  } catch (error) {
    console.error('Error Deleting Product:', error);
  }
};

const handleEdit = (product) => {
    setTitle(product.title);
    setDescription(product.description);
    setEditedProduct(product);
  }

  const handleUpdate = async () => {
    if (editedProduct) {
      try {
        const updatedProduct = { ...editedProduct, title, description };
        await axios.put(`${BASE_URL}/products/${editedProduct.id}`, updatedProduct);
        const response = await axios.get(`${BASE_URL}/products`);
        setProducts(response.data);
        setEditedProduct(null);
      } catch (error) {
        console.error('Error Updating Product:', error);
      }
    }
  }

  return (
  <>
    <Header />
    <div className="bg-green-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only"> Bar Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
        <div key={product.title} className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-green-100 shadow-lg">
              <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
            {editedProduct === product ? (
              <div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <button onClick={handleUpdate}>Save</button>
              </div>
              
                ) : (
              <>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">{product.brand}</p>
                  <p className="text-base font-medium text-gray-900">{product.price}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-2xl"
                  >
                    Add to cart
                  </button>
                  <button type="button" className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-200  shadow-2xl" onClick={() => handleEdit(product)}>
                    Update
                  </button>
                  <button type="button" className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-green-200  shadow-2xl" onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </div>
              </div>
              </>
            
            )}

          </div>
          </div>  
          ))}
    </div>
    </div>
    </div>
    <Footer />
  </>
  );

}
