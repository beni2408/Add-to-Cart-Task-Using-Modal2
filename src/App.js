import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import Alert from "./components/Alert";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  // Function to add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      showAlert("Item already added to the cart");
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Function to show alert
  const showAlert = (message) => {
    setAlert({ show: true, message });
    setTimeout(() => {
      setAlert({ show: false, message: "" });
    }, 3000);
  };

  // Function to open cart modal
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  // Function to close cart modal
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navbar cartCount={cart.length} onCartClick={openCartModal} />

      <main className="container mx-auto px-4 py-12">
        <ProductList onAddToCart={addToCart} />
      </main>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        cart={cart}
        onRemoveFromCart={removeFromCart}
      />

      <Alert show={alert.show} message={alert.message} />
    </div>
  );
}

export default App;
