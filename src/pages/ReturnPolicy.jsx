import React from 'react';
import Header from '../components/Header'; // Đảm bảo đường dẫn đúng
import Footer from '../components/Footer'; // Đảm bảo đường dẫn đúng
import {
  FaBoxOpen,
  FaSyncAlt,
  FaMoneyCheckAlt,
  FaBan,
  FaClock,
  FaHeadset,
} from 'react-icons/fa';

function ReturnPolicy() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white h-[400px] text-center p-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Chính Sách Đổi Trả
        </h1>
        <p className='text-lg md:text-xl max-w-2xl'>
          Chúng tôi cam kết mang đến trải nghiệm mua sắm tốt nhất. Nếu bạn gặp
          bất kỳ vấn đề nào, hãy tham khảo chính sách đổi trả của chúng tôi để
          nhận hỗ trợ nhanh chóng và tiện lợi.
        </p>
      </section>

      {/* Content Section */}
      <main className='container mx-auto flex-grow grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 p-6'>
        {/* Điều kiện đổi trả */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaBoxOpen className='text-3xl text-blue-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Điều kiện đổi trả
            </h2>
          </div>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Sản phẩm phải còn nguyên tem, nhãn mác và chưa qua sử dụng.</li>
            <li>Hàng hóa phải còn nguyên bao bì gốc.</li>
            <li>Đổi trả trong vòng 30 ngày kể từ ngày mua hàng.</li>
          </ul>
        </section>

        {/* Quy trình đổi trả */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaSyncAlt className='text-3xl text-green-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Quy trình đổi trả
            </h2>
          </div>
          <ol className='list-decimal pl-6 space-y-2 text-gray-700'>
            <li>Liên hệ bộ phận chăm sóc khách hàng để yêu cầu đổi trả.</li>
            <li>Chuẩn bị sản phẩm theo yêu cầu.</li>
            <li>Gửi sản phẩm qua bưu điện hoặc đến cửa hàng gần nhất.</li>
            <li>Chờ xác nhận và hoàn tất quy trình.</li>
          </ol>
        </section>

        {/* Chính sách hoàn tiền */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaMoneyCheckAlt className='text-3xl text-orange-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Chính sách hoàn tiền
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Số tiền hoàn lại sẽ được gửi qua hình thức thanh toán bạn đã sử dụng
            trong thời gian sớm nhất có thể.
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Thời gian hoàn tiền: 5-7 ngày làm việc.</li>
            <li>Phí vận chuyển sẽ không được hoàn lại.</li>
            <li>Chỉ áp dụng với sản phẩm đáp ứng điều kiện đổi trả.</li>
          </ul>
        </section>

        {/* Các sản phẩm không hỗ trợ đổi trả */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaBan className='text-3xl text-red-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Sản phẩm không hỗ trợ đổi trả
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Một số sản phẩm không hỗ trợ đổi trả do tính chất đặc thù hoặc lý do
            vệ sinh.
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Sản phẩm giảm giá hoặc khuyến mãi đặc biệt.</li>
            <li>Đồ lót, tất, và sản phẩm vệ sinh cá nhân.</li>
            <li>Các sản phẩm hư hỏng do lỗi của người dùng.</li>
          </ul>
        </section>

        {/* Thời gian xử lý đổi trả */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaClock className='text-3xl text-purple-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Thời gian xử lý đổi trả
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed'>
            Thời gian xử lý đổi trả từ 3-5 ngày làm việc sau khi nhận được sản
            phẩm. Phụ thuộc vào vị trí và phương thức bạn gửi hàng.
          </p>
        </section>

        {/* Liên hệ hỗ trợ */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaHeadset className='text-3xl text-teal-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Liên hệ hỗ trợ
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed'>
            Nếu bạn cần hỗ trợ, vui lòng liên hệ qua các kênh sau:
          </p>
          <ul className='pl-6 mt-4 space-y-2 text-gray-700'>
            <li>
              Email:{' '}
              <a
                href='mailto:support@example.com'
                className='text-blue-500 underline'
              >
                support@example.com
              </a>
            </li>
            <li>
              Số điện thoại:{' '}
              <a href='tel:0123456789' className='text-blue-500 underline'>
                0123 456 789
              </a>
            </li>
            <li>Thời gian hỗ trợ: 8:00 - 22:00 (Tất cả các ngày trong tuần)</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ReturnPolicy;
