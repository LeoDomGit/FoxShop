import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  useEffect(() => {
    document.title = 'Cảm ơn';
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-10 text-center'>
        <h1 className='text-2xl font-bold mt-6 text-gray-800'>
          Cảm ơn bạn đã mua hàng!
        </h1>
        <p className='text-gray-600 mt-3'>
          Đơn hàng của bạn đã được xác nhận và đang được xử lý.
        </p>
        <p className='text-gray-600 mt-1'>
          Chúng tôi sẽ gửi thông tin chi tiết đơn hàng qua email của bạn.
        </p>

        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/'
            className='py-2 px-6 bg-[#fe5c17] text-white rounded-md hover:bg-[#fe6417] transition shadow-md'
          >
            Về trang chủ
          </Link>
          <Link
            to='/orders'
            className='py-2 px-6 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition shadow-md'
          >
            Xem đơn hàng của bạn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
