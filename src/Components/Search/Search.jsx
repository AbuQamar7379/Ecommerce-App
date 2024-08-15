import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ searchProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      searchProducts(searchTerm);
    } else {
      searchProducts("");
    }
  }, [searchTerm, searchProducts]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search products..."
      />
      <FiSearch className="absolute left-3 top-3 w-6 h-6 text-gray-400" />
    </div>
  );
};

export default Search;
