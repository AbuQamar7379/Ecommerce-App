import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../Button/Button";

const Card = ({ product, addToCart }) => {
  const filledStars = Math.floor(product.rating.rate);
  const emptyStars = 5 - filledStars;

  return (
    <div className="border p-4 rounded shadow-lg flex flex-col justify-between h-full">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4"
        />
        <h2 className="font-bold text-lg mb-2">{product.title}</h2>
        <div className="flex mb-2">
          {[...Array(filledStars)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <FaStar key={index} className="text-gray-300" />
          ))}
        </div>
        <p className="font-bold">${product.price.toFixed(2)}</p>
      </div>
      <Button
        text="Add to Cart"
        onClick={() => addToCart(product)}
        fullWidth={true}
        className="bg-blue-500 text-white mt-4 py-2 px-4 rounded w-full"
      />
    </div>
  );
};

export default Card;
