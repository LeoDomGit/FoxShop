import React from 'react';
import Header from '../components/Header'; // Đảm bảo đường dẫn đúng
import Footer from '../components/Footer'; // Đảm bảo đường dẫn đúng

function ReturnPolicy() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='bg-blue-600 text-white text-center p-8'>
        <h1 className='text-4xl font-bold mb-4'>Chính Sách Đổi Trả</h1>
        <p className='text-lg'>
          Chúng tôi cam kết mang đến cho bạn trải nghiệm mua sắm tuyệt vời. Nếu
          có bất kỳ vấn đề nào, bạn hoàn toàn có thể đổi trả sản phẩm theo chính
          sách của chúng tôi.
        </p>
      </section>

      {/* Content Section */}
      <main className='container mx-auto p-6 flex-grow grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {/* Điều kiện đổi trả */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Điều kiện đổi trả
          </h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Sản phẩm phải còn nguyên tem, nhãn mác và chưa qua sử dụng.</li>
            <li>Hàng hóa phải còn nguyên bao bì gốc.</li>
            <li>Đổi trả trong vòng 30 ngày kể từ ngày mua hàng.</li>
          </ul>
        </section>

        {/* Quy trình đổi trả */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Quy trình đổi trả
          </h2>
          <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
            <li>
              Liên hệ với bộ phận chăm sóc khách hàng của chúng tôi để yêu cầu
              đổi trả.
            </li>
            <li>Chuẩn bị sản phẩm theo các yêu cầu đã nêu.</li>
            <li>
              Gửi sản phẩm qua đường bưu điện hoặc đến trực tiếp cửa hàng của
              chúng tôi.
            </li>
            <li>Chờ xác nhận và hoàn tất quy trình đổi trả.</li>
          </ol>
        </section>

        {/* Chính sách hoàn tiền */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Chính sách hoàn tiền
          </h2>
          <p className='text-gray-700 leading-relaxed mb-4'>
            Chúng tôi sẽ hoàn tiền cho các đơn hàng hợp lệ trong thời gian sớm
            nhất có thể. Số tiền hoàn lại sẽ được gửi qua hình thức thanh toán
            mà bạn đã sử dụng.
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>Thời gian hoàn tiền từ 5-7 ngày làm việc.</li>
            <li>Phí vận chuyển sẽ không được hoàn lại.</li>
            <li>Chỉ hoàn tiền cho các sản phẩm đáp ứng điều kiện đổi trả.</li>
          </ul>
        </section>

        {/* Các sản phẩm không hỗ trợ đổi trả */}
        <section className='bg-gray-100 shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Sản phẩm không hỗ trợ đổi trả
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            Một số sản phẩm không hỗ trợ đổi trả vì lý do vệ sinh hoặc tính chất
            đặc thù của sản phẩm.
          </p>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>
              Sản phẩm giảm giá hoặc mua trong các chương trình khuyến mãi đặc
              biệt.
            </li>
            <li>Đồ lót, tất và các sản phẩm liên quan đến vệ sinh cá nhân.</li>
            <li>
              Các sản phẩm đã qua sử dụng hoặc hư hỏng do lỗi của người dùng.
            </li>
          </ul>
        </section>

        {/* Thời gian xử lý đổi trả */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Thời gian xử lý đổi trả
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            Thời gian xử lý đổi trả sẽ phụ thuộc vào vị trí và phương thức bạn
            gửi hàng về. Thông thường, chúng tôi sẽ xử lý trong vòng 3-5 ngày
            làm việc kể từ khi nhận được sản phẩm.
          </p>
        </section>

        {/* Liên hệ hỗ trợ */}
        <section className='bg-white shadow-lg rounded-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>
            Liên hệ hỗ trợ
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            Nếu bạn có bất kỳ thắc mắc nào về chính sách đổi trả, vui lòng liên
            hệ bộ phận chăm sóc khách hàng qua email hoặc số điện thoại. Chúng
            tôi luôn sẵn sàng hỗ trợ bạn.
          </p>
          <p className='text-gray-700 leading-relaxed mt-4'>
            Email: support@example.com <br />
            SĐT: 0123 456 789
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ReturnPolicy;
