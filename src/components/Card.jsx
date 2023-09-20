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
 

      <div className="card card-compact bg-base-100">
  <figure><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{productData.title}</h2>
    <p>{productData.description}</p>
    <div className="card-actions justify-end">
    <Button text="+ Add to Cart" onClick={() => onAddToCartClick(productData)} />
    <Button text="Details" onClick={handleDetailsClick} />
    </div>
  </div>
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
