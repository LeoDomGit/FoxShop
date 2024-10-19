import React, { useEffect } from 'react';

function Forgot() {
  useEffect(() => {
    document.title = 'Quên mật khẩu';
  }, []);
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-lg'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>
          Quên mật khẩu
        </h2>

        <p className='mb-2 text-sm'>
          Nếu bạn đã quên mật khẩu hãy nhập email đăng nhập của bạn chúng tôi sẽ
          hỗ trợ thông qua email này.
        </p>

        {/* Form Quên mk */}
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
              name='email'
              placeholder='Nhập email'
              required
            />
          </div>

          <button
            type='submit'
            className='w-24 px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] hover:bg-blue-600'
          >
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
