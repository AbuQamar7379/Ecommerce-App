import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { addToCart, updateQuantity, removeFromCart } from "./utils/cart.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      toast.info("Product already in the cart!");
    } else {
      setCartItems((prevCart) => addToCart(prevCart, product));
      toast.success("Product added to cart!");
    }
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems((prevCart) => updateQuantity(prevCart, productId, quantity));
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevCart) => removeFromCart(prevCart, productId));
    toast.info("Product removed from cart.");
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={handleUpdateQuantity}
              removeItem={handleRemoveItem}
            />
          }
        />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;
