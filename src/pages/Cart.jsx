import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Checkout from '../components/Checkout';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../stores/cart';

function Cart() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');

  useEffect(() => {
    document.title = 'Giỏ hàng';
  }, []);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const carts = useSelector((store) => store.cart.items);
  // console.log(carts);

  // Đồng bộ hóa `selectAll` với `selectedItems`
  useEffect(() => {
    setSelectAll(selectedItems.length === carts.length && carts.length > 0);
  }, [selectedItems, carts]);

  // Hàm xử lý khi người dùng nhấn "Chọn tất cả"
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(
        carts.map((item) => ({
          productId: item.productId,
          size: item.size,
          color: item.color,
        }))
      );
    }
    setSelectAll(!selectAll);
  };

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
    setSelectedItems([]);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        {!token ? (
          <div>Vui lòng đăng nhập để xem giỏ hàng của bạn.</div>
        ) : (
          <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[120px] xl:mb-5 lg:mb-5 md:mb-5'>
            <h3 className='text-center font-medium text-3xl mb-2'>Giỏ hàng</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div className='lg:col-span-2'>
                <div className='flex justify-between items-center mb-5'>
                  <div className='text-[14px] flex items-center'>
                    <input
                      type='checkbox'
                      style={{ accentColor: '#fe5c17' }}
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className='mr-2 w-4 h-4 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <span>Chọn tất cả</span>
                  </div>
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
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
