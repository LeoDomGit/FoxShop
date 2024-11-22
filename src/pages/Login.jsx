import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { loadCartFromLocalStorage } from '../stores/cart';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Login() {
  useEffect(() => {
    document.title = 'Đăng nhập';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();

    // Hiển thị thông báo đang đăng nhập
    const loadingToastId = toast.loading('Đang đăng nhập...');

    try {
      const response = await axios.post('/login', { email, password });
      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      localStorage.setItem('avatar', user.avatar);
      localStorage.setItem('phone', user.phone);
      localStorage.setItem('name', user.name);
      setEmail('');
      setPassword('');
      dispatch(loadCartFromLocalStorage());

      // Đóng thông báo loading sau khi đăng nhập thành công
      toast.update(loadingToastId, {
        render: 'Đăng nhập thành công!',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });

      navigate('/'); // Chuyển hướng về trang chủ
    } catch (e) {
      // Đóng thông báo loading sau khi có lỗi
      toast.update(loadingToastId, {
        render: 'Đăng nhập thất bại, vui lòng thử lại!',
        type: 'error',
        isLoading: false,
        autoClose: 2000,
      });

      if (e.response && e.response.data.errors) {
        const errorData = e.response.data.errors;
        setErrors({
          email: errorData.email ? errorData.email[0] : '',
          password: errorData.password ? errorData.password[0] : '',
        });
      } else {
        setErrors({ general: 'Có lỗi xảy ra, vui lòng thử lại sau.' });
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-lg'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Đăng Nhập</h2>

        {/* Hiển thị lỗi nếu có */}
        {errors.general && (
          <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
        )}

        {/* Form đăng nhập */}
        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder='Nhập email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email}</p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Mật khẩu
            </label>
            <input
              type='password'
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.password ? 'border-red-500' : ''
              }`}
              placeholder='Nhập mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password}</p>
            )}
          </div>

          <div className='flex items-center justify-end gap-1 text-gray-600'>
            <input
              type='checkbox'
              id='rememberMe'
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
