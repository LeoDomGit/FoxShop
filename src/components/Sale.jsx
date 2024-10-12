/*eslint-disable*/
import React from 'react';
import imageSale from '../assets/image/saleiamge.png';
import { Link } from 'react-router-dom';
function Sale() {
  return (
    <>
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4  px-5 mb-5 mt-2 xl:mt-5 lg:mt-12  md:mt-12 xl:mb-12  lg:mb-12  md:mb-10'>
        <div className='relative'>
          <img src={imageSale} alt='' />
          <div className='text-center absolute inset-0 flex flex-col items-center justify-center text-[#424242] text-[16px] sm:text-[28px] md:text-[28px] xl:text-[28px] lg:text-[28px] font-bold'>
            <span style={{ textShadow: '0px 0px 1px #000000' }}>
              Nhận ngay ưu đãi mua sắm hôm nay lên đến{' '}
              <span className='text-red-500'>50%</span>
            </span>
            <div
              className='flex text-[16px] sm:text-[58px] md:text-[58px] xl:text-[58px] lg:text-[58px]'
              style={{ textShadow: '0px 0px 1px #000000' }}
            >
              <span>14</span>
              <span>:</span>
              <span>14</span>
              <span>:</span>
              <span>40</span>
            </div>

            <Link to='#'>
              <div className='px-2 py-1 text-[12px] sm:text-sm md:text-sm lg:text-sm xl:text-sm  hover:bg-[#d16b3f] font-medium text-[#ffffff] bg-[#fe5c17] rounded-md shadow-md'>
                Đến cửa hàng
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sale;
