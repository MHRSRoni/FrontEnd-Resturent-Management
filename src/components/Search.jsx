import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <input
        type="text"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={handleInputChange}
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
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
