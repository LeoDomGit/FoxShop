/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { fetchAllProducts } from '../services/productService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SearchPage() {
  const query = useQuery();
  const searchQuery = query.get('q');

  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await fetchAllProducts();
        setAllProducts(products);
        setFilteredProducts(products);
        setTotalPages(Math.ceil(products.length / productsPerPage));
      } catch (error) {
        console.error('Error fetching products:', error);
        setAllProducts([]);
        setFilteredProducts([]);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = allProducts.filter((product) => {
        const name = product.name || '';
        const description = product.description || '';

        return (
          name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredProducts(filtered);
      setTotalPages(Math.ceil(filtered.length / productsPerPage));
    } else {
      setFilteredProducts(allProducts);
      setTotalPages(Math.ceil(allProducts.length / productsPerPage));
    }
  }, [searchQuery, allProducts]);

  // Cập nhật sản phẩm hiển thị theo trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Hàm thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    document.title = 'Tìm kiếm';
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
          <div className=' font-semibold mb-4'>
            Kết quả tìm kiếm cho: "{searchQuery}"
          </div>

          {loading ? (
            <p>Đang tải...</p>
          ) : currentProducts.length > 0 ? (
            <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
              {currentProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>Không tìm thấy sản phẩm nào phù hợp.</p>
          )}

          {/* Component phân trang */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SearchPage;
