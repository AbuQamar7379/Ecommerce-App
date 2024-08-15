import React from "react";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const order = {
    name: query.get("name"),
    email: query.get("email"),
    mobile: query.get("mobile"),
    address: query.get("address"),
    total: query.get("total"),
    items: JSON.parse(decodeURIComponent(query.get("items") || "[]")),
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Your Order</h1>
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Order Details</h2>
        <p>
          <strong>Name:</strong> {order.name}
        </p>
        <p>
          <strong>Email:</strong> {order.email}
        </p>
        <p>
          <strong>Mobile Number:</strong> {order.mobile}
        </p>
        <p>
          <strong>Address:</strong> {order.address}
        </p>
        <p>
          <strong>Total Amount:</strong> ${order.total}
        </p>
        <h3 className="text-lg mt-4 mb-2">Purchased Items:</h3>
        <ul>
          {order.items.map((item) => (
            <li key={item.id} className="border-b py-2">
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
