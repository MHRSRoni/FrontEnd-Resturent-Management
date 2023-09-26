import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../Search";
import Loader from "../Line-Loader/Loader";
import { BASE_URL } from "../../App";
import ProductCard from "./ProductCard";
import CardSalton from "../Line-Loader/CardSalton";
import Category from "../Category/Category";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleChangeCategory = (value) => {
    setSearchValue("");
    setInput("");
    setCategory(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const val = input;
    setSearchValue(val.toLowerCase());
    setCategory("");
  };

  // Url define
  let URL;
  if (searchValue) {
    URL = `${BASE_URL}/food?search=${searchValue}&pageNumber=1`;
  } else if (category) {
    URL = `${BASE_URL}/food?category=${category}&pageNumber=1`;
  } else {
    URL = `${BASE_URL}/food?pageNumber=${pageNumber}`;
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response?.data?.data);
        } else {
          searchValue([]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue, category]);

  return (
    <div className="py-2 px-4">
      <SearchBar
        onChangeHandler={handleSearch}
        input={input}
        setInput={setInput}
      />
      <Category onChangeHandler={handleChangeCategory} />
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {products.length !== 0 ? (
          products.map((item) => <ProductCard key={item._id} item={item} />)
        ) : (
          <>
            <CardSalton />
            <CardSalton />
            <CardSalton />
            <CardSalton />
            <CardSalton />
            <CardSalton />
            <CardSalton />
            <CardSalton />
          </>
        )}
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default ProductList;
