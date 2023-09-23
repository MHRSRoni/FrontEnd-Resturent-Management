import PropTypes from 'prop-types';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function CardComponent({ productData, handleAddToCartClick, handleDetailsClick }) {
  const navigate = useNavigate();

  handleAddToCartClick = () => {
    // Implement logic for adding to cart
    return console.log('Item added to cart');
  };

  handleDetailsClick = () => {
    // Navigate to the single item page with the product ID as a parameter
    return navigate(`/itemDetailsPage/${productData._id}`);
  };

  const truncateDescription = (description, wordCount) => {
    const words = description.split(' ');
    if (words.length <= wordCount) {
      return description;
    }
    return words.slice(0, wordCount).join(' ') + '...';
  };

  return (
    <div className="card mx-auto p-4 md:flex md:flex-wrap md:justify-between ">
      <div className='h-72 overflow-hidden'>

      <img
        src={productData.image}
        alt="Product"
        className="card-image h-auto"
        />
      </div>
      <div className="card-title">{productData.title}</div>
      <div className="card-description" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{truncateDescription(productData.description, 20)}</div>
      <div className="flex space-x-2">
        <div className="card-price text-[#d8392b]">Price: {productData.price}</div>
        <div className="card-calories text-[#C837AB]">Calories: {productData.calories}</div>
      </div>
      <div className="flex justify-between">
        <Button text="+ Add to Cart" onClick={handleAddToCartClick} />
        <Button text="Details" onClick={handleDetailsClick} />
      </div>
      <div className="card card-compact bg-base-100"></div>
    </div>
  );
}

CardComponent.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClick: PropTypes.func,
  handleDetailsClick: PropTypes.func,
};

export default CardComponent;
