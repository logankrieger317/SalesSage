import React from 'react'
import Header from './Header'
import Footer from './Footer'


const products = [
  {
    id: 1,
    name: 'Bar Products',
    href: 'BarProducts',
    imageSrc: 'https://i5.walmartimages.com/seo/Beer-Tasting-Flight-Sampler-Set-of-4-6oz-Pilsner-Craft-Brew-Glasses-with-Paddle-and-Chalkboard-Great-Gift_0ae1b549-8036-4886-a932-6fec4d573d0b.f8990d3e44af450581e3153bd86be86f.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
   
  },
  {
    id: 2,
    name: 'Dog Products',
    href: 'DogProducts',
    imageSrc: 'https://static1.bigstockphoto.com/8/7/4/large2/478615879.jpg',
    
  },
  
]

export default function POS() {
  return (
    <>
    <Header />
    <div className="bg-green-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only"> Bar Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
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
  )
}
