import Rating from "./Rating";

const SingleComment = () => {
  return (
    <div className="mb-10 border-b sm:border-orange-500">
      <div className="mb-10 flex">
        <div className="w-1/6">
          <img
            className="w-28 h-28 mb-3 rounded-full shadow-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="customer profile pic"
          />
        </div>
        <div className="w-5/6">
          <div className="flex mb-2">
            <h1 className="mr-20">Jhon doe</h1>
            <Rating />
          </div>
          <div>
            <h1 className="mb-2">10/12/23</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              reprehenderit placeat vero assumenda, nam mollitia itaque
              cupiditate alias! Sint, reiciendis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
