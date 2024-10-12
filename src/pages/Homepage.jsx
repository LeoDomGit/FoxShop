import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import Sale from '../components/Sale';

import Product from '../components/Product';
import Slider from '../components/Slider';
import Title from '../components/Title';
import LookBook from '../components/LookBook';
import SliderImage from '../components/SliderImage';
import Footer from '../components/Footer';

function HomePage() {
  useEffect(() => {
    document.title = 'Trang chủ';
  }, []);

  return (
    <div>
      <Header />
      <Banner content='Trải nghiệm mua sắm tuyệt vời cùng của hàng của chúng tôi!' />
      <Title title='DANH MỤC MUA SẮM' linkTo='/categories' />
      <CategoryList />
      <Title
        title='Top Seller'
        content='Trải nghiệm những dòng sản phẩm bán chạy nhất của chúng tôi tại đây!'
        linkTo='/products'
      />
      <Product />
      <Sale />
      <Title
        title='Sản phẩm mới'
        content='Khám phá sản phẩm mới – đột phá thiết kế, nâng tầm trải nghiệm!'
      />
      <Slider />
      <Title title='DANH MỤC BÁN CHẠY' linkTo='/categories' />
      <CategoryList />
      <Title
        title='Bộ sưu tập phụ kiện'
        content='"Sang trọng từng chi tiết, mạnh mẽ trong phong cách"'
        linkTo='/products'
      />
      <Product />
      <Title title='Bộ Sưu Tập Lookbook' />
      <LookBook />
      <Title
        title='Dành cho bạn'
        content='Khám phá những dòng sản phẩm phù hợp với bản thân bạn!'
      />
      <SliderImage />
      <Footer />
    </div>
  );
}

export default HomePage;
