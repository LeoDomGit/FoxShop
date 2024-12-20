// SliderImage.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { FreeMode, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const urlImage = process.env.REACT_APP_URL_IMAGE;
const SliderImage = ({ images }) => {
  return (
    <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 lg:mt-5 px-5 mb-2 mt-2 xl:mt-5 md:mt-12 xl:mb-5 lg:mb-5 md:mb-5'>
      <div className='relative flex items-center justify-center mt-3 flex-col'>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 5 },
            340: { slidesPerView: 2, spaceBetween: 5 },
            640: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1440: { slidesPerView: 4, spaceBetween: 25 },
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
          {images.map((product, index) => (
            <SwiperSlide key={index}>
              <Link to={`/products/${product.slug}`}>
                <div className='w-full h-64 flex justify-center items-center'>
                  <img
                    src={`${urlImage}${product.image}`}
                    alt={product.name}
                    className='object-cover h-full w-full '
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>

      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #000;
          background-color: #f5f5f5;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 58%;
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

export default SliderImage;
