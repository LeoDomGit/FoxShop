import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

function Filter({ filters, onApplyFilter, onClearFilter }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [category, setCategory] = useState(filters.category || '');
  const [brand, setBrand] = useState(filters.brand || '');
  const [minPrice, setMinPrice] = useState(filters.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || '');
  const [sortPrice, setSortPrice] = useState(filters.sortPrice || '');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('/categories')
      .then((response) => setCategories(response.data))
      .catch((error) => console.error('Error fetching categories:', error));

    axios
      .get('/brands')
      .then((response) => setBrands(response.data))
      .catch((error) => console.error('Error fetching brands:', error));
  }, []);

  useEffect(() => {
    setCategory(filters.category || '');
    setBrand(filters.brand || '');
    setMinPrice(filters.minPrice || '');
    setMaxPrice(filters.maxPrice || '');
    setSortPrice(filters.sortPrice || '');
  }, [filters]);

  const handleApplyFilter = () => {
    if (minPrice && maxPrice && Number(minPrice) >= Number(maxPrice)) {
      setError('Giá lớn nhất phải lớn hơn giá nhỏ nhất.');
      return;
    }

    // Reset lỗi nếu điều kiện hợp lệ
    setError('');

    // Gọi hàm áp dụng bộ lọc
    onApplyFilter({ category, brand, minPrice, maxPrice, sortPrice });
  };

  const handleClearFilter = () => {
    setCategory('');
    setBrand('');
    setMinPrice('');
    setMaxPrice('');
    setSortPrice('');
    setError('');
    onClearFilter();
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(value)
      .replace('₫', 'VND');
  };

  const unformatCurrency = (value) => {
    return value.replace(/[^0-9]/g, '');
  };

  return (
    <div className='p-4'>
      <h2 className='font-bold text-[20px] mb-4'>Bộ lọc sản phẩm</h2>

      {/* Filter by category */}
      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Danh mục:</label>
        <select
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md text-sm'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=''>Tất cả</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by brand */}
      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Thương hiệu:</label>
        <select
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md text-sm'
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value=''>Tất cả</option>
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by price */}
      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Giá:</label>
        <div className='flex items-center justify-between gap-2 text-sm'>
          <input
            type='text'
            className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
            placeholder='Giá thấp nhất'
            value={formatCurrency(minPrice)}
            onChange={(e) => setMinPrice(unformatCurrency(e.target.value))}
          />
          <input
            type='text'
            className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
            placeholder='Giá cao nhất'
            value={formatCurrency(maxPrice)}
            onChange={(e) => setMaxPrice(unformatCurrency(e.target.value))}
          />
        </div>
        {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>

      {/* Sort by price */}
      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Sắp xếp:</label>
        <select
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md text-sm'
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
        >
          <option value=''>Mặc định</option>
          <option value='asc'>Giá: Thấp đến cao</option>
          <option value='desc'>Giá: Cao đến thấp</option>
        </select>
      </div>

      <div className='flex items-center gap-2'>
        <button
          className='w-full bg-[#fe5c17] hover:bg-[#ec7b46] shadow-md text-white p-2 rounded-md text-sm'
          onClick={handleApplyFilter}
        >
          Áp dụng
        </button>

        <button
          className='w-full bg-red-600 hover:bg-red-500 shadow-md text-white p-2 rounded-md text-sm'
          onClick={handleClearFilter}
        >
          Xóa bộ lọc
        </button>
      </div>
    </div>
  );
}

export default Filter;
