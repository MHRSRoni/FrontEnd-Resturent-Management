import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
/* import search from "../utils/search" */
import axios from 'axios';
import { BASE_URL } from '../App';

const SearchBar = ( {setProducts} ) => {


  const [search, setSearch] = useState(false)
  
  const searchTerm = useRef(null)

  function handleSearch(){

    setSearch((previousState) => !previousState)
    


  }

  useEffect(() => {
    let apiUrl = BASE_URL + '/all-food'; // Default API URL for 'all' category

    // Check if there's a searchTerm, then update apiUrl
    if (searchTerm.current.value) {
      apiUrl = BASE_URL + `/food/search?keyword=${searchTerm.current.value}`;
    }

    // Make an Axios call using the apiUrl to fetch products
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        setProducts([])
        console.error('Error fetching products:', error);
      });
  }, [search]);


  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <input
        type="text"
        placeholder="Search for a product"
        ref={searchTerm}
        className="w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-opacity-50 focus:ring-orange-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 btn-primary text-black rounded-lg shadow-md hover:bg-orange-600 hover:text-white focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-orange-500"
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setProducts: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired, // Pass searchTerm as a prop
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
