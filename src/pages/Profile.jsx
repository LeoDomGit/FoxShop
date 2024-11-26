/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [formData, setFormData] = useState({
    avatar: '',
    name: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: '', // Sử dụng snake_case để đồng bộ với Laravel
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const avatar = localStorage.getItem('avatar');
    const name = localStorage.getItem('name') || '';
    const phone = localStorage.getItem('phone') || '';

    setFormData({
      ...formData,
      avatar: avatar,
      name: name,
      phone: phone,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        avatar: URL.createObjectURL(file),
      });
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDelete = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      toast.error('Không tìm thấy ID người dùng.');
      return;
    }

    try {
      const response = await axios.delete(`/user/delete/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        toast.success('Tài khoản đã được xóa thành công.');
        localStorage.clear();
        window.location.href = '/';
      } else {
        toast.error('Xóa tài khoản thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error while deleting account:', error);
      toast.error('Đã xảy ra lỗi khi xóa tài khoản. Vui lòng thử lại.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    const formDataToSend = new FormData();

    let hasChanges = false;

    formDataToSend.append('id', userId);
    if (formData.name !== localStorage.getItem('name')) {
      formDataToSend.append('name', formData.name);
      hasChanges = true;
      navigate('/');
    }
    if (formData.phone !== localStorage.getItem('phone')) {
      formDataToSend.append('phone', formData.phone);
      hasChanges = true;
      navigate('/');
    }
    if (
      formData.currentPassword &&
      formData.newPassword &&
      formData.newPasswordConfirmation
    ) {
      formDataToSend.append('currentPassword', formData.currentPassword);
      formDataToSend.append('newPassword', formData.newPassword);
      formDataToSend.append(
        'newPassword_confirmation',
        formData.newPasswordConfirmation
      );
      hasChanges = true;
    }

    if (fileInputRef.current.files[0]) {
      formDataToSend.append('avatar', fileInputRef.current.files[0]);
      hasChanges = true;
    }

    if (!hasChanges) {
      toast.info('Không có thay đổi nào cần cập nhật.');
      return;
    }

    try {
      const response = await axios.post('/update/user', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(response.data.message);

      if (response.data.user.avatar) {
        localStorage.setItem('avatar', response.data.user.avatar);
        setFormData({ ...formData, avatar: response.data.user.avatar });
      }

      localStorage.setItem('name', formData.name);
      localStorage.setItem('phone', formData.phone);

      if (
        formData.currentPassword &&
        formData.newPassword &&
        formData.newPasswordConfirmation
      ) {
        toast.info('Mật khẩu đã được thay đổi. Hãy đăng nhập lại.');

        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('avatar');
        localStorage.removeItem('phone');

        window.location.href = '/';
      }
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        toast.error('Đã xảy ra lỗi, vui lòng thử lại!');
      }
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[120px] xl:mb-5 lg:mb-5 md:mb-5'>
          <div className='flex h-full'>
            <div className='w-full p-6 bg-white'>
              <h1 className='text-2xl font-semibold mb-4'>Quản lý tài khoản</h1>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='flex items-center flex-col'>
                  <img
                    src={formData.avatar}
                    alt='Avatar'
                    className='w-24 h-24 rounded-full object-cover'
                  />
                  <div>
                    <button
                      type='button'
                      onClick={handleFileButtonClick}
                      className='text-sm py-2 px-3 mt-2 rounded-md bg-[#fe5c17] hover:bg-[#fe6417] text-white shadow-md'
                    >
                      Chọn ảnh đại diện
                    </button>
                    <input
                      ref={fileInputRef}
                      type='file'
                      accept='image/*'
                      onChange={handleAvatarChange}
                      className='hidden'
                    />
                  </div>
                </div>

                <div>
                  <label className='font-medium text-[14px]' htmlFor='name'>
                    Họ và tên
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 focus:outline-none rounded-md'
                    placeholder='Nhập họ và tên'
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm'>{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className='font-medium text-[14px]' htmlFor='phone'>
                    Số điện thoại
                  </label>
                  <input
                    type='text'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 focus:outline-none rounded-md'
                    placeholder='Nhập số điện thoại'
                  />
                  {errors.phone && (
                    <p className='text-red-500 text-sm'>{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    className='font-medium text-[14px]'
                    htmlFor='currentPassword'
                  >
                    Mật khẩu hiện tại
                  </label>
                  <input
                    type='password'
                    id='currentPassword'
                    name='currentPassword'
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 focus:outline-none rounded-md'
                  />
                  {errors.currentPassword && (
                    <p className='text-red-500 text-sm'>
                      {errors.currentPassword}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className='font-medium text-[14px]'
                    htmlFor='newPassword'
                  >
                    Mật khẩu mới
                  </label>
                  <input
                    type='password'
                    id='newPassword'
                    name='newPassword'
                    value={formData.newPassword}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 focus:outline-none rounded-md'
                  />
                  {errors.newPassword && (
                    <p className='text-red-500 text-sm'>{errors.newPassword}</p>
                  )}
                </div>
                <div>
                  <label
                    className='font-medium text-[14px]'
                    htmlFor='newPasswordConfirmation'
                  >
                    Xác nhận mật khẩu mới
                  </label>
                  <input
                    type='password'
                    id='newPasswordConfirmation'
                    name='newPasswordConfirmation'
                    value={formData.newPasswordConfirmation}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 focus:outline-none rounded-md'
                  />
                  {errors.newPassword_confirmation && (
                    <p className='text-red-500 text-sm'>
                      {errors.newPassword_confirmation}
                    </p>
                  )}
                </div>

                <div className='flex gap-3'>
                  <button
                    type='submit'
                    className='w-32 py-2 px-3 bg-[#fe5c17] text-white font-medium text-[14px] rounded-md'
                  >
                    Cập nhật
                  </button>

                  <button
                    type='button'
                    onClick={() => setIsDeleteModalOpen(true)} // Mở modal xác nhận
                    className='w-32 py-2 px-3 bg-red-600 text-white font-medium text-[14px] rounded-md'
                  >
                    Xóa tài khoản
                  </button>

                  {isDeleteModalOpen && (
                    <Modal
                      title='Xác nhận xóa tài khoản'
                      message='Bạn có chắc chắn muốn xóa tài khoản này không? Hành động này không thể hoàn tác.'
                      onConfirm={handleDelete} // Gọi hàm handleDelete khi xác nhận
                      onCancel={() => setIsDeleteModalOpen(false)} // Đóng modal nếu không muốn xóa
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
