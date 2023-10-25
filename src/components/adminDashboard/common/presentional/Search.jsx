
const Search = () => {
   return (
      <div className="bg-gray-50 w-96 relative ">
         <input
            type="text "
            className="bg-gray-100 py-1 px-3 text-base rounded-md   w-96"
         />
         <p className="bg-gray-300 px-2 py-1 cursor-pointer font-normal text-base rounded-e-md absolute top-0 end-0 ">
            Search
         </p>
      </div>
   );
};

export default Search;
