/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../api/axios'; // Import axios
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

// Hook để lấy query từ URL
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SearchPage() {
  const query = useQuery();
  const searchQuery = query.get('q');

  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        // Nếu có từ khóa tìm kiếm, gọi API với từ khóa
        if (searchQuery) {
          const response = await axios.get(
            `/products/search?keyword=${encodeURIComponent(searchQuery)}`
          );

          const data = response.data; // Lấy dữ liệu từ response

          if (response.status === 200) {
            setFilteredProducts(data.data); // Dữ liệu trả về từ API
            setTotalPages(Math.ceil(data.data.length / productsPerPage)); // Cập nhật tổng số trang
          } else {
            console.error('Error fetching products:', data.message);
            setFilteredProducts([]);
            setTotalPages(1);
          }
        } else {
          // Nếu không có từ khóa, không tìm kiếm, trả về tất cả sản phẩm
          setFilteredProducts([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setFilteredProducts([]);
        setTotalPages(1);
      }
      setLoading(false);
    };

    loadProducts();
  }, [searchQuery]); // Khi `searchQuery` thay đổi thì gọi lại API

  // Tính toán các sản phẩm cần hiển thị theo trang
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
    document.title = `Kết quả tìm kiếm cho: ${searchQuery || ''}`;
  }, [searchQuery]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
          <div className='font-semibold text-[20px] my-4'>
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
