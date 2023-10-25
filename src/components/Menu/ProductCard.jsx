import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { title, image, price, _id, calories, description } = item;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl group/item relative">
      <figure className="">
        <img
          src={image}
          alt="product"
          className="w-full h-48  object-cover hover:bg-orange-400"
        />
      </figure>
      <div
        className={`absolute top-0 left-0 w-full h-48 bg-[#0000007e] rounded-t-2xl invisible group-hover/item:visible`}
      >
        <div className="text-3xl p-3 text-primary  cursor-pointer">
          {/* {true ? <AiFillHeart /> : } */}
          <AiOutlineHeart />
        </div>
      </div>
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
          <div className="flex justify-between items-center gap-2 mt-2 ">
            <div className="card-actions justify-start">
              <Button text="+ Add to Cart" variant="basic" size="small" />
            </div>
            <div className="card-actions justify-end">
              <Button
                text="Details"
                variant="outline"
                size="small"
                onClick={() => navigate(`/itemDetailsPage/${_id}`)}
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xl text-center py-2">No item found</p>
      )}
    </div>
  );
};

export default ProductCard;
