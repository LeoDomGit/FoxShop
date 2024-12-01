// import axios from '../api/axios';

// export async function fetchAllProducts(filters) {
//   try {
//     const response = await axios.get('/products');
//     const totalPages = response.data.last_page;
//     let allProducts = response.data.data;

//     const requests = [];
//     for (let page = 2; page <= totalPages; page++) {
//       requests.push(axios.get(`/products?page=${page}`));
//     }

//     const responses = await Promise.all(requests);
//     responses.forEach((res) => {
//       allProducts = allProducts.concat(res.data.data);
//     });
//     return applyFilters(allProducts, filters);
//   } catch (error) {
//     console.error('Error fetching all products:', error);
//     return [];
//   }
// }

// function applyFilters(products, filters) {
//   return products.filter((product) => {
//     const matchesCategory =
//       !filters.category || product.id_category === filters.category;

//     const matchesBrand = !filters.brand || product.id_brand === filters.brand;

//     const matchesPrice =
//       product.price >= filters.minPrice && product.price <= filters.maxPrice;

//     return matchesCategory && matchesBrand && matchesPrice;
//   });
// }
// export async function fetchCategories() {
//   try {
//     const response = await axios.get('/categories');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return [];
//   }
// }

// export async function fetchBrands() {
//   try {
//     const response = await axios.get('/brands');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching brands:', error);
//     return [];
//   }
// }
