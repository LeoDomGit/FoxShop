import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className='mt-10 w-full bg-[#F5F4F4] p-8'>
        <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-2 xl:mt-5 lg:mt-12 md:mt-12 xl:mb-5 lg:mb-5 md:mb-5'>
          {/* Grid cho cả phần chứa các mục và bản đồ */}
          <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4'>
            {/* Phần chứa các cột */}
            <div className='grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              {/* Dịch vụ */}
              <div className='flex flex-col gap-4'>
                <span className='text-[18px] font-semibold text-black'>
                  Dịch vụ
                </span>
                <div className='flex flex-col gap-4 text-base text-black leading-relaxed'>
                  <Link to='/warranty'>Bảo hành sản phẩm</Link>
                  <Link to='/gift-wrap'>Gói quà tặng</Link>
                  <Link to='/size-consulting'>Tư vấn Chọn Size</Link>
                </div>
              </div>

              {/* Giới thiệu */}
              <div className='flex flex-col gap-4'>
                <span className='text-[18px] font-semibold text-black'>
                  Giới thiệu
                </span>
                <div className='flex flex-col gap-4 text-base text-black leading-relaxed'>
                  <span>Công ty thời trang FoxShop</span>
                  <span>Số xx - đường xxx - quận xx - TP.Hồ Chí Minh</span>
                  <span>SĐT: 0xxxxxxxxx</span>
                </div>
              </div>

              {/* Hỗ trợ */}
              <div className='flex flex-col gap-4'>
                <span className='text-[18px] font-semibold text-black'>
                  Hỗ trợ
                </span>
                <div className='flex flex-col gap-4 text-base text-black leading-relaxed'>
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

              {/* Kết nối */}
              <div className='flex flex-col gap-4'>
                <span className='text-[18px] font-semibold text-black'>
                  Kết nối
                </span>
                <div className='flex flex-col gap-4 text-base text-black leading-relaxed'>
                  <span>Facebook</span>
                  <span>Instagram</span>
                  <span>Twitter</span>
                  <span>Cửa hàng</span>
                </div>
              </div>
            </div>

            {/* Phần chứa bản đồ */}
            <div className='flex justify-end'>
              <div className='w-full lg:w-[100%]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.600734158953!2d106.66017231533452!3d10.762622462403343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4928d7b7b9%3A0x7f6049e108b5e8d!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1689177739034!5m2!1sen!2s'
                  width='100%'
                  height='200'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  title='Google Map'
                ></iframe>
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
