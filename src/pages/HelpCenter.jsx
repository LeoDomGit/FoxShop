import React from 'react';
import Header from '../components/Header'; // Đảm bảo đường dẫn đúng
import Footer from '../components/Footer'; // Đảm bảo đường dẫn đúng
import {
  FaSearch,
  FaQuestionCircle,
  FaShippingFast,
  FaWallet,
  FaTools,
  FaHeadset,
  FaUser,
} from 'react-icons/fa';

function HelpCenter() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white h-[400px] text-center p-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Trung Tâm Trợ Giúp
        </h1>
        <p className='text-lg md:text-xl mb-8'>
          Chúng tôi luôn sẵn sàng giúp bạn giải quyết mọi thắc mắc và vấn đề.
        </p>
        <div className='relative w-full max-w-md'>
          <input
            type='text'
            placeholder='Tìm kiếm câu hỏi, từ khóa...'
            className='w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300'
          />
          <FaSearch className='absolute right-3 top-3 text-gray-500 text-xl' />
        </div>
      </section>

      {/* FAQ Section */}
      <main className='container mx-auto p-6 flex-grow grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {/* FAQ Item */}
        <section className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaQuestionCircle className='text-3xl text-blue-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>Câu hỏi chung</h2>
          </div>
          <ul className='space-y-3 text-gray-700'>
            <li>• Làm thế nào để tạo tài khoản?</li>
            <li>• Làm thế nào để đổi mật khẩu?</li>
            <li>• Làm cách nào để cập nhật thông tin cá nhân?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaWallet className='text-3xl text-green-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Giao dịch & thanh toán
            </h2>
          </div>
          <ul className='space-y-3 text-gray-700'>
            <li>• Phương thức thanh toán nào được chấp nhận?</li>
            <li>• Làm sao để kiểm tra lịch sử giao dịch?</li>
            <li>• Quy trình hoàn tiền như thế nào?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaShippingFast className='text-3xl text-orange-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Vận chuyển & giao nhận
            </h2>
          </div>
          <ul className='space-y-3 text-gray-700'>
            <li>• Làm sao để kiểm tra trạng thái đơn hàng?</li>
            <li>• Các phương thức vận chuyển có sẵn?</li>
            <li>• Chi phí vận chuyển tính như thế nào?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaTools className='text-3xl text-purple-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Chính sách bảo hành
            </h2>
          </div>
          <ul className='space-y-3 text-gray-700'>
            <li>• Điều kiện bảo hành sản phẩm?</li>
            <li>• Làm sao để yêu cầu bảo hành?</li>
            <li>• Chính sách bảo hành cho từng loại sản phẩm?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaHeadset className='text-3xl text-red-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Liên hệ hỗ trợ
            </h2>
          </div>
          <ul className='space-y-3 text-gray-700'>
            <li>• Làm sao để liên hệ bộ phận hỗ trợ?</li>
            <li>• Thời gian hỗ trợ khách hàng?</li>
            <li>• Có kênh hỗ trợ trực tuyến không?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaUser className='text-3xl text-teal-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Thông tin tài khoản
            </h2>
          </div>
          <ul className='space-y-3 text-gray-700'>
            <li>• Cách tạo tài khoản mới?</li>
            <li>• Làm sao để xóa tài khoản?</li>
            <li>• Chính sách quyền riêng tư?</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HelpCenter;
