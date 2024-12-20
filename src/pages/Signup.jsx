import React, { useState, useEffect } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';

function Signup() {
  useEffect(() => {
    document.title = 'Đăng kí';
  }, []);

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== password_confirm) {
      setErrors({
        password_confirm: ['Mật khẩu xác nhận không khớp.'],
      });
      return;
    }

    const loadingToastId = toast.loading(
      'Đang xử lý vui lòng đợi trong giây lát.'
    );

    try {
      await axios.post('/register', {
        name,
        email,
        password,
        phone,
        password_confirm,
      });

      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setPasswordConfirmation('');
      setErrors({});

      toast.update(loadingToastId, {
        render: 'Đăng kí thành công!',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });

      navigate('/login');
    } catch (e) {
      toast.update(loadingToastId, {
        render: 'Có lỗi xảy ra, vui lòng thử lại!',
        type: 'error',
        isLoading: false,
        autoClose: 2000,
      });

      if (e.response && e.response.data && e.response.data.errors) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const googleURL = 'https://dashboard.foxshop.one/api/auth/google/redirect';
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-lg'>
        <div className='flex items-center justify-center'>
          <Link to='/'>
            <img className='w-32 object-cover ' src={logo} alt='Logo' />
          </Link>
        </div>

        <form className='space-y-4' onSubmit={handleRegister}>
          {/* Họ và Tên */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Họ và Tên
            </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder='Họ và tên'
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name[0]}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder='Nhập email'
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email[0]}</p>
            )}
          </div>

          {/* Số điện thoại */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Số điện thoại
            </label>
            <input
              type='tel'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md outline-none ${
                errors.phone ? 'border-red-500' : ''
              }`}
              placeholder='Nhập số điện thoại'
            />
            {errors.phone && (
              <p className='text-red-500 text-sm'>{errors.phone[0]}</p>
            )}
          </div>

          {/* Mật khẩu */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Mật khẩu
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md outline-none ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder='Nhập mật khẩu'
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
              <p className='text-red-500 text-sm'>{errors.password[0]}</p>
            )}
          </div>

          {/* Xác nhận mật khẩu */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Xác nhận mật khẩu
            </label>
            <div className='relative'>
              <input
                type={showPasswordConfirm ? 'text' : 'password'}
                name='password_confirm'
                value={password_confirm}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md outline-none ${
                  errors.password_confirm ? 'border-red-500' : ''
                }`}
                placeholder='Xác nhận mật khẩu'
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              >
                {showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password_confirm && (
              <p className='text-red-500 text-sm'>
                {errors.password_confirm[0]}
              </p>
            )}
          </div>

          <button
            type='submit'
            className='w-full px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] hover:bg-blue-600'
          >
            Đăng kí
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

        <div className='mt-4 text-sm flex gap-1 font-medium text-gray-500 justify-center'>
          <span>Đã có tài khoản?</span>
          <Link to='/login' className='hover:text-[#fe5c17]'>
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
