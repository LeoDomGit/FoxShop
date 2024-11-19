import React from 'react';
import Header from '../components/Header'; // Đảm bảo đường dẫn đúng
import Footer from '../components/Footer'; // Đảm bảo đường dẫn đúng

function HelpCenter() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center bg-blue-600 text-white h-[400px] text-center p-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Trung Tâm Trợ Giúp
        </h1>
        <p className='text-lg md:text-xl mb-8'>
          Chúng tôi ở đây để giúp bạn tìm câu trả lời bạn cần
        </p>
        <input
          type='text'
          placeholder='Tìm kiếm câu hỏi...'
          className='w-full max-w-md px-4 py-3 rounded-lg text-gray-800'
        />
      </section>

      {/* FAQ Section */}
      <main className='container mx-auto p-6 flex-grow grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold text-blue-600 mb-4'>
            Câu hỏi chung
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Làm thế nào để tạo tài khoản?</li>
            <li>• Làm thế nào để đổi mật khẩu?</li>
            <li>• Làm cách nào để cập nhật thông tin cá nhân?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold text-blue-600 mb-4'>
            Giao dịch và thanh toán
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Phương thức thanh toán nào được chấp nhận?</li>
            <li>• Làm sao để kiểm tra lịch sử giao dịch của tôi?</li>
            <li>• Quy trình hoàn tiền như thế nào?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold text-blue-600 mb-4'>
            Vận chuyển và giao nhận
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Làm sao để kiểm tra trạng thái đơn hàng?</li>
            <li>• Các phương thức vận chuyển có sẵn?</li>
            <li>• Chi phí vận chuyển tính như thế nào?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold text-blue-600 mb-4'>
            Chính sách bảo hành
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Điều kiện bảo hành sản phẩm?</li>
            <li>• Làm sao để yêu cầu bảo hành?</li>
            <li>• Chính sách bảo hành cụ thể cho các sản phẩm khác nhau?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold text-blue-600 mb-4'>
            Liên hệ hỗ trợ
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Làm sao để liên hệ với bộ phận hỗ trợ?</li>
            <li>• Thời gian hỗ trợ khách hàng là khi nào?</li>
            <li>• Có kênh hỗ trợ trực tuyến không?</li>
          </ul>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-xl font-semibold text-blue-600 mb-4'>
            Thông tin tài khoản
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Cách tạo tài khoản mới?</li>
            <li>• Làm sao để xóa tài khoản?</li>
            <li>• Quyền riêng tư về thông tin tài khoản?</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HelpCenter;
