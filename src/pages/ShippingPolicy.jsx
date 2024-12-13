import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  FaShippingFast,
  FaTruck,
  FaGift,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function ShippingPolicy() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white h-[400px] text-center p-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Chính Sách Vận Chuyển
        </h1>
        <p className='text-lg md:text-xl max-w-2xl'>
          Chúng tôi cam kết giao hàng nhanh chóng, an toàn và với chi phí hợp lý
          nhất. Dưới đây là các thông tin chi tiết về chính sách vận chuyển của
          chúng tôi.
        </p>
      </section>

      {/* Content Section */}
      <main className='container mx-auto p-6 flex-grow grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {/* Phí vận chuyển */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaMapMarkerAlt className='text-3xl text-blue-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Phí Vận Chuyển
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Phí vận chuyển của chúng tôi tùy thuộc vào địa điểm giao hàng và
            trọng lượng sản phẩm. Chi tiết về phí vận chuyển sẽ được hiển thị
            khi bạn nhập địa chỉ giao hàng trong quá trình thanh toán.
          </p>
        </section>

        {/* Phương thức vận chuyển */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaTruck className='text-3xl text-green-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Phương Thức Vận Chuyển
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Chúng tôi cung cấp nhiều phương thức vận chuyển bao gồm giao hàng
            tiêu chuẩn, giao hàng nhanh, và giao hàng qua các đối tác vận chuyển
            uy tín.
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Vận chuyển tiêu chuẩn: 3-5 ngày làm việc.</li>
            <li>Vận chuyển nhanh: 1-2 ngày làm việc.</li>
            <li>
              Vận chuyển qua đối tác giao hàng: Đảm bảo an toàn và nhanh chóng.
            </li>
          </ul>
        </section>

        {/* Thời gian giao hàng */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaShippingFast className='text-3xl text-purple-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Thời Gian Giao Hàng
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Thời gian giao hàng sẽ phụ thuộc vào khu vực và phương thức vận
            chuyển bạn chọn. Chúng tôi sẽ luôn cập nhật trạng thái đơn hàng của
            bạn để bạn theo dõi.
          </p>
        </section>

        {/* Chính sách giao hàng miễn phí */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaGift className='text-3xl text-yellow-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Chính Sách Giao Hàng Miễn Phí
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Đối với các đơn hàng có giá trị từ 1.000.000 VND trở lên, chúng tôi
            sẽ cung cấp dịch vụ giao hàng miễn phí.
          </p>
        </section>

        {/* Điều kiện giao hàng */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaMapMarkerAlt className='text-3xl text-teal-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Điều Kiện Giao Hàng
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Chúng tôi chỉ giao hàng đến các địa chỉ hợp lệ. Đảm bảo rằng bạn
            cung cấp thông tin chính xác để tránh trường hợp không thể giao
            hàng.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ShippingPolicy;
