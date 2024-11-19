// src/components/ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const urlImage = process.env.REACT_APP_URL_IMAGE;
function ProductItem({ product }) {
  if (!product) {
    return <div>Product not available</div>;
  }

  return (
    <div className='flex flex-col w-full lg:w-full xl:w-full object-cover'>
      <Link to={`/products/${product.slug}`}>
        <div className='relative'>
          <img
            className='w-full h-[229px] md:h-[258px] xl:h-[358px] lg:h-[358px] sm:h-[258px] object-cover'
            src={`${urlImage}${product.image}`}
            alt={product.name}
          />
          {product.discount > 0 && (
            <div className='absolute top-2 text-red-500 font-semibold md:px-5 md:py-1 lg:px-5 lg:py-1 sm:px-5 sm:py-1 xl:px-5 xl:py-1 py-1 px-3 text-sm bg-[#f5f5f5]'>
              -{product.discount}%
            </div>
          )}
        </div>

        <div className='flex justify-between pt-2'>
          <span className='line-clamp-2 text-sm font-medium h-[42px]'>
            {product.name}
          </span>
        </div>
      </Link>

      <div className='h-[44px] flex justify-between items-center'>
        {/* <div className='lg:text-sm md:text-sm xl:text-sm sm:text-sm text-[12px] font-medium'>
          {product.attribute || 'No attribute'}
        </div> */}
        <div className='flex gap-1 text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>
          <span className='line-through text-[#969696]'>
            {product.price.toLocaleString('vi-VN')} <span>đ</span>
          </span>
          <span className='font-medium text-[#fe5c17]'>
            {(
              product.price -
              (product.price * product.discount) / 100
            ).toLocaleString('vi-VN')}
            <span>đ</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
