import React, { useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  useEffect(() => {
    document.title = 'Đăng nhập';
  }, []);
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-lg'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Đăng Nhập</h2>

        {/* Form đăng nhập */}
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

          <div className='flex items-center justify-end gap-1 text-gray-600'>
            <input
              type='checkbox'
              name=''
              id=''
              className='checked:bg-[#fe5c17]'
            />
            <span className='text-[14px]'>Ghi nhớ tài khoản</span>
          </div>

          <button
            type='submit'
            className='w-full px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] hover:bg-blue-600'
          >
            Đăng Nhập
          </button>
        </form>

        <div className='mt-4 text-sm text-gray-700 text-center'>Or</div>

        {/* Hoặc đăng nhập với Google */}
        <div className='mt-4 flex justify-center'>
          <button className='flex items-center bg-red-500 text-white px-4 py-2 rounded-md text-[14px] hover:bg-red-600 w-full justify-center'>
            <FaGoogle className='mr-2' />
            Đăng nhập với Google
          </button>
        </div>

        <div className='mt-4 text-sm flex justify-between'>
          <Link to='/forgot'>
            <span className='font-medium text-gray-500 hover:text-[#fe5c17]'>
              Quên mật khẩu?
            </span>
          </Link>
          <div className='font-medium text-gray-500'>
            <span>Chưa có tài khoản? </span>
            <span className='hover:text-[#fe5c17]'>
              <Link to='/signup'>Đăng kí</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
