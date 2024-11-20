import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function RecoverPassword() {
  const { token, email } = useParams(); // Lấy token và email từ URL
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Đổi mật khẩu';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading toast while waiting for the API request
    const loadingToastId = toast.loading('Đang xử lý, vui lòng đợi...');

    try {
      const response = await axios.post('/resetPassword', {
        token,
        email: decodeURIComponent(email),
        password,
        password_confirmation: passwordConfirmation,
      });

      setMessage(response.data.status);
      setError('');

      // Update the toast to show success and redirect
      toast.update(loadingToastId, {
        render: 'Mật khẩu đã được thay đổi thành công.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });

      setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
    } catch (err) {
      setMessage('');
      setError(err.response?.data?.errors || 'Đã xảy ra lỗi.');

      // Update the toast to show error message
      toast.update(loadingToastId, {
        render: 'Đã xảy ra lỗi, vui lòng thử lại!',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-lg'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>
          Đặt lại mật khẩu
        </h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Mật khẩu mới
            </label>
            <input
              type='password'
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
              placeholder='Nhập mật khẩu mới'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Xác nhận mật khẩu
            </label>
            <input
              type='password'
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
              placeholder='Xác nhận mật khẩu'
              required
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-24 px-4 py-2 bg-blue-500 text-white rounded-md text-[14px] hover:bg-blue-600'
          >
            Xác nhận
          </button>
        </form>
        {message && <p className='text-green-500 mt-2'>{message}</p>}
        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </div>
    </div>
  );
}

export default RecoverPassword;
