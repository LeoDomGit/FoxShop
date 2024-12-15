import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaGift, FaPalette, FaLeaf } from 'react-icons/fa';

function GiftWrapPage() {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-50 pt-40 py-20'>
        <div className='container mx-auto px-5 lg:px-20'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>
              Dịch Vụ Gói Quà Tặng
            </h1>
            <p className='text-lg text-gray-600'>
              Chúng tôi biến món quà của bạn trở nên đặc biệt hơn với các dịch
              vụ gói quà chuyên nghiệp.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaGift className='text-4xl text-red-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Gói Quà Theo Yêu Cầu
              </h2>
              <p className='text-gray-600'>
                Tùy chỉnh cách gói quà theo sở thích và phong cách của bạn.
              </p>
            </div>
            {/* Feature 2 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaPalette className='text-4xl text-yellow-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Mẫu Gói Sang Trọng
              </h2>
              <p className='text-gray-600'>
                Sử dụng các vật liệu cao cấp để tạo ra vẻ ngoài sang trọng.
              </p>
            </div>
            {/* Feature 3 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaLeaf className='text-4xl text-green-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Thân Thiện Môi Trường
              </h2>
              <p className='text-gray-600'>
                Chúng tôi sử dụng vật liệu thân thiện với môi trường trong quá
                trình gói quà.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GiftWrapPage;
