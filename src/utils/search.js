// searchProducts.js

export default function searchProducts(products, searchTerm) {
    // Convert the search term to lowercase for case-insensitive matching
    const searchTermLower = searchTerm.toLowerCase().trim();
  
    // Filter the products array based on the search term
    const filteredProducts = products.filter((product) => {
      // Convert the product name to lowercase for case-insensitive matching
      const productNameLower = product.title.toLowerCase();
  
      // Check if the product name contains the search term
      return productNameLower.includes(searchTermLower);
    });
  
    return filteredProducts;
  }
  