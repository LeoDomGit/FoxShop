import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';
import { CiFilter } from 'react-icons/ci';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    sortPrice: '',
  });

  useEffect(() => {
    document.title = 'Sản phẩm';
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = { ...filters, page: currentPage };
        const response = await axios.get('/products', { params });
        let fetchedProducts = response.data.data;

        setProducts(fetchedProducts);
        setTotalPages(response.data.last_page);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Không có sản phẩm
          setProducts([]);
          setTotalPages(1);
        } else {
          console.error('Error fetching products:', error);
        }
      }
    };

    fetchProducts();
  }, [currentPage, filters]);

  const handleApplyFilter = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setFilters({
      category: '',
      brand: '',
      minPrice: '',
      maxPrice: '',
      sortPrice: '',
    });
    setCurrentPage(1);
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[22px] font-medium'>
              <Link to='/products'>Tất cả sản phẩm</Link>
            </h1>
            <button
              onClick={toggleFilter}
              className='bg-[#fe5c17] hover:bg-[#f8724d] p-2 text-white rounded-md shadow-md flex items-center gap-2 font-medium text-base'
            >
              <CiFilter className='text-lg' />
              <span className=''>Lọc</span>
            </button>
          </div>
          {products.length > 0 ? (
            <>
              <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
                {products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </>
          ) : (
            <div className='text-center text-gray-500 mt-8'>
              Không tìm thấy sản phẩm phù hợp.
            </div>
          )}
        </div>
      </main>

      {isFilterVisible && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex z-50'
          onClick={() => setIsFilterVisible(false)}
        >
          <div
            className='bg-white w-4/5 max-w-xs h-full transform transition-transform duration-300 translate-x-0'
            onClick={(e) => e.stopPropagation()}
          >
            <Filter
              filters={filters}
              onApplyFilter={handleApplyFilter}
              onClearFilter={handleClearFilter}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProductPage;
