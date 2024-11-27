import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';
import { CiFilter } from 'react-icons/ci';
import {
  fetchAllProducts,
  fetchCategories,
  fetchBrands,
} from '../services/productService';

function ProductPage() {
  useEffect(() => {
    document.title = 'Sản phẩm';
  }, []);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    category: null,
    brand: null,
    minPrice: 50000,
    maxPrice: 5000000,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        const brandsData = await fetchBrands();

        setCategories(categoriesData);
        setBrands(brandsData);

        const productsData = await fetchAllProducts(filters);
        setProducts(productsData);
        setTotalPages(Math.ceil(productsData.length / 16));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters]); // Re-fetch when filters change

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, ...newFilters };
      return updatedFilters;
    });
  };

  const toggleFilter = () => setIsFilterVisible(!isFilterVisible);
  const closeFilter = () => setIsFilterVisible(false);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-medium'>Tất cả sản phẩm</h1>
            <button
              onClick={toggleFilter}
              className='bg-[#f5f5f5] p-2 rounded-md flex items-center font-medium'
            >
              <CiFilter />
              <span className='ml-2 text-sm'>Lọc</span>
            </button>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          {products.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </main>

      {isFilterVisible && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex z-50'
          onClick={closeFilter}
        >
          <div
            className='bg-white w-4/5 max-w-xs h-full transform transition-transform duration-300 translate-x-0'
            onClick={(e) => e.stopPropagation()}
          >
            <Filter
              categories={categories}
              brands={brands}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={() =>
                setFilters({
                  category: null,
                  brand: null,
                  minPrice: 50000,
                  maxPrice: 5000000,
                })
              }
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProductPage;
