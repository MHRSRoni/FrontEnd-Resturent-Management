
import SearchBar from '../components/Search';
import search from '../utils/search.js';
import ProductList from '../components/ProductList'; // Create a ProductList component to display the products
 import { useState } from 'react';

function MenuPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;


  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchTerm) => {
    // Implement a search function to filter products by name
    const filteredData = search(searchTerm); // Replace with your actual search logic
    setFilteredProducts(filteredData);
  };

   // Calculate the total number of pages
   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

   
   
   const startIndex = (currentPage - 1) * productsPerPage;
   const endIndex = startIndex + productsPerPage;
   const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
   
   // Generate an array of page numbers
   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
   
  // Render the CategoryComponent and ProductList
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className="menu-page">
        <h1 className="text-4xl font-bold text-center my-6">Our Menu</h1>
        <SearchBar onSearch={handleSearch} />
        <ProductList products={productsToDisplay} /> {/* Display only the products for the current page */}
        
        {/* Pagination controls */}
        <div className="pagination">
          {pageNumbers.map((pageNumber) => (
            <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
