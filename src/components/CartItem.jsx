import React, { useState, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { LiaTrashAltSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeQuantity, removeFromCart } from '../stores/cart';
import { toast } from 'react-toastify';
import { fetchAllProducts } from '../services/productService'; // Import the function here

const urlImage = process.env.REACT_APP_URL_IMAGE;

let productCache = null;

function CartItem(props) {
  const { productId, quantity, size, color } = props.data;

  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductDetails = async () => {
      if (!productCache) {
        productCache = await fetchAllProducts(); // Call the imported function
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
      <div className='border-b border-gray-200 pb-2'>
        <div className='flex items-center mt-3'>
          {detail.image && (
            <img
              className='w-32 h-32 object-cover rounded'
              src={`${urlImage}${detail.image}`}
              alt={detail.name}
            />
          )}
          <div className='flex items-center space-x-2 mt-3'>
            <div className='ml-2'>
              <div>
                <Link to={`/products/${detail.slug}`}>
                  <div className='text-[16px] font-medium hover:text-[#fe5c17]'>
                    {detail.name}
                  </div>
                </Link>
                <div className='flex items-center gap-3'>
                  <span className='text-gray-600'>Giá: </span>
                  <span className='text-[#fe5c17]'>
                    {`${Number(detail.price).toLocaleString('vi-VN')}đ`}
                  </span>
                </div>
              </div>

              <div className='text-gray-600'>Size: {size || 'N/A'}</div>
              <div className='flex items-center mt-2'>
                <span className='text-gray-600 mr-2'>Màu sắc:</span>
                <div
                  className='w-6 h-6 rounded-full border border-gray-200'
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
              </div>

              <div className='mt-3 flex items-center gap-4'>
                <div className='flex items-center'>
                  <button
                    onClick={handleMinusQuantity}
                    className='px-2 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 '
                  >
                    <FiMinus />
                  </button>
                  <input
                    type='text'
                    className='w-14 text-center border border-gray-300 px-4 py-1 outline-none'
                    value={quantity}
                    min='1'
                    readOnly
                  />
                  <button
                    onClick={handlePlusQuantity}
                    className='px-3 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 '
                  >
                    <GoPlus />
                  </button>
                </div>

                <button
                  onClick={handleRemoveFromCart}
                  className='text-[20px] text-red-600'
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
