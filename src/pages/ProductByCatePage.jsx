
/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPageByCategory = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Hàm gọi API để lấy sản phẩm theo danh mục
  const fetchProductsByCategory = async () => {
    try {
      const response = await axios.get(`/categories/${categorySlug}`, {
        params: {
          page: currentPage,
        },
      });
      setProducts(response.data.data);
      setTotalPages(response.data.meta.total_pages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [categorySlug, currentPage]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
          <h1 className='text-xl font-medium'>
            Sản phẩm thuộc danh mục: {categorySlug}
          </h1>

          <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
            {products.length > 0 ? (
              products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <p>Không có sản phẩm trong danh mục này.</p>
            )}
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
      <Footer />
    </div>
  );
};

export default ProductPageByCategory;
