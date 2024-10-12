import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/image/banner1.png';

function Banner({ content = '' }) {
  const backgroundColor =
    'linear-gradient(330deg, rgba(0,0,0,0.9) 50%, rgba(254,92,23,1) 50%)';
  return (
    <div>
      <div
        className='h-[300px] xl:h-[650px] md:h-[650px] pt-[46px] flex justify-center items-center'
        style={{ background: backgroundColor }}
      >
        <div className='container mx-auto lg:px-10 xl:px-24 md:px-4 px-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 xl:gap-12 lg:gap-12'>
            {/* lg:justify-start xl:justify-start */}
            <div
              className='flex flex-col gap-4 text-start justify-center md:justify-start'
              style={{ justifyContent: 'center' }}
            >
              <div
                className='text-2xl xl:text-5xl lg:text-4xl md:text-3xl font-bold text-[#ffffff]'
                style={{ textShadow: '0px 0px 1px #888' }}
              >
                {content}
              </div>
              <div>
                <Link to='#'>
                  <span className='py-2 px-3 text-center text-[#000] font-medium text-sm bg-[#fff] hover:bg-[#f9f9f9] rounded-md drop-shadow-md'>
                    Mua ngay
                  </span>
                </Link>
              </div>
            </div>
            <div className='flex justify-end'>
              <img
                className='hidden md:block'
                src={bannerImage}
                alt={bannerImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
