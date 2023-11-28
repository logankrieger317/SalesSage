// import React { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import Modal from './Modal';

const dogProducts = [
    

  {
    id: 1,
    name: 'Dog Food',
    href: 'Cart',
    price: '$15',
    description: 'High-quality dog food made with natural ingredients to keep your furry friend healthy and happy.',
    options: 'Various options',
    imageSrc: 'https://static1.bigstockphoto.com/6/7/1/large2/17669930.jpg',
    imageAlt: 'Dog food in a bowl.',
  },
  {
    id: 2,
    name: 'Dog Treats',
    href: '#',
    price: '$10',
    description: 'Delicious and nutritious treats for rewarding your dog during training or as a special snack.',
    options: 'Various options',
    imageSrc: 'https://static1.bigstockphoto.com/8/7/4/large2/478127583.jpg',
    imageAlt: 'Assortment of dog treats.',
  },
  {
    id: 3,
    name: 'Dog Toys',
    href: '#',
    price: '$18',
    description: 'Fun and interactive toys to keep your dog entertained and mentally stimulated.',
    options: 'Various options',
    imageSrc: 'https://static1.bigstockphoto.com/7/6/4/large2/467539459.jpg',
    imageAlt: 'Assortment of dog toys.',
  },
   {
    id: 4,
    name: 'Day Pass',
    href: '#',
    price: '$13',
    description: 'Enjoy a day of fun and activities for your dog with our Day Pass. Give your furry friend a chance to socialize and play in a safe and supervised environment.',
    options: 'One day access',
    imageSrc: 'https://static1.bigstockphoto.com/5/7/4/large2/475781933.jpg',
    imageAlt: 'Dog playing in a daycare facility.',
  },
  {
    id: 5,
    name: 'Monthly Membership',
    href: '#',
    price: '$35',
    description: 'Get unlimited access to our dog facilities and services with our Monthly Membership. Enjoy exclusive perks and discounts for a whole month.',
    options: 'Unlimited access for a month',
    imageSrc: 'https://static2.bigstockphoto.com/9/5/4/large2/459770691.jpg',
    imageAlt: 'Dog with a membership card.',
  },
  {
    id: 6,
    name: 'Annual Membership',
    href: '#',
    price: '$350',
    description: 'Experience the ultimate convenience and savings with our Annual Membership. Enjoy unlimited access and exclusive benefits for an entire year.',
    options: 'Unlimited access for a year',
    imageSrc: 'https://static2.bigstockphoto.com/5/6/4/large2/465175831.jpg',
    imageAlt: 'Dog with an annual membership card.',
  },
];

const handleProductClick = (product) => {
  addToCart(product);
};



export default function DogProducts() {
  return (
    <>
    
    <Cart/>
      <Header />
      <div className="bg-green-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Dog Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 ">
            {dogProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-green-200"
              >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">{product.options}</p>
                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                  </div>
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