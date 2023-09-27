import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { title, image, price, _id, calories, description } = item;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="product" className="w-full h-48 object-cover" />
      </figure>
      {_id ? (
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="">{description.slice(0, 135)} ...</p>

          <div className="flex justify-between items-center ">
            <p className="text-start">
              <span>Price :</span> {price} BDT
            </p>
            <p className="text-end">
              <span>Calories :</span> {calories} cal
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="card-actions justify-start">
              <button className="btn btn-primary btn-sm  hover:text-white">
                + Add to Cart
              </button>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary btn-sm  hover:text-white"
                onClick={() => navigate(`/itemDetailsPage/${_id}`)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl text-center">No item found</p>
      )}
    </div>
  );
};

export default ProductCard;
