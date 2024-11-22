import React from 'react';

function Modal({ title, message, onConfirm, onCancel }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-5 w-[90%] max-w-md'>
        <h2 className='text-xl font-bold mb-3'>{title}</h2>
        <p className='mb-5'>{message}</p>
        <div className='flex justify-end gap-3'>
          <button
            onClick={onCancel}
            className='py-2 px-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
          >
            Hủy bỏ
          </button>
          <button
            onClick={onConfirm}
            className='py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700'
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
