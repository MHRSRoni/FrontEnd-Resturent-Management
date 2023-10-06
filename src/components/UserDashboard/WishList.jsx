import WishCartItem from "./WishCartItem";

const WishList = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Wish List</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <div className="grid grid-cols-2 gap-4">
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
          <WishCartItem />
        </div>
      </div>
    </div>
  );
};

export default WishList;
