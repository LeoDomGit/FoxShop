import React from 'react';
import Header from '../components/Header'; // Đảm bảo đường dẫn đúng
import Footer from '../components/Footer'; // Đảm bảo đường dẫn đúng
import {
  FaShoppingCart,
  FaCreditCard,
  FaLock,
  FaInfoCircle,
  FaMoneyBillWave,
} from 'react-icons/fa';

function PurchasePolicy() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white h-[400px] text-center p-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Chính Sách Mua Hàng
        </h1>
        <p className='text-lg md:text-xl max-w-2xl'>
          Chúng tôi cung cấp các chính sách mua hàng minh bạch và thuận tiện,
          giúp bạn dễ dàng mua sắm tại cửa hàng của chúng tôi.
        </p>
      </section>

      {/* Content Section */}
      <main className='container mx-auto p-6 flex-grow grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {/* Quy trình mua hàng */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaShoppingCart className='text-3xl text-blue-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Quy Trình Mua Hàng
            </h2>
          </div>
          <ol className='list-decimal pl-6 space-y-2 text-gray-700'>
            <li>Chọn sản phẩm và thêm vào giỏ hàng.</li>
            <li>Kiểm tra lại giỏ hàng và điều chỉnh nếu cần.</li>
            <li>Điền thông tin giao hàng và phương thức thanh toán.</li>
            <li>Xác nhận đơn hàng và chờ xác nhận từ cửa hàng.</li>
          </ol>
        </section>

        {/* Phương thức thanh toán */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaCreditCard className='text-3xl text-green-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Phương Thức Thanh Toán
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Chúng tôi hỗ trợ nhiều phương thức thanh toán để thuận tiện cho
            khách hàng.
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Thanh toán qua thẻ tín dụng và thẻ ghi nợ.</li>
            <li>Thanh toán qua ví điện tử (Vnplay, MoMo, ZaloPay).</li>
            <li>Thanh toán khi nhận hàng (COD).</li>
          </ul>
        </section>

        {/* Chính sách bảo mật */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaLock className='text-3xl text-purple-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Chính Sách Bảo Mật
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Chúng tôi cam kết bảo vệ thông tin cá nhân và thanh toán của bạn
            trong suốt quá trình mua sắm.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            Mọi thông tin sẽ được mã hóa và bảo vệ bằng các công nghệ bảo mật
            tiên tiến.
          </p>
        </section>

        {/* Điều kiện mua hàng */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaInfoCircle className='text-3xl text-teal-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Điều Kiện Mua Hàng
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Để đảm bảo quyền lợi cho tất cả khách hàng, chúng tôi yêu cầu bạn
            tuân thủ một số điều kiện khi mua hàng.
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Đơn hàng phải có thông tin giao hàng chính xác.</li>
            <li>Không nhận hàng hóa đã qua sử dụng hoặc bị hư hỏng.</li>
            <li>
              Chương trình khuyến mãi có thể không áp dụng cho các sản phẩm đổi
              trả.
            </li>
          </ul>
        </section>

        {/* Chính sách hoàn tiền */}
        <section className='bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow'>
          <div className='flex items-center mb-4'>
            <FaMoneyBillWave className='text-3xl text-yellow-500 mr-3' />
            <h2 className='text-2xl font-semibold text-black'>
              Chính Sách Hoàn Tiền
            </h2>
          </div>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Nếu bạn không hài lòng với sản phẩm, chúng tôi sẽ hoàn tiền theo các
            điều kiện cụ thể.
          </p>
          <ul className='list-disc pl-6 space-y-2 text-gray-700'>
            <li>Sản phẩm phải còn nguyên bao bì và chưa qua sử dụng.</li>
            <li>
              Yêu cầu hoàn tiền phải được gửi trong vòng 7 ngày kể từ khi nhận
              hàng.
            </li>
            <li>
              Phí vận chuyển hoàn trả có thể áp dụng nếu sản phẩm không lỗi.
            </li>
            <li>
              Hoàn tiền sẽ được xử lý trong vòng 3-5 ngày làm việc sau khi xác
              nhận.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PurchasePolicy;
