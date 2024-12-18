/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { clearCart } from '../stores/cart'; // Import clearCart action
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [productCache, setProductCache] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [form, setForm] = useState({
    phone: '',
    note: '',
  });

  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch(); // Declare dispatch

  // const [vouchers, setVouchers] = useState([]);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const [vouchers, setVouchers] = useState([]);
  const [receivedVouchers, setReceivedVouchers] = useState(new Set());

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchVouchers() {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        toast.error('User is not authenticated');
        return;
      }
      try {
        const response = await axios.get('voucher/user-vouchers', {
          params: { userId: userId },
        });
        const userReceivedVouchers = new Set(response.data.receivedVoucherIds);
        setVouchers(response.data.vouchers);
        setReceivedVouchers(userReceivedVouchers);
      } catch (error) {
        toast.error('Không thể tải voucher');
      }
    }
    fetchVouchers();
  }, []);

  // const receiveVoucher = async (voucherId) => {
  //   try {
  //     const userId = localStorage.getItem('userId');
  //     const response = await axios.post(`voucher/receive/${voucherId}`, {
  //       userid: userId,
  //     });

  //     toast.success('Voucher nhận thành công!');
  //     setReceivedVouchers(new Set([...receivedVouchers, voucherId])); // Add voucher to the received set
  //   } catch (error) {
  //     toast.error('Không thể nhận voucher. Vui lòng thử lại.');
  //   }
  // };

  // const cancelVoucher = async (voucherId) => {
  //   try {
  //     const userId = localStorage.getItem('userId');
  //     const response = await axios.post(`voucher/cancel/${voucherId}`, {
  //       userid: userId,
  //     });

  //     toast.success('Voucher đã được hủy!');
  //     setReceivedVouchers(
  //       new Set([...receivedVouchers].filter((id) => id !== voucherId))
  //     ); // Remove voucher from the received set
  //   } catch (error) {
  //     toast.error('Không thể hủy voucher. Vui lòng thử lại.');
  //   }
  // };

  const applyVoucher = async (voucherCode) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        toast.error('Vui lòng đăng nhập để sử dụng voucher');
        return;
      }

      const response = await axios.post('/voucher/validate-voucher', {
        voucher_code: voucherCode,
        total_amount: totalPrice,
      });

      if (response.data.check) {
        setSelectedVoucher(voucherCode);
        const discount = response.data.discount;
        setDiscountAmount(discount);

        toast.success(`Đã áp dụng voucher ${voucherCode} cho đơn hàng`);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      toast.error('Không thể áp dụng voucher. Vui lòng thử lại.');
    }
  };

  const handleVoucherSelection = (voucher) => {
    if (selectedVoucher) {
      toast.error('Bạn chỉ có thể sử dụng một voucher duy nhất');
      return;
    }

    if (totalPrice < voucher.minimum_monney) {
      toast.error(
        `Giỏ hàng của bạn phải có giá trị tối thiểu là ${voucher.minimum_monney.toLocaleString(
          'vi-VN'
        )} VND để áp dụng voucher này`
      );
      return;
    }
    applyVoucher(voucher.code);
  };

  const handleCancelVoucher = () => {
    setSelectedVoucher(null);
    setDiscountAmount(0);
    toast.info('Voucher đã bị hủy');
  };

  // const handleVoucherSelection = (voucher) => {
  //   if (selectedVoucher) {
  //     toast.error('Bạn chỉ có thể sử dụng một voucher duy nhất');
  //     return;
  //   }

  //   if (totalPrice < voucher.minimum_monney) {
  //     toast.error(
  //       `Giỏ hàng của bạn phải có giá trị tối thiểu là ${voucher.minimum_monney.toLocaleString(
  //         'vi-VN'
  //       )} VND để áp dụng voucher này`
  //     );
  //     return;
  //   }
  //   applyVoucher(voucher.code);
  // };

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/qtv100291/Vietnam-administrative-division-json-server/refs/heads/master/db.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data.province);
        setDistricts(data.district);
        setCommunes(data.commune);
      })
      .catch((error) => console.error('Error fetching location data:', error));

    async function fetchProducts() {
      try {
        const response = await axios.get('/products');
        const totalPages = response.data.last_page;

        let allProducts = response.data.data;

        const requests = [];
        for (let page = 2; page <= totalPages; page++) {
          requests.push(axios.get(`${response.config.url}?page=${page}`));
        }

        const responses = await Promise.all(requests);
        responses.forEach((res) => {
          allProducts = allProducts.concat(res.data.data);
        });

        setProductCache(allProducts);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }

    fetchProducts();
  }, []);

  const totalPrice = carts.reduce((sum, cartItem) => {
    const product = productCache.find(
      (product) => product.id === cartItem.productId
    );
    const price = product ? product.price : 0;
    return sum + price * cartItem.quantity;
  }, 0);

  const filteredDistricts = districts.filter(
    (district) => district.idProvince === selectedProvince
  );

  const filteredCommunes = communes.filter(
    (commune) => commune.idDistrict === selectedDistrict
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (paymentMethod) => {
    if (
      !form.phone ||
      !selectedProvince ||
      !selectedDistrict ||
      !selectedCommune ||
      !addressDetail
    ) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const fullAddress = `${addressDetail}, ${
      communes.find((c) => c.idCommune === selectedCommune)?.name
    }, ${districts.find((d) => d.idDistrict === selectedDistrict)?.name}, ${
      provinces.find((p) => p.idProvince === selectedProvince)?.name
    }`;

    const orderDetails = carts.map((item) => ({
      id_product: item.productId,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
      total_money: totalPrice,
    }));

    try {
      const userId = localStorage.getItem('userId');
      const toastId = toast.loading('Đang xử lý đơn hàng của bạn...');

      if (paymentMethod === 'cash') {
        const totalAmountAfterDiscount = totalPrice - discountAmount;

        const response = await axios.post('/orders', {
          ...form,
          id_user: userId,
          id_payment: 1,
          total_amount: totalAmountAfterDiscount,
          voucher_code: selectedVoucher,
          order_details: orderDetails,
          address: fullAddress,
        });

        toast.update(toastId, {
          render: 'Đặt hàng thành công!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });

        navigate('/thankyou');

        console.log('Order saved successfully:', response.data);
        dispatch(clearCart());
      } else if (paymentMethod === 'card') {
        const totalAmountAfterDiscount = totalPrice - discountAmount;
        const response = await axios.post('/payment', {
          ...form,
          id_user: userId,
          total_amount: totalAmountAfterDiscount,
          id_payment: 2,
          order_details: orderDetails,
          address: fullAddress,
        });

        if (response.data.url) {
          toast.dismiss(toastId);
          window.location.href = response.data.url;
        } else {
          toast.update(toastId, {
            render: 'Lỗi khi thanh toán qua thẻ.',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
        }
        dispatch(clearCart());
      }
    } catch (error) {
      console.error('Error processing checkout:', error);
      const toastId = toast.loading('');
      toast.update(toastId, {
        render: 'Đặt hàng thất bại. Vui lòng thử lại.',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className=''>
      <div className='vouchers mb-4 bg-white p-4 shadow-md rounded-md'>
        <h4 className='text-lg font-semibold mb-2'>Mã giảm giá</h4>
        <ul>
          {vouchers.map((voucher) => (
            <li
              key={voucher.id}
              className='flex items-center justify-between p-2 border mb-2 rounded-lg'
            >
              <div>
                <p className='text-sm font-semibold text-[#fe5c17]'>
                  {voucher.code}
                </p>
                <p className='text-xs text-gray-500'>
                  {voucher.discount_type === 'percentage'
                    ? `Giảm ${voucher.discount_value}%`
                    : `Giảm ${voucher.discount_value.toLocaleString(
                        'vi-VN'
                      )} VND`}{' '}
                  (Đơn tối thiểu:{' '}
                  {voucher.minimum_monney.toLocaleString('vi-VN')} VND)
                </p>
              </div>

              {voucher.usage_limit > 0 &&
              new Date(voucher.end_date) > new Date() ? (
                <div className='flex gap-2'>
                  {selectedVoucher === voucher.code ? (
                    <button
                      className='bg-green-500 text-white text-xs px-4 py-1 rounded-md cursor-not-allowed'
                      disabled
                    >
                      Đã sử dụng
                    </button>
                  ) : (
                    <button
                      className='bg-[#fe5c17] shadow-md text-white text-xs px-4 py-1 rounded-md'
                      onClick={() => handleVoucherSelection(voucher)}
                    >
                      Áp dụng
                    </button>
                  )}
                </div>
              ) : (
                <button
                  className='bg-gray-400 shadow-md text-white text-xs px-4 py-1 rounded-md'
                  disabled
                >
                  Không khả dụng
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Show applied voucher and cancel button */}
      {selectedVoucher && (
        <div className='mb-4 bg-green-100 p-4 rounded-lg shadow-md'>
          <p className='font-semibold'>Voucher đã áp dụng: {selectedVoucher}</p>
          <p className='text-sm'>
            Giảm: {discountAmount.toLocaleString('vi-VN')} VND
          </p>
          <button
            onClick={handleCancelVoucher}
            className='bg-red-500 text-white text-sm mt-2 py-1 shadow-md px-3 rounded-md'
          >
            Hủy Voucher
          </button>
        </div>
      )}

      <div className=' bg-white rounded-lg shadow-md p-4'>
        <h4 className='text-lg font-semibold mb-6'>Thông tin thanh toán</h4>

        {/* Tỉnh/Thành phố */}
        <div className='mb-4'>
          <label
            htmlFor='province'
            className='block text-sm font-medium mb-2 text-[1rem]'
          >
            Tỉnh/Thành Phố
          </label>
          <select
            id='province'
            value={selectedProvince}
            onChange={(e) => {
              setSelectedProvince(e.target.value);
              setSelectedDistrict('');
              setSelectedCommune('');
            }}
            className='w-full border rounded-lg p-2 focus:outline-none text-[16px] text-gray-900]'
          >
            <option value=''>Chọn tỉnh/thành phố</option>
            {provinces.map((province) => (
              <option key={province.idProvince} value={province.idProvince}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* Quận/Huyện */}
        <div className='mb-4'>
          <label
            htmlFor='district'
            className='block text-sm font-medium mb-2 text-[1rem]'
          >
            Quận/Huyện
          </label>
          <select
            id='district'
            value={selectedDistrict}
            onChange={(e) => {
              setSelectedDistrict(e.target.value);
              setSelectedCommune('');
            }}
            className='w-full border rounded-lg p-2 focus:outline-none text-[16px] text-gray-900]'
          >
            <option value=''>Chọn quận/huyện</option>
            {filteredDistricts.map((district) => (
              <option key={district.idDistrict} value={district.idDistrict}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        {/* Xã/Phường */}
        <div className='mb-4'>
          <label
            htmlFor='commune'
            className='block text-sm font-medium mb-2 text-[1rem]'
          >
            Xã/Phường
          </label>
          <select
            id='commune'
            value={selectedCommune}
            onChange={(e) => setSelectedCommune(e.target.value)}
            className='w-full border rounded-lg p-2 focus:outline-none text-[16px] text-gray-900]'
          >
            <option value=''>Chọn xã/phường</option>
            {filteredCommunes.map((commune) => (
              <option key={commune.idCommune} value={commune.idCommune}>
                {commune.name}
              </option>
            ))}
          </select>
        </div>

        {/* Địa chỉ chi tiết */}
        <div className='mb-4'>
          <label
            htmlFor='addressDetail'
            className='block text-sm font-medium mb-2 text-[1rem]'
          >
            Số nhà/Tên đường
          </label>
          <input
            type='text'
            id='addressDetail'
            value={addressDetail}
            onChange={(e) => setAddressDetail(e.target.value)}
            placeholder='Số nhà/Tên đường'
            className='w-full border rounded-lg p-2 focus:outline-none text-[16px] text-gray-900]'
          />
        </div>

        {/* Số điện thoại */}
        <div className='mb-4'>
          <label
            htmlFor='phone'
            className='block text-sm font-medium mb-2 text-[1rem]'
          >
            Số điện thoại
          </label>
          <input
            type='text'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='Số điện thoại'
            className='w-full border rounded-lg p-2 focus:outline-none text-[16px] text-gray-900]'
          />
        </div>

        {/* Ghi chú */}
        <div className='mb-4'>
          <label
            htmlFor='note'
            className='block text-sm font-medium mb-2 text-[1rem]'
          >
            Ghi chú
          </label>
          <textarea
            name='note'
            value={form.note}
            onChange={handleChange}
            placeholder='Ghi chú đơn hàng'
            className='w-full border rounded-lg p-2 focus:outline-none text-[16px] text-gray-900]'
          />
        </div>

        {/* Tổng tiền */}
        <div className='mb-4'>
          <span className='text-[1rem] font-semibold'>Tổng tiền:</span>
          <span className='text-[1rem] font-bold text-[#fe5117] ml-2'>
            {(totalPrice - discountAmount).toLocaleString('vi-VN')} VND
          </span>
          {selectedVoucher && (
            <p className='text-xs text-gray-500'>
              Đã áp dụng mã {selectedVoucher} (-
              {discountAmount.toLocaleString('vi-VN')} VND)
            </p>
          )}
        </div>

        {/* Nút thanh toán */}
        <div className='flex flex-col gap-4'>
          <button
            onClick={() => handleCheckout('cash')}
            className='bg-[#fe5c17] text-white rounded-md py-3'
          >
            Thanh toán khi nhận hàng
          </button>
          <button
            onClick={() => handleCheckout('card')}
            className='bg-green-700 text-white rounded-md py-3'
          >
            Thanh toán qua thẻ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
