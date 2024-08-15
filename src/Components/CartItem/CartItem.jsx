import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover"
      />
      <div>
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div className="flex items-center">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      </div>
      <button onClick={() => removeItem(item.id)} className="text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
