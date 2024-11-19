import React from 'react';
import Header from '../components/Header'; // Đảm bảo đường dẫn đúng
import Footer from '../components/Footer'; // Đảm bảo đường dẫn đúng

function AboutPage() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      {/* Header */}
      <Header />

      {/* Phần Giới thiệu */}
      <section
        className='relative flex items-center justify-center h-[500px] bg-cover bg-center text-white'
        style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }} // Thay thế bằng URL hình ảnh thực tế
      >
        <div className='bg-black bg-opacity-50 p-8 rounded-md text-center max-w-lg mx-auto'>
          <h2 className='text-4xl font-bold mb-4'>Chào mừng đến với FoxShop</h2>
          <p className='text-lg mb-4'>
            Khám phá xu hướng mới nhất và những thiết kế cổ điển trong bộ sưu
            tập độc đáo của chúng tôi.
          </p>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold'>
            Mua Ngay
          </button>
        </div>
      </section>

      {/* Phần Về Chúng Tôi */}
      <main className='container mx-auto p-6 flex-grow grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4 text-blue-700'>
            Câu chuyện của chúng tôi
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Được thành lập vào năm 2020, Clothing Store ra đời từ niềm đam mê
            thời trang và mong muốn mang đến những sản phẩm chất lượng cao cho
            mọi người. Từ những thiết kế cổ điển đến các sản phẩm thời trang, bộ
            sưu tập của chúng tôi có đầy đủ cho mọi phong cách.
          </p>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4 text-blue-700'>
            Sứ mệnh của chúng tôi
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Chúng tôi cam kết mang đến dịch vụ khách hàng tuyệt vời và các sản
            phẩm thời trang chất lượng cao, giúp khách hàng thể hiện phong cách
            độc đáo của mình.
          </p>
        </section>

        <section className='bg-white shadow-lg rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4 text-blue-700 '>
            Chất lượng & Phong cách
          </h3>
          <p className='text-gray-700 leading-relaxed'>
            Chúng tôi lựa chọn kỹ càng từng sản phẩm để đảm bảo đáp ứng các tiêu
            chuẩn về chất lượng, phong cách và giá trị. Mục tiêu của chúng tôi
            là giúp mọi người tiếp cận thời trang một cách dễ dàng.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
