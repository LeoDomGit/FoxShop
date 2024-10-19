import React, { useEffect } from 'react';

function RecoverPassword() {
  useEffect(() => {
    document.title = 'Nhập mật khẩu mới';
  }, []);
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-lg'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>
            Nhập mật khẩu mới
          </h2>

          {/* Form mk */}
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Mật khẩu mới
              </label>
              <input
                type='password'
                className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                name='password'
                placeholder='Nhập mật khẩu mới'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Xác nhận mật khẩu
              </label>
              <input
                type='password'
                className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                name='password_confirm'
                placeholder='Xác nhận mật khẩu'
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
    </div>
  );
}

export default RecoverPassword;
