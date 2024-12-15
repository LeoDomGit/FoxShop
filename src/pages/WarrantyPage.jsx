import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaRegHandshake, FaTools, FaExchangeAlt } from 'react-icons/fa';

function WarrantyPage() {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-50 pt-40 py-20'>
        <div className='container mx-auto px-5 lg:px-20'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>
              Chính Sách Bảo Hành
            </h1>
            <p className='text-lg text-gray-600'>
              Chúng tôi cam kết cung cấp dịch vụ bảo hành tốt nhất cho khách
              hàng.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaTools className='text-4xl text-blue-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Sửa Chữa Miễn Phí
              </h2>
              <p className='text-gray-600'>
                Hỗ trợ sửa chữa tất cả các lỗi từ nhà sản xuất trong vòng 12
                tháng.
              </p>
            </div>
            {/* Feature 2 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaExchangeAlt className='text-4xl text-green-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Đổi Mới Sản Phẩm
              </h2>
              <p className='text-gray-600'>
                Đổi mới sản phẩm nếu lỗi không thể sửa chữa được.
              </p>
            </div>
            {/* Feature 3 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaRegHandshake className='text-4xl text-purple-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Dịch Vụ Tận Tâm
              </h2>
              <p className='text-gray-600'>
                Luôn sẵn sàng tư vấn và hỗ trợ khách hàng nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WarrantyPage;
