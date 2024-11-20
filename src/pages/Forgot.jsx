import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function Forgot() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Quên mật khẩu';
    // No need to configure toast here anymore
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show a loading toast while waiting for the request to complete
    const loadingToastId = toast.loading('Đang xử lý, vui lòng đợi...');

    try {
      const response = await axios.post('/forgot', { email });

      // Success: Update the toast and show success message
      setMessage(response.data.message);
      setError('');
      toast.update(loadingToastId, {
        render: 'Kiểm tra email của bạn để đặt lại mật khẩu.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    } catch (err) {
      // Error: Update the toast and show error message
      setMessage('');
      setError(err.response?.data?.errors?.email || 'Đã xảy ra lỗi.');
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
          Quên mật khẩu
        </h2>
        <p className='mb-2 text-sm'>
          Nhập email của bạn, chúng tôi sẽ gửi liên kết đặt lại mật khẩu.
        </p>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none'
              placeholder='Nhập email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default Forgot;
