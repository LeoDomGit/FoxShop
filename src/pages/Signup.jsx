import React, { useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Signup() {
  useEffect(() => {
    document.title = 'Đăng kí';
  }, []);
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-lg'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>Đăng kí</h2>

          {/* Form đăng kí */}
          <form className='space-y-4'>
            <div className='flex justify-between gap-0'>
              <div className=''>
                <label className='block text-sm font-medium text-gray-700'>
                  Họ
                </label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                  name='lastname'
                  placeholder='Họ'
                  required
                />
              </div>

              <div className=''>
                <label className='block text-sm font-medium text-gray-700'>
                  Tên
                </label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                  name='firstname'
                  placeholder='Tên'
                  required
                />
              </div>
            </div>

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

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Số điện thoại
              </label>
              <input
                type='tel'
                className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                name='phone'
                placeholder='Nhập số điện thoại'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Mật khẩu
              </label>
              <input
                type='password'
                className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
                name='password'
                placeholder='Nhập mật khẩu'
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
              className='w-full px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] hover:bg-blue-600'
            >
              Đăng kí
            </button>
          </form>

          <div className='mt-4 text-sm text-gray-700 text-center'>Or</div>

          {/* Hoặc đăng nhập với Google */}
          <div className='mt-4 flex justify-center'>
            <button className='flex items-center bg-red-500 text-white px-4 py-2 rounded-md text-[14px] hover:bg-red-600 w-full justify-center'>
              <FaGoogle className='mr-2' />
              Đăng kí với Google
            </button>
          </div>

          <div className='mt-4 text-sm flex gap-1 font-medium text-gray-500 justify-center'>
            <span>Đã có tài khoản? </span>
            <span className='hover:text-[#fe5c17]'>
              <Link to='/login'> Đăng nhập</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
