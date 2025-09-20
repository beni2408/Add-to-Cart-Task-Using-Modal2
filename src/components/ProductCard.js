import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-purple-600 capitalize">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors duration-300">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
          </div>
          <div className="flex items-center bg-yellow-50 rounded-full px-3 py-1">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-sm font-semibold text-gray-700 ml-1">
              {product.rating?.rate || "N/A"}
            </span>
            <span className="text-xs text-gray-500 ml-1">
              ({product.rating?.count || 0})
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 hover:shadow-lg hover:scale-105 active:scale-95 group"
        >
          <span className="flex items-center justify-center space-x-2">
            <svg
              className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Add to Cart</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
