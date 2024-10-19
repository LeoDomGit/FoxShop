import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { FreeMode, Navigation } from 'swiper/modules';

import ProductItem from './ProductItem';

const Slider = () => {
  return (
    <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 lg:mt-5 px-5 mb-2 mt-2 xl:mt-5 md:mt-12 xl:mb-5 lg:mb-5 md:mb-5'>
      <div className='relative flex items-center justify-center mt-3 flex-col'>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            340: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          freeMode={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[FreeMode, Navigation]}
          slidesPerGroup={2}
          className='w-full'
        >
          {/* Các SwiperSlide chứa ProductItem */}
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <ProductItem />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>

      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #000; /* Màu mũi tên */
          background-color: #f5f5f5;
          border-radius: 50%; /* Bo tròn */
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .swiper-button-prev {
          left: -20px;
        }

        .swiper-button-next {
          right: -20px;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default Slider;
