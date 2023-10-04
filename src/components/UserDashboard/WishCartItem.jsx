import Button from "../ui/Button";
import { AiOutlineClose } from "react-icons/ai";

const WishCartItem = () => {
  return (
    <div className="card card-side  shadow-md ">
      <figure className="">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="photo"
          className="w-32 h-full object-cover"
        />
      </figure>
      <div className="card-body relative">
        <h2 className="card-title">food 1</h2>
        <div>
          <p className="text-[#C837AB]">
            Calories : <span>400 cal</span>
          </p>
          <p className="text-red-500">
            Price : <span>400 $</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Button text="+ Add To Cart" variant="basic" size="small" />
          <Button text="Details" variant="outline" size="small" />
        </div>
        <div className="text-2xl absolute right-3 top-3 cursor-pointer text-red-500">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default WishCartItem;
