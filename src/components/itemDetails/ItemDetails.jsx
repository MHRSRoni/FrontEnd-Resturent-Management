import Button from "./Button";

const ItemDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="m-20">
        <h1 className="mb-10 text-center font-semibold text-3xl">
          Burger and Fries
        </h1>
        <div className="mb-10">
          <img
            className="rounded-xl w-full"
            src="https://img.freepik.com/premium-photo/beef-burgers-wooden-plate_396607-19753.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col sm:flex-row mb-10 items-center">
          <div className="flex">
            <p className="text-[#ff9137] mr-10 ml-10 text-lg ">Price: 10.5$</p>
            <p className="text-[#C837AB] text-lg">Calories: 400 cal</p>
          </div>

          <div className="ml-auto">
            <div className="flex mt-4 sm:mt-0">
              <Button title="+ Add to Wish List" />
              <Button title="+ Add to Cart" />
            </div>
          </div>
        </div>

        <p className="ml-10 mr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dolor dolores neque adipisci sapiente modi libero labore et dolorum id
          voluptatibus, saepe quis. Hic quos deleniti est, assumenda nostrum
          blanditiis quae sunt dicta. Modi maiores excepturi in, cum magni,
          sint, amet aut tempore nisi quod perspiciatis eius deleniti
          consequatur dolor a saepe soluta quaerat pariatur! <br /> <br />
          Odio officia dignissimos dolore at consectetur recusandae, voluptatem
          pariatur possimus temporibus placeat adipisci, aliquam reiciendis
          inventore consequuntur obcaecati sapiente soluta amet voluptatum eaque
          fuga reprehenderit repudiandae. Labore incidunt vel sunt fugiat unde
          nihil aliquid aut, animi quisquam at. Dolorem beatae itaque illum
          incidunt labore doloribus.
        </p>
      </div>
    </div>
  );
};

export default ItemDetails;
