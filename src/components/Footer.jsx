import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <div className='mt-10 w-full bg-[#F5F4F4] p-12'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-2 xl:mt-5 lg:mt-12 md:mt-12 xl:mb-5 lg:mb-5 md:mb-5'>
          {/* Grid cho cả phần chứa tên và phần input */}
          <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4'>
            {/* Phần chứa các cột "Tài khoản" */}
            <div className='grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <div className='flex flex-col gap-3'>
                <span className='text-sm sm:text-base md:text-base xl:text-base lg:text-base font-semibold'>
                  Tài khoản
                </span>
                <div className='flex flex-col gap-1 text-sm text-[#010101]'>
                  <span>Đăng nhập</span>
                  <span>Đăng kí</span>
                  <span>Vouchers</span>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <span className='text-sm sm:text-base md:text-base xl:text-base lg:text-base font-semibold'>
                  Giới thiệu
                </span>
                <div className='flex flex-col gap-1 text-sm text-[#010101]'>
                  <span>Công ty thời trang FoxShop</span>
                  <span>Số xx - đường xxx - quận xx - TP.Hồ Chí Minh</span>
                  <span>SĐT: 0xxxxxxxxx</span>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <span className='text-sm sm:text-base md:text-base xl:text-base lg:text-base font-semibold'>
                  Hỗ trợ
                </span>
                <div className='flex flex-col gap-1 text-sm text-[#010101]'>
                  <Link to='/help'>
                    <span>Trung tâm trợ giúp</span>
                  </Link>
                  <Link to='/return-policy'>
                    <span>Chính sách đổi trả</span>
                  </Link>

                  <Link to='/shipping-policy'>
                    <span>Vận chuyển</span>
                  </Link>
                  <Link to='/purchase-policy'>
                    <span>Chính sách mua hàng</span>
                  </Link>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <span className='text-sm sm:text-base md:text-base xl:text-base lg:text-base font-semibold'>
                  Kết nối
                </span>
                <div className='flex flex-col gap-1 text-sm text-[#010101]'>
                  <span>Facebook</span>
                  <span>Instagram</span>
                  <span>Twitter</span>
                  <span>Cửa hàng</span>
                </div>
              </div>
            </div>

            {/* Phần chứa ô input */}
            <div className='flex justify-end'>
              <div className='relative w-full lg:w-[80%]'>
                <input
                  className='w-full p-2'
                  type='text'
                  placeholder='Nhập email của bạn'
                />
                <div className='absolute top-0 right-0 text-white p-2 bg-black text-2xl'>
                  <IoIosArrowRoundForward />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-5 text-center text-sm'>
          @ 2024 All Right Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
