/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
function Title({ title = '', content = '', linkTo = '' }) {
  return (
    <>
      <div className='container flex flex-col mx-auto lg:pt-5 text-center lg:px-5 xl:px-24 md:px-4  px-5 mb-2 mt-2 xl:mt-5 lg:mt-12  md:mt-12 xl:mb-5  lg:mb-5  md:mb-5'>
        <span className='sm:text-base md:text-xl lg:text-xl xl:text-xl font-medium uppercase text-[#262626]'>
          {title}
        </span>
        <span className='text-[#262626]'>{content}</span>

        <div className='flex items-center justify-end hover:text-[#fe5c17]'>
          <span className='text-xs lg:text-sm md:text-sm xl:text-sm sm:text-sm'>
            <Link to={linkTo}>Xem tất cả</Link>
          </span>
          <span className='text-xs lg:text-sm md:text-sm xl:text-sm sm:text-sm'>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </>
  );
}

export default Title;
