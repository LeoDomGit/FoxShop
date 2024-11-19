import React from 'react';
import Header from '../components/Header'; // Đảm bảo đường dẫn đúng
import Footer from '../components/Footer'; // Đảm bảo đường dẫn đúng

function PurchasePolicy() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='bg-blue-600 text-white text-center p-8'>
        <h1 className='text-4xl font-bold mb-4'>Chính Sách Mua Hàng</h1>
        <p className='text-lg'>
          Chúng tôi cung cấp cho bạn các chính sách mua hàng rõ ràng và minh
          bạch. Dưới đây là các thông tin chi tiết về quy trình mua sắm tại cửa
          hàng của chúng tôi.
        </p>
      </section>

      {/* Content Section */}
      <main className='container mx-auto p-6 flex-grow grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {/* Quy trình mua hàng */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Quy Trình Mua Hàng
          </h2>
          <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
            <li>Chọn sản phẩm bạn muốn mua và thêm vào giỏ hàng.</li>
            <li>Kiểm tra lại giỏ hàng và cập nhật số lượng, nếu cần.</li>
            <li>Điền thông tin giao hàng và phương thức thanh toán.</li>
            <li>Xác nhận đơn hàng và chờ xác nhận từ cửa hàng.</li>
          </ol>
        </section>

        {/* Phương thức thanh toán */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Phương Thức Thanh Toán
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Chúng tôi chấp nhận nhiều phương thức thanh toán khác nhau để mang
            đến sự thuận tiện cho khách hàng.
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Thanh toán qua thẻ tín dụng và thẻ ghi nợ.</li>
            <li>Thanh toán qua ví điện tử (Momo, ZaloPay, ViettelPay, ...).</li>
            <li>Thanh toán khi nhận hàng (COD).</li>
          </ul>
        </section>

        {/* Chính sách bảo mật */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Chính Sách Bảo Mật
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Chúng tôi cam kết bảo mật thông tin của bạn trong suốt quá trình mua
            sắm tại cửa hàng. Mọi thông tin cá nhân và thanh toán của bạn đều
            được mã hóa và bảo vệ.
          </p>
        </section>

        {/* Điều kiện mua hàng */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Điều Kiện Mua Hàng
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Để đảm bảo quyền lợi cho tất cả khách hàng, chúng tôi yêu cầu bạn
            tuân thủ một số điều kiện khi mua hàng tại cửa hàng.
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Chỉ chấp nhận đơn hàng với thông tin giao hàng chính xác.</li>
            <li>Chúng tôi không nhận hàng hóa đã qua sử dụng hoặc hư hỏng.</li>
            <li>
              Các sản phẩm khuyến mãi, giảm giá có thể không áp dụng cho chương
              trình đổi trả.
            </li>
          </ul>
        </section>

        {/* Chính sách hoàn tiền */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Chính Sách Hoàn Tiền
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Nếu bạn không hài lòng với sản phẩm, chúng tôi sẽ hoàn tiền cho bạn
            theo các điều kiện hoàn tiền cụ thể.
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Sản phẩm phải còn nguyên bao bì và chưa qua sử dụng.</li>
            <li>
              Yêu cầu hoàn tiền phải được gửi trong vòng 7 ngày kể từ ngày nhận
              hàng.
            </li>
            <li>
              Phí vận chuyển hoàn trả có thể được áp dụng nếu sản phẩm không bị
              lỗi.
            </li>
            <li>
              Sau khi kiểm tra và xác nhận sản phẩm hoàn trả, chúng tôi sẽ xử lý
              hoàn tiền trong vòng 3-5 ngày làm việc.
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
