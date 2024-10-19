import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import ProductItem from '../components/ProductItem';
import { CiFilter } from 'react-icons/ci';

function ProductPage() {
  useEffect(() => {
    document.title = 'Sản phẩm';
  }, []);

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const closeFilter = () => {
    setIsFilterVisible(false);
  };

  return (
    <div>
      <Header />

      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-medium'>Tất cả sản phẩm</h1>
          <div className='flex'>
            <button
              onClick={toggleFilter}
              className='bg-[#f5f5f5] p-2 rounded-md flex items-center font-medium'
            >
              <CiFilter />
              <span className='ml-2 text-sm'>Lọc</span>{' '}
            </button>
          </div>
        </div>

        {/* Cột bên phải - Danh sách sản phẩm */}
        <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>

      {isFilterVisible && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex z-50'
          onClick={closeFilter}
        >
          <div
            className={`bg-white w-4/5 max-w-xs h-full transform transition-transform duration-300 ${
              isFilterVisible ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Filter />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProductPage;
