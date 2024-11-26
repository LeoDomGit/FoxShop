import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import Header from '../components/Header';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      const fetchOrders = async () => {
        try {
          const response = await axios.get(`/orders/${userId}`);
          setOrders(response.data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, []);

  const getStatusLabel = (status) => {
    switch (status) {
      case 'pending':
        return {
          label: 'Đang chờ xử lý',
          color: 'text-yellow-500 bg-yellow-100',
        };
      case 'processing':
        return { label: 'Đang xử lý', color: 'text-blue-500 bg-blue-100' };
      case 'completed':
        return { label: 'Đã hoàn thành', color: 'text-green-500 bg-green-100' };
      case 'cancelled':
        return { label: 'Đã hủy', color: 'text-red-500 bg-red-100' };
      default:
        return { label: 'Không rõ', color: 'text-gray-500 bg-gray-100' };
    }
  };

  return (
    <div className=''>
      <Header />
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className='order-item border border-gray-200 rounded-lg shadow-md p-6 mb-6 bg-white'
            >
              <div className='flex justify-between items-center mb-4'>
                {/* Địa chỉ */}
                <div>
                  <strong className='block text-gray-700'>Địa chỉ:</strong>
                  <span className='text-gray-600'>{order.address}</span>
                </div>
                {/* Trạng thái */}
                <div
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    getStatusLabel(order.status).color
                  }`}
                >
                  {getStatusLabel(order.status).label}
                </div>
              </div>
              {/* Ngày mua hàng */}
              <div className='mb-2'>
                <strong className='block text-gray-700'>Ngày mua:</strong>
                <span className='text-gray-600'>
                  {new Date(order.order_date).toLocaleDateString()}
                </span>
              </div>
              {/* Tổng số tiền */}
              <div className='mb-2'>
                <strong className='block text-gray-700'>Tổng số tiền:</strong>
                <span className='text-gray-600'>{order.total_amount} VND</span>
              </div>
              {/* Phương thức thanh toán */}
              <div className='mb-4'>
                <strong className='block text-gray-700'>
                  Phương thức thanh toán:
                </strong>
                <span className='text-gray-600'>{order.payment?.method}</span>
              </div>
              {/* Chi tiết sản phẩm */}
              <div className='order-details'>
                <strong className='block text-gray-700'>Sản phẩm:</strong>
                {order.order_details.map((detail) => (
                  <div
                    key={detail.id}
                    className='product-item flex items-center border-b border-gray-200 pb-4 mt-4'
                  >
                    {/* Thông tin sản phẩm */}
                    <div className='ml-4'>
                      <div className='text-[16px] font-medium text-gray-800'>
                        {detail.product?.name || 'Tên sản phẩm'}
                      </div>
                      <div className='text-gray-600 text-sm'>
                        <strong>Số lượng:</strong> {detail.quantity}
                      </div>
                      <div className='text-gray-600 text-sm'>
                        <strong>Giá:</strong>{' '}
                        {new Intl.NumberFormat('vi-VN').format(
                          detail.product?.price || 0
                        )}{' '}
                        VND
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className='text-gray-500 text-center'>
            Không có đơn hàng nào.
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
