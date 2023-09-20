import { useState, useEffect } from 'react';
/* import axios from 'axios'; */
import Card from '../components/Card'; // Import your CardComponent

const sampleData = [
  {
    id: 1,
    image: 'Photo by Chan Walrus from Pexels: https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/',
    title: 'Product 1',
    description: 'Description for Product 1',
    price: 9.99,
    calories: 150,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 2',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 3',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Product 4',
    description: 'Description for Product 2',
    price: 12.99,
    calories: 200,
  },
  // Add more mock product data as needed
];


function ProductList() {

  const [products, setProducts] = useState([]);
  // axios get request goes here
  useEffect(() => /* {
    // Define the API endpoint URL
    const apiUrl = '/api/products'; // Replace with your actual API endpoint URL

    // Make a GET request to the backend
    axios.get(apiUrl)
      .then((response) => {
        // Handle the response data by setting it in state
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching products:', error);
      });
  },  []*/  setProducts(sampleData), []  );

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-semibold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
