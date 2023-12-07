

export default function Modal({ product, addToCart, handleCloseModal }) {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center">
        <div className="bg-white rounded-lg overflow-hidden max-w-4xl">
            <div className="flex">
            <div className="w-1/2">
                <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover"
                />
            </div>
            <div className="w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="mb-2">{product.description}</p>
                <p className="mb-4">{product.options}</p>
                <p className="text-2xl font-bold mb-2">{product.price}</p>
                <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => {
                    addToCart(product);
                    handleCloseModal();
                }}
                >
                Add To Cart
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    }
