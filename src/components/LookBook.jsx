/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import shirts from '../assets/image/image.png';
import denim from '../assets/image/image1.png';
import tees from '../assets/image/image2.png';
import pans from '../assets/image/image3.png';
import swearter from '../assets/image/image4.png';
import outerwear from '../assets/image/image5.png';

function LookBook() {
  return (
    <>
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 border-b-[1px] border-[#000] pb-10 px-5 mb-2 mt-2 xl:mt-5 lg:mt-12  md:mt-12 xl:mb-5 lg:mb-5  md:mb-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 justify-between'>
          <div className='flex flex-col w-full lg:w-full xl:w-full md:w-[249px] object-cover'>
            <div className='relative'>
              <img
                className='w-full h-[229px] md:h-[358px] xl:h-[358px] lg:h-[358px] sm:h-[358px] object-cover'
                src={shirts}
                alt=''
              />
            </div>
          </div>

          <div className='flex flex-col w-full lg:w-full xl:w-full md:w-[249px] object-cover'>
            <div className='relative'>
              <img
                className='w-full h-[229px] md:h-[358px] xl:h-[358px] lg:h-[358px] sm:h-[358px] object-cover'
                src={denim}
                alt=''
              />
            </div>
          </div>

          <div className='flex flex-col w-full lg:w-full xl:w-full md:w-[249px] object-cover'>
            <div className='relative'>
              <img
                className='w-full h-[229px] md:h-[358px] xl:h-[358px] lg:h-[358px] sm:h-[358px] object-cover'
                src={tees}
                alt=''
              />
            </div>
          </div>

          <div className='flex flex-col w-full lg:w-full xl:w-full md:w-[249px] object-cover'>
            <div className='relative'>
              <img
                className='w-full h-[229px] md:h-[358px] xl:h-[358px] lg:h-[358px] sm:h-[358px] object-cover'
                src={pans}
                alt=''
              />
            </div>
          </div>

          <div className='flex flex-col w-full lg:w-full xl:w-full md:w-[249px] object-cover'>
            <div className='relative'>
              <img
                className='w-full h-[229px] md:h-[358px] xl:h-[358px] lg:h-[358px] sm:h-[358px] object-cover'
                src={swearter}
                alt=''
              />
            </div>
          </div>

          <div className='flex flex-col w-full lg:w-full xl:w-full md:w-[249px] object-cover'>
            <div className='relative'>
              <img
                className='w-full h-[229px] md:h-[358px] xl:h-[358px] lg:h-[358px] sm:h-[358px] object-cover'
                src={outerwear}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LookBook;
