import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { fetchProducts } from "../../utils/api";
import ReactPaginate from "react-paginate";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const handleSearch = (term) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container mx-auto p-4">
      <Search searchProducts={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts
          .slice(pagesVisited, pagesVisited + productsPerPage)
          .map((product) => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Home;
