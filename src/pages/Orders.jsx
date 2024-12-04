import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);
  const imgUrl = process.env.REACT_APP_URL_IMAGE;

  const [openDetails, setOpenDetails] = useState({});

  const toggleDetails = (orderId) => {
    setOpenDetails((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN') + ' VND';
  };

  useEffect(() => {
    document.title = 'Đơn hàng';
  }, []);

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
          color: 'text-white bg-yellow-500',
        };
      case 'processing':
        return { label: 'Đang xử lý', color: 'text-white bg-blue-500' };
      case 'completed':
        return { label: 'Đã hoàn thành', color: 'text-white bg-green-500' };
      case 'cancelled':
        return { label: 'Đã hủy', color: 'text-white bg-red-500' };
      default:
        return { label: 'Không rõ', color: 'text-white bg-gray-500' };
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[120px] xl:mb-5 lg:mb-5 md:mb-5'>
          <div className='font-semibold text-2xl mb-10'>Đơn hàng đã mua</div>

          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                className='rounded-md bg-white shadow-sm border p-8 mb-6'
                key={order.id}
              >
                <div className='flex justify-between gap-2 flex-wrap pb-2'>
                  <div className='flex flex-col gap-2 items-center'>
                    <span className='font-semibold'>Mã đơn hàng</span>
                    <span className='p-2 bg-[#fe5c17] text-white rounded-full text-sm'>
                      {order.id}
                    </span>
                  </div>

                  <div className='flex flex-col items-center gap-2'>
                    <div className='font-semibold'>Trạng thái đơn hàng</div>
                    <div
                      className={`py-2 px-3 rounded-full text-white text-sm ${
                        getStatusLabel(order.status).color
                      }`}
                    >
                      {getStatusLabel(order.status).label}
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 items-center'>
                    <span className='font-semibold'>Ngày đặt hàng</span>
                    <span className='font-medium'>
                      {new Date(order.order_date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className='flex flex-col gap-2 items-center'>
                    <span className='font-semibold'>Tổng tiền</span>
                    <span className='font-medium'>
                      {formatCurrency(order.total_amount)}
                    </span>
                  </div>

                  <div className='flex flex-col gap-2 items-center'>
                    <span className='font-semibold'>
                      Phương thức thanh toán
                    </span>
                    <span className='font-medium text-[#fe5c17]'>
                      {order.payment?.method}
                    </span>
                  </div>

                  <div className='flex flex-col gap-2 items-center'>
                    <button
                      className='py-2 px-3 rounded-full bg-[#fe5c17] text-white text-sm'
                      onClick={() => toggleDetails(order.id)}
                    >
                      {openDetails[order.id] ? 'Ẩn chi tiết' : 'Xem chi tiết'}
                    </button>
                  </div>
                </div>

                {openDetails[order.id] && (
                  <div className=''>
                    <div className='mt-4  border-t'>
                      {order.order_details.map((detail) => (
                        <div
                          className='py-3 flex gap-3 border-b'
                          key={detail.id}
                        >
                          <div>
                            {/* <img
                              src={`http://127.0.0.1:8000/storage/products/${detail.image}`}
                              alt='ảnh sản phẩm'
                              className='w-28 h-32 object-cover'
                            /> */}

                            <img
                              src={`${imgUrl}${detail.image}`}
                              alt='ảnh sản phẩm'
                              className='w-28 h-32 object-cover'
                            />
                          </div>

                          <div className='flex flex-col gap-2 text-gray-800'>
                            <Link>
                              <div className='font-medium text-[#fe5c17] text-[1.1rem] '>
                                {detail.product?.name || 'Tên sản phẩm'}
                              </div>
                            </Link>

                            <div className='font-medium'>
                              Giá:{' '}
                              <span className='text-[#fe5c17]'>
                                {detail.product?.price.toLocaleString('vi-VN')}{' '}
                                VND
                              </span>
                            </div>
                            <div className='font-medium'>
                              Số lượng: {detail.quantity}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='flex justify-end'>
                      <button className='py-2 px-3 bg-red-500 hover:bg-red-400 rounded-full shadow-sm text-sm text-white mt-3 '>
                        Hủy đơn hàng
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className='text-gray-500 text-center'>
              Không có đơn hàng nào.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Orders;
