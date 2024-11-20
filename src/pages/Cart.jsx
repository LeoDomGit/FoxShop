import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Checkout from '../components/Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../stores/cart';
import { toast } from 'react-toastify';

function Cart() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    document.title = 'Giỏ hàng';
  }, []);

  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
  }, [userId, navigate]);

  const carts = useSelector((store) => store.cart.items);

  // useEffect(() => {
  //   setSelectAll(selectedItems.length === carts.length && carts.length > 0);
  // }, [selectedItems, carts]);

  const handleSelectItem = (productId, size, color) => {
    const isSelected = selectedItems.some(
      (item) =>
        item.productId === productId &&
        item.size === size &&
        item.color === color
    );

    if (isSelected) {
      setSelectedItems(
        selectedItems.filter(
          (item) =>
            !(
              item.productId === productId &&
              item.size === size &&
              item.color === color
            )
        )
      );
    } else {
      setSelectedItems([...selectedItems, { productId, size, color }]);
    }
  };

  const handleClearAll = () => {
    dispatch(clearCart());
    toast.info('Đã xóa tất cả sản phẩm.');
    setSelectedItems([]);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[120px] xl:mb-5 lg:mb-5 md:mb-5'>
          <h3 className='text-center font-medium text-3xl mb-2'>Giỏ hàng</h3>
          {carts.length === 0 ? (
            <div className='text-center text-gray-500 mt-10 font-medium'>
              <span className='text-lg'>
                Bạn chưa mua sắm sản phẩm nào.
                <span className='text-red-400'>
                  <Link to='/products'> Mua ngay</Link>
                </span>
              </span>
            </div>
          ) : (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div className='lg:col-span-2'>
                <div className='flex justify-between items-center mb-5'>
                  <button
                    onClick={handleClearAll}
                    className='text-[14px] hover:text-red-600'
                  >
                    Xóa tất cả ({carts.length})
                  </button>
                </div>
                {[...carts].reverse().map((item, key) => (
                  <CartItem
                    key={key}
                    data={item}
                    isSelected={selectedItems.some(
                      (selectedItem) =>
                        selectedItem.productId === item.productId &&
                        selectedItem.size === item.size &&
                        selectedItem.color === item.color
                    )}
                    onSelectItem={handleSelectItem}
                  />
                ))}
              </div>

              <Checkout />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
