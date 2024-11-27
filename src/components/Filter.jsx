import React from 'react';

function Filter({
  categories,
  brands,
  filters,
  onFilterChange,
  onClearFilters,
}) {
  const handleBrandChange = (e) => {
    const brandId = e.target.value ? parseInt(e.target.value, 10) : null;
    onFilterChange({ brand: brandId });
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value ? parseInt(e.target.value, 10) : null;
    onFilterChange({ category: categoryId });
  };

  const handlePriceChange = (field, value) => {
    const numericValue = parseInt(value, 10) || 0;
    const updatedPrice = { ...filters };
    updatedPrice[field] = numericValue;
    onFilterChange(updatedPrice);
  };

  return (
    <div className='p-4'>
      <h2 className='font-bold text-lg mb-4'>Bộ lọc sản phẩm</h2>

      {/* Filter by category */}
      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Danh mục:</label>
        <select
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
          value={filters.category || ''}
          onChange={handleCategoryChange}
        >
          <option value=''>Tất cả</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by brand */}
      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Thương hiệu:</label>
        <select
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
          value={filters.brand || ''}
          onChange={handleBrandChange}
        >
          <option value=''>Tất cả</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by price */}
      <div className='mb-4'>
        <label className='block font-semibold mb-2'>Giá:</label>
        <input
          type='number'
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md mb-2'
          value={filters.minPrice}
          onChange={(e) => handlePriceChange('minPrice', e.target.value)}
        />
        <input
          type='number'
          className='border border-gray-300 p-2 w-full focus:outline-none rounded-md'
          value={filters.maxPrice}
          onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
        />
      </div>

      <button
        className='w-full bg-blue-500 text-white p-2 rounded-md'
        onClick={onClearFilters}
      >
        Xóa bộ lọc
      </button>
    </div>
  );
}

export default Filter;
