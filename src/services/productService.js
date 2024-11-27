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

// Lấy danh mục sản phẩm
export async function fetchCategories() {
  try {
    const response = await axios.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Lấy thuộc tính sản phẩm (màu sắc, kích thước, v.v.)
export async function fetchAttributes() {
  try {
    const response = await axios.get('/attributes');
    return response.data.attributes;
  } catch (error) {
    console.error('Error fetching attributes:', error);
    return [];
  }
}
