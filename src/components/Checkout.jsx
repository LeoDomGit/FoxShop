import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../api/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [productCache, setProductCache] = useState([]); // Khai báo productCache

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [form, setForm] = useState({
    phone: '',
    note: '',
  });

  const carts = useSelector((store) => store.cart.items);

  // Fetch location and product data
  useEffect(() => {
    // Fetch location data
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

    // Fetch product data
    async function fetchProducts() {
      try {
        const response = await axios.get(
          'https://dashboard.trungthanhzone.com/public/api/products'
        );
        const totalPages = response.data.last_page;

        let allProducts = response.data.data;

        const requests = [];
        for (let page = 2; page <= totalPages; page++) {
          requests.push(axios.get(`${response.config.url}?page=${page}`)); // Sửa cú pháp
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

  // Tính tổng tiền cho giỏ hàng
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
      if (paymentMethod === 'cash') {
        const response = await axios.post('/orders', {
          ...form,
          id_user: userId,
          total_amount: totalPrice,
          order_details: orderDetails,
          id_payment: 1,
          address: fullAddress,
        });
        toast.success('Đặt hàng thành công!');
        console.log('Order saved successfully:', response.data);
      } else if (paymentMethod === 'card') {
        const response = await axios.post('/payment', {
          ...form,
          id_user: userId,
          total_amount: totalPrice,
          id_payment: 2,
          order_details: orderDetails,
          address: fullAddress,
        });
        console.log('Payment successful:', response.data);
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          toast.error('Lỗi khi thanh toán qua thẻ');
        }
      }
    } catch (error) {
      console.error('Error processing checkout:', error);
      toast.error('Đặt hàng thất bại. Vui lòng thử lại.');
    }
  };

  return (
    <div className='p-4 bg-gray-100 rounded shadow-sm'>
      <h4 className='text-lg font-semibold mb-4'>Thông tin thanh toán</h4>

      {/* Tỉnh/Thành phố */}
      <div className='mb-4'>
        <label htmlFor='province'>Tỉnh/Thành Phố</label>
        <select
          id='province'
          value={selectedProvince}
          onChange={(e) => {
            setSelectedProvince(e.target.value);
            setSelectedDistrict('');
            setSelectedCommune('');
          }}
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
        <label htmlFor='district'>Quận/Huyện</label>
        <select
          id='district'
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedCommune('');
          }}
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
        <label htmlFor='commune'>Xã/Phường</label>
        <select
          id='commune'
          value={selectedCommune}
          onChange={(e) => setSelectedCommune(e.target.value)}
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
        <label htmlFor='addressDetail'>Số nhà/Tên đường</label>
        <input
          type='text'
          id='addressDetail'
          value={addressDetail}
          onChange={(e) => setAddressDetail(e.target.value)}
          placeholder='Số nhà/Tên đường'
        />
      </div>

      {/* Số điện thoại */}
      <div className='mb-4'>
        <label htmlFor='phone'>Số điện thoại</label>
        <input
          type='text'
          name='phone'
          value={form.phone}
          onChange={handleChange}
          placeholder='Số điện thoại'
        />
      </div>

      {/* Ghi chú */}
      <div className='mb-4'>
        <label htmlFor='note'>Ghi chú</label>
        <textarea
          name='note'
          value={form.note}
          onChange={handleChange}
          placeholder='Ghi chú đơn hàng'
        />
      </div>

      {/* Tổng tiền */}
      <div className='mb-4'>
        <span className='text-sm font-semibold'>Tổng tiền:</span>
        <span className='text-sm font-bold text-[#fe5117]'>
          {totalPrice.toLocaleString()} VND
        </span>
      </div>

      {/* Nút thanh toán */}
      <div className='mb-4'>
        <button
          onClick={() => handleCheckout('cash')}
          className='btn btn-primary w-full'
        >
          Thanh toán khi nhận hàng
        </button>
        <button
          onClick={() => handleCheckout('card')}
          className='btn btn-primary w-full mt-4'
        >
          Thanh toán qua thẻ
        </button>
      </div>
    </div>
  );
}

export default Checkout;
