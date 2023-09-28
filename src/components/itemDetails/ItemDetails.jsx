import Button from "../Button";
import Button2 from "../Button2";
import RelatedFood from "./RelatedFood";
import axios from "axios";
import { BASE_URL } from "../../App";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const [foodData, setFoodData] = useState({});
  const [relatedFood, setRelatedFood] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/food/id/${id}`)
      .then((response) => {
        setFoodData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  useEffect(() => {
    if (foodData.category) {
      axios
        .get(`${BASE_URL}/food/category/${foodData.category}`)
        .then((response) => {
          const data = response.data.data;
          const filterData = data.filter((item) => item._id !== id);
          setRelatedFood(filterData);
        })
        .catch((error) => {
          console.error("Error fetching data category api:");
        });
    }
  }, [foodData.category, id]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row m-10">
        <div className="w-full sm:w-2/3">
          <h1 className="mb-8 text-center font-semibold text-2xl">
            {foodData.title}
          </h1>
          <div className="sm:h-[32rem] mb-6 sm:mb-10">
            <div className="mb-5 w-full h-[28rem]">
              <img
                className="rounded-xl w-full h-full object-cover"
                src={foodData.image}
                alt={foodData.title}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex">
                <p className="text-[#615851] mr-4 ml-0 sm:ml-10 text-lg ">
                  Price: {foodData.price} BDT
                </p>
                <p className="text-[#C837AB] text-lg">
                  {foodData.calories} calories
                </p>
              </div>

              <div className="ml-auto">
                <div className="flex mt-4 sm:mt-0">
                  <Button2 text="+ Add to Wish List" onClick={() => {}} />
                  <Button
                    text="+ Add to Cart"
                    className=" mr-10 ml-4"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="sm:ml-10 sm:mr-10">{foodData.description}</p>
        </div>
        <div className="w-full sm:w-1/3">
          <h1 className="mb-4 sm:mb-8 mt-6 sm:mt-0 text-center font-semibold text-2xl">
            Related Foods
          </h1>
          <div className="h-fixed overflow-auto sm:ml-4 sm:border-l sm:border-orange-500">
            {relatedFood.map((data) => (
              <RelatedFood key={data._id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
