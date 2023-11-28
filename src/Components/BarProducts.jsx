import React from 'react'
import Header from './Header'
import Footer from './Footer'


const barProducts = [
  {
    id: 1,
    name: 'Craft Beer Sampler',
    href: '#',
    price: '$15',
    description: 'Experience a variety of handcrafted beers with our Craft Beer Sampler. Perfect for beer enthusiasts looking to explore different flavors and styles.',
    options: '12 beers',
    imageSrc: 'https://i5.walmartimages.com/seo/Beer-Tasting-Flight-Sampler-Set-of-4-6oz-Pilsner-Craft-Brew-Glasses-with-Paddle-and-Chalkboard-Great-Gift_0ae1b549-8036-4886-a932-6fec4d573d0b.f8990d3e44af450581e3153bd86be86f.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    imageAlt: 'Assortment of craft beers in tasting glasses.',
  },
  {
    id: 2,
    name: 'Signature Cocktail',
    href: '#',
    price: '$10',
    description: 'Indulge in our Signature Cocktail, expertly crafted with premium spirits and fresh ingredients. A perfect blend of flavors that will elevate your drinking experience.',
    options: 'Various options',
    imageSrc: 'https://talesofthecocktail.org/wp-content/uploads/2016/01/How-to-Create-Your-Bars-Signature-Cocktail.jpg',
    imageAlt: 'Glass of a beautifully garnished cocktail.',
  },
  {
    id: 3,
    name: 'Bar Snack Platter',
    href: '#',
    price: '$18',
    description: 'Satisfy your cravings with our Bar Snack Platter. A delicious assortment of savory snacks, perfect for sharing with friends while enjoying your favorite drink.',
    options: 'Assorted snacks',
    imageSrc: 'https://static1.bigstockphoto.com/2/3/3/large2/332293639.jpg',
    imageAlt: 'Platter of various bar snacks like nachos, chicken wings, and sliders.',
  },
  {
    id: 4,
    name: 'Wine Flight',
    href: '#',
    price: '$20',
    description: 'Embark on a wine tasting journey with our Wine Flight. Sample a selection of exquisite wines from around the world, carefully curated to delight your palate.',
    options: '5 wines',
    imageSrc: 'https://static2.bigstockphoto.com/6/7/4/large2/476973097.jpg',
    imageAlt: 'Wine glasses arranged in a flight pattern.',
  },
  {
    id: 5,
    name: 'Whiskey Tasting',
    href: '#',
    price: '$25',
    description: 'Discover the rich and complex flavors of premium whiskeys with our Whiskey Tasting experience. Immerse yourself in the world of whiskey and savor the nuances of each sip.',
    options: '4 whiskeys',
    imageSrc: 'https://static1.bigstockphoto.com/7/6/4/large2/467456579.jpg',
    imageAlt: 'Glencairn whiskey glasses with different types of whiskey.',
  },
  {
    id: 6,
    name: 'Mocktail Sampler',
    href: '#',
    price: '$12',
    description: 'Enjoy the refreshing flavors of our Mocktail Sampler. Perfect for those who prefer non-alcoholic beverages, this sampler offers a variety of mocktails that are both delicious and visually appealing.',
    options: '6 mocktails',
    imageSrc: 'https://static3.bigstockphoto.com/0/7/4/large2/470833915.jpg',
    imageAlt: 'Assortment of colorful mocktails in fancy glasses.',
  },
  {
    id: 7,
    name: 'Craft Beer Flight',
    href: '#',
    price: '$18',
    description: 'Experience a variety of craft beers with our Craft Beer Flight. Sample a selection of unique and flavorful beers from local breweries.',
    options: '4 beers',
    imageSrc: 'https://static3.bigstockphoto.com/3/6/1/large2/163619132.jpg',
    imageAlt: 'Assortment of craft beers in small glasses.',
  },
  {
    id: 8,
    name: 'Gin and Tonic',
    href: '#',
    price: '$10',
    description: 'Sip on the classic and refreshing combination of gin and tonic. Our expertly mixed Gin and Tonic is the perfect choice for gin enthusiasts.',
    options: 'Various options',
    imageSrc: 'https://static1.bigstockphoto.com/2/7/4/large2/472258823.jpg',
    imageAlt: 'Glass of gin and tonic with garnish.',
  },
  {
    id: 9,
    name: 'Mojito',
    href: '#',
    price: '$12',
    description: 'Transport yourself to a tropical paradise with our refreshing Mojito. Made with fresh mint, lime, and rum, it\'s the perfect cocktail to beat the heat.',
    options: 'Various options',
    imageSrc: 'https://static2.bigstockphoto.com/5/4/4/large2/445918337.jpg',
    imageAlt: 'Glass of mojito with mint leaves and lime slice.',
  },
]

export default function Bar() {
  return (
    <>
    <Header />
    <div className="bg-green-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only"> Bar Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {barProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-green-100 shadow-lg"
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
