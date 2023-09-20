import axios from 'axios';
import PropTypes from 'prop-types';

function CategoryComponent({ onCategoryChange }) {
  const handleCategoryClick = (category) => {
    // Send a GET request to the backend to filter products by category
    axios
      .get(`/api/products?category=${category}`)
      .then((response) => {
        // Call a callback function to pass the filtered products back to the parent component
        onCategoryChange(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products by category:', error);
      });
  };

  return (
    <div className="category shadow-md p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => handleCategoryClick('all')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('meat')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Meat
        </button>
        <button
          onClick={() => handleCategoryClick('vegetarian')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Vegetarian
        </button>
        <button
          onClick={() => handleCategoryClick('beverage')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Beverage
        </button>
        <button
          onClick={() => handleCategoryClick('daily-special')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Daily Special
        </button>
        <button
          onClick={() => handleCategoryClick('deals')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Deals
        </button>
      </div>
    </div>
  );
}

CategoryComponent.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryComponent;
