// src/services/productService.js
import axios from '../api/axios';

export async function fetchAllProducts() {
  try {
    const response = await axios.get('/products');
    const totalPages = response.data.last_page;
    let allProducts = response.data.data;

    const requests = [];
    for (let page = 2; page <= totalPages; page++) {
      requests.push(axios.get(`/products?page=${page}`));
    }

    const responses = await Promise.all(requests);
    responses.forEach((res) => {
      allProducts = allProducts.concat(res.data.data);
    });

    return allProducts;
  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
}

// Search function
export async function searchProducts(query) {
  try {
    // Ensure query is correctly sent
    const response = await axios.get(`/products/search?q=${query}`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching search results:', error);
    return [];
  }
}
