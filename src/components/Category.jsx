import PropTypes from 'prop-types';

function Category({ onCategoryChange }) {
  const handleClick = (category) => {
    // Call the callback function with the selected category
    onCategoryChange(category);
    console.log(category);
  };

  return (
    <div className="category shadow-md p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          type='radio'
          onClick={() => handleClick('all')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          All
        </button>
        <button
          type='radio'
          onClick={() => handleClick('meat')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Meat
        </button>
        <button
          type='radio'
          onClick={() => handleClick('vegetarian')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Vegetarian
        </button>
        <button
          type='radio'
          onClick={() => handleClick('beverages')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Beverages
        </button>
        <button
          type='radio'
          onClick={() => handleClick('daily-special')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Daily Special
        </button>
        <button
          type='radio'
          onClick={() => handleClick('deals')}
          className="btn btn-neutral hover:bg-primary hover:text-white"
        >
          Deals
        </button>
      </div>
    </div>
  );
}

Category.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default Category;
