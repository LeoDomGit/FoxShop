// src/components/ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div className='flex flex-col w-full lg:w-full xl:w-full object-cover'>
      <Link to='#'>
        <div className='relative'>
          <img
            className='w-full h-[229px] md:h-[258px] xl:h-[358px] lg:h-[358px] sm:h-[258px] object-cover'
            src=''
            alt=''
          />
          <div className='absolute top-2 text-red-500 font-semibold md:px-5 md:py-1 lg:px-5 lg:py-1 sm:px-5 sm:py-1 xl:px-5 xl:py-1 py-1 px-3 text-sm bg-[#ffffff]'>
            - %
          </div>
        </div>

        <div className='flex justify-between pt-2'>
          <span className='line-clamp-2 text-sm font-medium h-[42px]'>
            dfvfr
          </span>
        </div>
      </Link>
      <div className='h-[44px] flex justify-between items-center'>
        <div className='lg:text-sm md:text-sm xl:text-sm sm:text-sm text-[12px] font-medium'></div>
        <div className='flex gap-1 text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>
          <span className='line-through text-[#969696]'>
            34242
            <span>đ</span> {/* Giá gốc */}
          </span>
          <span className='font-medium text-[#fe5c17]'>
            4252345
            <span>đ</span> {/* Giá sau sale */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
// <div className='flex flex-col w-full lg:w-full xl:w-full object-cover'>
//   <Link to={`/products/${product.slug}`}>
//     <div className='relative'>
//       <img
//         className='w-full h-[229px] md:h-[258px] xl:h-[358px] lg:h-[358px] sm:h-[258px] object-cover'
//         src={`https://dashboard.codingfs.com/api/${product.gallery.image}`}
//         alt={product.name}
//       />
//       {product.discount > 0 && (
//         <div className='absolute top-2 text-red-500 font-semibold md:px-5 md:py-1 lg:px-5 lg:py-1 sm:px-5 sm:py-1 xl:px-5 xl:py-1 py-1 px-3 text-sm bg-[#ffffff]'>
//           -{product.discount}%
//         </div>
//       )}
//     </div>

//     <div className='flex justify-between pt-2'>
//       <span className='line-clamp-2 text-sm font-medium h-[42px]'>
//         {product.name} {/* Hiển thị tên sản phẩm */}
//       </span>
//     </div>
//   </Link>
//   <div className='h-[44px] flex justify-between items-center'>
//     <div className='lg:text-sm md:text-sm xl:text-sm sm:text-sm text-[12px] font-medium'>
//       {/* Nếu có thông tin màu sắc, bạn có thể hiển thị ở đây */}
//       {/* Nếu không cần hiển thị màu sắc, hãy xóa dòng này */}
//     </div>
//     <div className='flex gap-1 text-[12px] md:text-[18px] lg:text-[18px] xl:text-[18px]'>
//       <span className='line-through text-[#969696]'>
//         {product.price}
//         <span>đ</span> {/* Giá gốc */}
//       </span>
//       <span className='font-medium text-[#fe5c17]'>
//         {product.price - product.compare_price}
//         <span>đ</span> {/* Giá sau sale */}
//       </span>
//     </div>
//   </div>
// </div>
