import React, { useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import CheckoutPopup from "../../components/CheckoutPopup/CheckoutPopup";
import { toast } from "react-toastify";

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePlaceOrder = (formData) => {
    const orderItems = cartItems.map((item) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    window.location.href = `/orders?name=${formData.name}&email=${
      formData.email
    }&mobile=${formData.mobile}&address=${
      formData.address
    }&total=${calculateTotal()}&items=${encodeURIComponent(
      JSON.stringify(orderItems)
    )}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <div className="text-right mt-4">
            <h2 className="text-xl">Total: ${calculateTotal()}</h2>
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-blue-500 text-white p-2 rounded mt-2"
            >
              Checkout
            </button>
          </div>
          {showCheckout && (
            <CheckoutPopup
              totalAmount={calculateTotal()}
              onClose={() => setShowCheckout(false)}
              onPlaceOrder={handlePlaceOrder}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
