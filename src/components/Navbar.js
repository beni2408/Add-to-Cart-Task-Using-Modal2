import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-2xl sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              ShopCart
            </h1>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-3 border border-white/20 hover:border-white/40 hover:scale-105 shadow-lg"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
              />
            </svg>
            <span className="font-semibold text-lg">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm rounded-full h-8 w-8 flex items-center justify-center font-bold shadow-lg animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
