import PropTypes from 'prop-types';
import Button from './Button';


function CardComponent({ productData, onAddToCartClick, handleDetailsClick }) {
  
  /* const cardStyle = {
    border: '5px solid red',
    
  }; */

   handleDetailsClick = () => {
    // Change the template literal to Navigate to the single item page with the product ID as a parameter
    console.log("this is where the product page route goes");
  };

  return (
    <div className="card mx-auto p-4 md:flex md:flex-wrap md:justify-between">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"/* {productData.image} */ alt="Product" className="card-image" />
      <div className="card-title">{productData.title}</div>
      <div className="card-description">{productData.description}</div>
      <div className='flex space-x-2'>
        
      <div className="card-price">Price: {productData.price}</div>
      <div className="card-calories">Calories: {productData.calories}</div>

      </div>
      <div className='flex space-x-2'>
        
      <Button text="+ Add to Cart" onClick={() => onAddToCartClick(productData)} />
      <Button text="Details" onClick={handleDetailsClick} />
      </div>
    </div>
  );
}

CardComponent.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired, // Add this line for product ID
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClick: PropTypes.func.isRequired,
  handleDetailsClick: PropTypes.func.isRequired,
};

export default CardComponent;
