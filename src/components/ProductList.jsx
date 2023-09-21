import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { BASE_URL } from '../App';
import Category from '../components/Category';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define the callback function to update the selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    let apiUrl = BASE_URL + '/all-food'; // Default API URL for 'all' category

    // Check if the selectedCategory is not 'all', then update apiUrl
    if (selectedCategory !== 'all') {
      apiUrl = BASE_URL + `/food/category/${selectedCategory}`;
    }

    // Make an Axios call using the apiUrl to fetch products
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [selectedCategory]); 

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-semibold mb-4">Product List</h1>
      {/* Pass the callback function to the Category component */}
      <Category onCategoryChange={handleCategoryChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Card productData={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
