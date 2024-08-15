import React from "react";
import { Link } from "react-router-dom";
import { IoCart, IoBagCheck } from "react-icons/io5";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md">
      <div className="text-2xl font-extrabold">
        <Link to="/" className="hover:text-gray-300 transition duration-200">
          E-Commerce
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/orders"
          className="flex items-center space-x-2 hover:text-gray-300 transition duration-200"
        >
          <IoBagCheck className="w-6 h-6" />
          <span>Your Orders</span>
        </Link>

        <div className="relative">
          <Link
            to="/cart"
            className="flex items-center space-x-2 hover:text-gray-300 transition duration-200"
          >
            <IoCart className="w-8 h-8" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-6 h-6 flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
