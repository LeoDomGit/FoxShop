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
      </div>
    </>
  );
}

export default Title;
