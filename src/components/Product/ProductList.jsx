import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../Search";
import Loader from "../Line-Loader/Loader";
import { BASE_URL } from "../../App";
import ProductCard from "./ProductCard";
import CardSalton from "../Line-Loader/CardSalton";
import Category from "../Category/Category";
import ReactPaginate from "react-paginate";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [input, setInput] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleChangeCategory = (value) => {
    setSearchValue("");
    setInput("");
    setCategory(value);
    setPageNumber(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const val = input;
    setSearchValue(val.toLowerCase());
    setCategory("");
    setPageNumber(1);
  };

  // Url define
  let URL;
  if (searchValue) {
    URL = `${BASE_URL}/food?search=${searchValue}&pageNumber=${pageNumber}`;
  } else if (category) {
    URL = `${BASE_URL}/food?category=${category}&pageNumber=${pageNumber}`;
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
          setTotalPage(response?.data?.totalPage);
        } else {
          searchValue([]);
        }
      })
      .catch((error) => {
        if (error?.response.status === 404) {
          setProducts([
            {
              title: "",
              image:
                "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg",
              price: "",
              _id: "",
              calories: "",
              description: "",
            },
          ]);
          setTotalPage(1);
        }

        console.log(error?.response?.data?.error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue, category, pageNumber, URL]);

  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
  };

  return (
    <>
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
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"list-none flex justify-center items-center mt-10"}
        pageClassName={"bg-neutral cursor-pointer"}
        pageLinkClassName={"p-3 inline-block"}
        previousClassName={
          "bg-neutral cursor-pointer rounded-tl-lg rounded-bl-lg"
        }
        previousLinkClassName={"p-3 inline-block"}
        nextClassName={"bg-neutral cursor-pointer rounded-tr-lg rounded-br-lg"}
        nextLinkClassName={"p-3 inline-block"}
        breakClassName={"bg-neutral cursor-pointer"}
        breakLinkClassName={"p-3 inline-block"}
        activeClassName={"active"}
      />
    </>
  );
}

export default ProductList;
