import React, { useState, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { LiaTrashAltSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeQuantity, removeFromCart } from '../stores/cart';
import { toast } from 'react-toastify';
// import { fetchAllProducts } from '../services/productService';

import axios from '../api/axios';

const urlImage = process.env.REACT_APP_URL_IMAGE;

let productCache = null;

function CartItem(props) {
  const { productId, quantity, size, color } = props.data;

  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  async function fetchAllProducts() {
    try {
      const response = await axios.get('/products');
      const totalPages = response.data.last_page;
      let allProducts = response.data.data;

      const requests = [];
      for (let page = 2; page <= totalPages; page++) {
        requests.push(axios.get(`${'/products'}?page=${page}`));
      }

      const responses = await Promise.all(requests);
      responses.forEach((res) => {
        allProducts = allProducts.concat(res.data.data);
      });

      return allProducts;
    } catch (error) {
      console.error('Error fetching all products:', error);
      return [];
    }
  }

  useEffect(() => {
    const getProductDetails = async () => {
      // Chỉ gọi API nếu cache chưa có
      if (!productCache) {
        productCache = await fetchAllProducts();
      }

      const findDetail = productCache.find(
        (product) => product.id === productId
      );
      if (findDetail) {
        setDetail(findDetail);
      }
    };

    getProductDetails();
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId,
        quantity: quantity > 1 ? quantity - 1 : 1,
        size,
        color,
      })
    );
  };

  const handlePlusQuantity = () => {
    if (quantity < detail.in_stock) {
      dispatch(
        changeQuantity({
          productId,
          quantity: quantity + 1,
          size,
          color,
        })
      );
    } else {
      toast.error('Đã quá giới hạn số lượng sản phẩm còn trong kho.');
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ productId, size, color }));
    toast.info('Đã xóa sản phẩm khỏi giỏ hàng');
  };

  return (
    <div>
      <div className='border-b border-gray-200 pb-4'>
        <div className='flex items-center mt-3'>
          {detail.image && (
            <img
              className='w-40 h-40 object-cover rounded'
              src={`${urlImage}${detail.image}`}
              alt={detail.name}
            />
          )}
          <div className='flex items-center space-x-2 mt-3'>
            <div className='ml-2'>
              <div>
                <Link to={`/products/${detail.slug}`}>
                  <div className='text-[1rem] font-medium hover:text-[#fe5c17] mb-2'>
                    {detail.name}
                  </div>
                </Link>
                <div className='flex items-center gap-3 font-medium text-[1rem] mb-2'>
                  <span className='text-gray-600'>Giá: </span>
                  <span className='text-[#fe5c17]'>
                    {`${Number(detail.price).toLocaleString('vi-VN')}đ`}
                  </span>
                </div>
              </div>

              <div className='text-gray-600 font-medium'>
                Size: {size || 'N/A'}
              </div>
              <div className='flex items-center mt-2'>
                <span className='text-gray-600 mr-2 font-medium'>Màu sắc:</span>
                <div
                  className='w-7 h-7 rounded-full border border-gray-800'
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
              </div>

              <div className='mt-3 flex items-center gap-2'>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={handleMinusQuantity}
                    className='px-2 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md'
                  >
                    <FiMinus />
                  </button>
                  <input
                    type='text'
                    className='w-16 text-center border border-gray-300 px-4 py-1 outline-none rounded-md'
                    value={quantity}
                    min='1'
                    readOnly
                  />
                  <button
                    onClick={handlePlusQuantity}
                    className='px-2 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md'
                  >
                    <GoPlus />
                  </button>
                </div>

                <button
                  onClick={handleRemoveFromCart}
                  className='text-[1.5rem] text-red-600'
                >
                  <LiaTrashAltSolid />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
