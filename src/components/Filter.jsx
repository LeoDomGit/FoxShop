import React, { useState } from 'react';

function Filter() {
  // Khai báo các state để lưu giá trị cho từng bộ lọc
  const [category, setCategory] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(0); // Giá tối thiểu
  const [maxPrice, setMaxPrice] = useState(300000); // Giá tối đa

  const categories = ['Áo sơ mi', 'Quần tây', 'Áo khoác', 'Phụ kiện'];
  const colors = ['Đỏ', 'Xanh', 'Đen', 'Trắng'];
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxPrice(value);
  };

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  return (
    <div className='p-4'>
      <h2 className='font-bold text-lg mb-4'>Bộ lọc sản phẩm</h2>

      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Danh mục:</label>
        <select
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=''>Tất cả</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Màu sắc:</label>
        <div className='flex flex-wrap gap-2'>
          {colors.map((color, index) => (
            <label key={index} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                value={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
                className='focus:outline-none'
              />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Size:</label>
        <div className='flex flex-wrap gap-2'>
          {sizes.map((size, index) => (
            <label key={index} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
                className='focus:outline-none'
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <div className='flex flex-col mb-4'>
          <label className='font-semibold mb-2'>Giá:</label>
          <div className='flex space-x-2'>
            <input
              type='number'
              min='0'
              value={minPrice}
              onChange={handleMinPriceChange}
              placeholder='Giá tối thiểu'
              className='border border-gray-300 p-2 rounded-md w-full'
            />
            <input
              type='number'
              min='0'
              value={maxPrice}
              onChange={handleMaxPriceChange}
              placeholder='Giá tối đa'
              className='border border-gray-300 p-2 rounded-md w-full'
            />
          </div>
        </div>
        <div className='text-sm text-gray-500'></div>
      </div>

      <button className='bg-[#fe5c17] text-white px-3 py-1 text-base rounded-sm hover:bg-[#ff523c]'>
        Áp dụng
      </button>
    </div>
  );
}

export default Filter;
