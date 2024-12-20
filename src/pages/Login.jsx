import React, { useEffect, useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { useDispatch } from 'react-redux';
import { loadCartFromLocalStorage } from '../stores/cart';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  // const googleURL = 'http://localhost:8000/api/auth/google/redirect';
  const googleURL = 'https://dashboard.foxshop.one/api/auth/google/redirect';

  useEffect(() => {
    document.title = 'Đăng nhập';
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const user = JSON.parse(decodeURIComponent(urlParams.get('user')));

    if (token && user) {
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      localStorage.setItem('avatar', user.avatar || '');
      localStorage.setItem('name', user.name);
      localStorage.setItem('phone', user.phone || '');

      navigate('/');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const loadingToastId = toast.loading('Đang đăng nhập...');

    try {
      const response = await axios.post('/login', {
        email,
        password,
        remember: document.getElementById('rememberMe').checked,
      });

      const { token, user } = response.data;

      // Lưu thông tin user và token vào localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      localStorage.setItem('avatar', user.avatar || '');
      localStorage.setItem('name', user.name);
      localStorage.setItem('phone', user.phone || '');

      if (document.getElementById('rememberMe').checked) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      dispatch(loadCartFromLocalStorage());

      toast.update(loadingToastId, {
        render: 'Đăng nhập thành công!',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });

      navigate('/');
    } catch (error) {
      toast.update(loadingToastId, {
        render: 'Đăng nhập thất bại, vui lòng thử lại!',
        type: 'error',
        isLoading: false,
        autoClose: 2000,
      });

      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
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
        <div className='flex items-center justify-center'>
          <Link to='/'>
            <img className='w-32 object-cover' src={logo} alt='Logo' />
          </Link>
        </div>

        {errors.general && (
          <div className='text-red-500 text-sm mb-4'>{errors.general}</div>
        )}

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
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`w-full px-3 py-2 border rounded-md outline-none ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder='Nhập mật khẩu'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password}</p>
            )}
          </div>

          <div className='flex items-center justify-end gap-1 text-gray-600'>
            <input
              type='checkbox'
              id='rememberMe'
              className='checked:accent-[#fe5c17]]'
              defaultChecked={!!localStorage.getItem('rememberedEmail')}
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

        <div className='mt-4 text-sm text-gray-700 text-center'>Hoặc</div>

        <div className='mt-4 flex justify-center'>
          <Link
            to={googleURL}
            className='bg-red-500 text-white px-4 py-2 rounded-md text-[14px] hover:bg-red-600 w-full'
          >
            <div className='flex items-center justify-center'>
              <FaGoogle className='mr-2' />
              Đăng nhập với Google
            </div>
          </Link>
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
              <Link to='/signup'>Đăng ký</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
