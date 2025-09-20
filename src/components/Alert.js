import React from "react";

const Alert = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed top-24 right-6 z-50 animate-slideInRight">
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-sm backdrop-blur-sm border border-red-300/20">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-t-2xl"></div>
      </div>
    </div>
  );
};

export default Alert;
