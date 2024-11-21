import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forgot() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = 'Quên mật khẩu';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset thông báo cũ
    setError('');
    setMessage('');

    // Hiển thị thông báo chờ
    const loadingToastId = toast.loading('Đang xử lý, vui lòng đợi...');

    // Validate phía client
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.update(loadingToastId, {
        render: 'Email không đúng định dạng!',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await axios.post('/forgot', { email });
      setMessage(response.data.message);

      // Hiển thị thành công
      toast.update(loadingToastId, {
        render: 'Kiểm tra email để đặt lại mật khẩu!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.errors?.email || 'Đã xảy ra lỗi.';
      setError(errorMessage);

      // Hiển thị lỗi
      toast.update(loadingToastId, {
        render: errorMessage,
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
          Quên mật khẩu
        </h2>
        <p className='mb-4 text-sm text-gray-600'>
          Nhập email của bạn, chúng tôi sẽ gửi liên kết đặt lại mật khẩu.
        </p>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              className={`w-full px-3 py-2 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded-md outline-none`}
              placeholder='Nhập email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className='text-red-500 mt-2 text-sm'>{error}</p>}
          </div>
          <button
            type='submit'
            className='w-28 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          >
            Xác nhận
          </button>
        </form>
        {message && (
          <p className='text-green-500 mt-4 text-center'>{message}</p>
        )}
      </div>
    </div>
  );
}

export default Forgot;
