import React, { useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

import shirts from '../assets/image/image.png';
import tees from '../assets/image/image1.png';
import pans from '../assets/image/image2.png';
import denim from '../assets/image/image3.png';
import sweater from '../assets/image/image4.png';
import outerwear from '../assets/image/image5.png';

import { GoPlus } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import { FiMinus } from 'react-icons/fi';
import Slider from '../components/Slider';
import Comment from '../components/Comment';
import Footer from '../components/Footer';

const slides = [shirts, tees, pans, denim, sweater, outerwear];

function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const [quantity, setQuantity] = useState(1); // Giá trị mặc định là 1

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Tăng số lượng lên 1
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Giảm số lượng nếu lớn hơn 1
    }
  };

  return (
    <>
      <Header />
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mt-[140px] lg:mt-[140px] sm:mt-[140px] md:mt-[140px] xl:mb-5 lg:mb-5 md:mb-5 flex flex-col gap-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-4'>
          <div className=''>
            <Carousel>
              {slides.map((s, index) => (
                <img
                  key={index}
                  src={s}
                  alt=''
                  className='h-[400px] sm:h-[500px] md:h-[580px] xl:h-[580px] lg:h-[580px] w-full object-cover'
                />
              ))}
            </Carousel>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='font-medium mb-4 flex flex-col'>
              <div className='text-gray-500 text-sm mb-2'>Tên danh mục</div>
              <span className='text-[24px]'>Tên sản phẩm (Hết hàng)</span>
            </div>
            {/* Brands */}
            <div className='text-base leading-relaxed'>
              <div className='font-medium text-sm'>
                Thương hiệu: <span className='font-semibold'>Abc</span>
              </div>
              <div className='font-medium text-sm mt-4'>
                Màu: <span className='font-semibold'>Black</span>
              </div>
            </div>
            {/* Price */}
            <div className='font-medium mb-4 flex flex-col mt-8'>
              <div className='text-gray-500  mb-2 flex gap-3 items-center'>
                <span className='text-[24px] text-[#fe5c17]'>100.0000đ</span>
                <span className='line-through'>100.0000đ</span>
              </div>
            </div>

            {/* SIZE */}

            <div className='mt-4'>
              <div className='mt-5'>
                <h2 className='text-[16px] font-semibold mb-2'>Chọn size</h2>
                <div className='flex space-x-4'>
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => handleSizeSelect(size)}
                      className={`px-3 py-1 border ${
                        selectedSize === size
                          ? 'bg-[#fe5c17] text-white'
                          : 'bg-gray-200 text-gray-700'
                      } hover:bg-[#d16b3f] hover:text-white`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {selectedSize && (
              <div className='mt-3 text-sm'>
                <p>
                  Bạn đã chọn size: <strong>{selectedSize}</strong>
                </p>
              </div>
            )}

            {/* Quantity */}
            <div className='flex items-center space-x-4 mt-12'>
              <button
                onClick={handleDecrease}
                className='px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 '
              >
                <GoPlus />
              </button>
              <input
                type='text'
                className='w-[80px] text-center border border-gray-300 px-6  py-2 outline-none'
                value={quantity}
                min='1'
              />

              <button
                onClick={handleIncrease}
                className='px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 '
              >
                <FiMinus />
              </button>
            </div>

            <div className='flex mt-12 gap-4'>
              <button className='py-3 px-6 bg-[#fe5c17] hover:bg-[#fe5517] text-white shadow-md'>
                Thêm vào giỏ
              </button>
              <button className='py-3 px-5 border-[#fe5c17] border-[1px] text-[#fe5c17] hover:bg-[#fe5517] hover:text-white shadow-sm'>
                <CiHeart className='text-[18px] ' />
              </button>
            </div>
          </div>
        </div>
        {/* Descripton */}
        <div className='flex flex-col gap-4'>
          <span className='font-semibold'>Mô tả sản phẩm</span>
          <div className='text-gray-700 text-[16px]'>
            Áo thun basic unisex được thiết kế theo phong cách tối giản, phù hợp
            cho cả nam và nữ. Sản phẩm được làm từ chất liệu cotton cao cấp,
            thấm hút mồ hôi tốt, mang lại cảm giác thoáng mát và dễ chịu trong
            suốt ngày dài. Form áo rộng rãi, thoải mái giúp dễ dàng phối đồ với
            quần jeans, quần short, hoặc chân váy, tạo nên phong cách trẻ trung
            và năng động. Với bảng màu đa dạng và kiểu dáng hiện đại, chiếc áo
            thun này không chỉ là một món đồ thời trang mà còn phù hợp cho nhiều
            dịp từ đi học, đi làm, đến dạo phố. Thể hiện cá tính riêng của bạn
            với sự tiện lợi và thoải mái của áo thun basic này!
          </div>
        </div>
        <span className='font-semibold text-[20px]'>Sản phẩm liên quan</span>
      </div>
      <Slider />
      <Comment />
      <Footer />
    </>
  );
}
export default ProductDetail;
