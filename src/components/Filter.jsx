// src/components/Filter.js
import React from 'react';

function Filter({
  categories,
  attributes,
  filters,
  onFilterChange,
  onClearFilters,
}) {
  const handleCategoryChange = (e) => {
    onFilterChange({ category: parseInt(e.target.value, 10) });
  };

  const handleColorChange = (color) => {
    const updatedColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    onFilterChange({ colors: updatedColors });
  };

  const handleSizeChange = (size) => {
    const updatedSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ sizes: updatedSizes });
  };

  const handlePriceChange = (min, max) => {
    onFilterChange({ minPrice: min, maxPrice: max });
  };

  return (
    <div className='p-4'>
      <h2 className='font-bold text-lg mb-4'>Bộ lọc sản phẩm</h2>

      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Danh mục:</label>
        <select
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
          value={filters.category || ''}
          onChange={handleCategoryChange}
        >
          <option value=''>Tất cả</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Màu sắc:</label>
        <div>
          {attributes.colors.map((color) => (
            <label key={color.id} className='mr-2'>
              <input
                type='checkbox'
                checked={filters.colors.includes(color.id)}
                onChange={() => handleColorChange(color.id)}
              />
              {color.name}
            </label>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Kích thước:</label>
        <div>
          {attributes.sizes.map((size) => (
            <label key={size.id} className='mr-2'>
              <input
                type='checkbox'
                checked={filters.sizes.includes(size.id)}
                onChange={() => handleSizeChange(size.id)}
              />
              {size.name}
            </label>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Giá:</label>
        <input
          type='number'
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
          placeholder='Giá từ'
          value={filters.minPrice}
          onChange={(e) => handlePriceChange(e.target.value, filters.maxPrice)}
        />
        <input
          type='number'
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md mt-2'
          placeholder='Giá đến'
          value={filters.maxPrice}
          onChange={(e) => handlePriceChange(filters.minPrice, e.target.value)}
        />
      </div>

      <button
        onClick={onClearFilters}
        className='bg-gray-300 p-2 rounded-md w-full mt-4'
      >
        Xóa bộ lọc
      </button>
    </div>
  );
}

export default Filter;
