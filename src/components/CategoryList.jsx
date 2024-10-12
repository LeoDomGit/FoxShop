/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import shirts from '../assets/image/image.png';
import denim from '../assets/image/image1.png';
import tees from '../assets/image/image2.png';
import pans from '../assets/image/image3.png';
import sweatter from '../assets/image/image4.png';
import outerwear from '../assets/image/image5.png';

function CategoryList() {
  return (
    <div>
      <div className='container mx-auto lg:px-10 xl:px-24 md:px-4  px-5 mb-2 mt-2 xl:mt-5  lg:mt-5  md:mt-5 xl:mb-10  lg:mb-10  md:mb-10'>
        <div className='grid grid-cols-3 items-center justify-items-center gap-3 uppercase md:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 sm:grid-cols-6'>
          <div className='flex flex-col justify-items-center items-center w-full gap-1'>
            <img
              className='w-full h-[140px] md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[263px] xl-[263px] object-cover'
              src={shirts}
              alt=''
            />
            <Link to='#'>
              <span className='text-xs md:text-sm lg:text-sm xl:text-sm hover:text-[#fe5c17] underline'>
                Sơ mi
              </span>
            </Link>
          </div>
          <div className='flex flex-col justify-items-center items-center w-full gap-1'>
            <img
              className='w-full h-[140px] object-cover md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[263px] xl-[263px]'
              src={denim}
              alt=''
            />
            <Link to='#'>
              <span className='text-xs md:text-sm lg:text-sm xl:text-sm hover:text-[#fe5c17] underline'>
                Denim
              </span>
            </Link>
          </div>
          <div className='flex flex-col justify-items-center items-center w-full gap-1'>
            <img
              className='w-full h-[140px] object-cover md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[263px] xl-[263px]'
              src={tees}
              alt=''
            />
            <Link to='#'>
              <span className='text-xs md:text-sm lg:text-sm xl:text-sm hover:text-[#fe5c17] underline'>
                Áo thun
              </span>
            </Link>
          </div>
          <div className='flex flex-col justify-items-center items-center w-full gap-1'>
            <img
              className='w-full h-[140px] object-cover md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[263px] xl-[263px]'
              src={pans}
              alt=''
            />
            <Link to='#'>
              <span className='text-xs md:text-sm lg:text-sm xl:text-sm hover:text-[#fe5c17] underline'>
                Quần
              </span>
            </Link>
          </div>
          <div className='flex flex-col justify-items-center items-center w-full gap-1'>
            <img
              className='w-full h-[140px] object-cover md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[263px] xl-[263px]'
              src={sweatter}
              alt=''
            />
            <Link to='#'>
              <span className='text-xs md:text-sm lg:text-sm xl:text-sm hover:text-[#fe5c17] underline'>
                Sweater
              </span>
            </Link>
          </div>
          <div className='flex flex-col justify-items-center items-center w-full gap-1'>
            <img
              className='w-full h-[140px] object-cover md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[263px] xl-[263px]'
              src={outerwear}
              alt=''
            />
            <Link to='#'>
              <span className='text-xs md:text-sm lg:text-sm xl:text-sm hover:text-[#fe5c17] underline'>
                Áo khoác
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className='container mx-auto lg:px-10 xl:px-24 md:px-0 sm:px-12 px-5 mb-2 mt-2 xl:mt-12  lg:mt-12  md:mt-12 xl:mb-10  lg:mb-10  md:mb-10'>
        <div className='relative'>
          <img className="w-full h-[180px] object-cover md:h-[150px] sm:h-[150px] min-h-[150px] lg:h-[263px] xl-[263px]" src={shirts} alt='' />
        </div>
      </div> */}
    </div>
  );
}

export default CategoryList;
