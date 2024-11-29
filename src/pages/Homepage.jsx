import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import Slider from '../components/Slider';
import Title from '../components/Title';
import SliderImage from '../components/SliderImage';
import Footer from '../components/Footer';
import ProductItem from '../components/ProductItem';
import axios from '../api/axios';

const randomProduct = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function HomePage() {
  useEffect(() => {
    document.title = 'Trang chủ';
  }, []);

  // GET ALL PR
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // GET POLO
  const [polo, setPolo] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [randomPolo, setRandomPolo] = useState([]);
  const [loading, setLoading] = useState(true);
  // GET RANDOM
  const getRandomProducts = (products, count) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchPolo = async () => {
      try {
        const response = await axios.get('/categories/ao-polo');
        setPolo(response.data.data);
      } catch (err) {
        console.error('Error', err);
      }
    };
    fetchPolo();
  }, []);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get('/products/best');

        if (response.data && response.data.data) {
          setBestSeller(response.data.data);
        } else {
          setBestSeller([]);
        }
      } catch (err) {
        console.error('Error fetching best sellers:', err);
        setBestSeller([]);
      } finally {
        setLoading(false); // Set loading false sau khi fetch xong
      }
    };

    fetchBestSeller();
  }, []);

  useEffect(() => {
    if (polo.length > 0) {
      const randomProducts = getRandomProducts(polo, 4);
      setRandomPolo(randomProducts);
    }
  }, [polo]);

  const filteredProducts = products.filter((product) => product.discount > 15);
  const shuffledProducts = randomProduct(filteredProducts);
  if (loading) {
    return <p>Đang tải...</p>;
  }
  return (
    <div>
      <Header />
      <Banner content='Trải nghiệm mua sắm tuyệt vời cùng của hàng của chúng tôi!' />
      <Title title='DANH MỤC MUA SẮM' />
      <CategoryList />
      <Title title='Giảm giá lên đến 50%' linkTo='/products' />

      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-2 xl:mt-5 lg:mt-12 md:mt-12 xl:mb-5 lg:mb-5 md:mb-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-8 xl:gap-12 justify-between'>
          {shuffledProducts.slice(0, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <Title
          title='Sản phẩm mới'
          content='Khám phá sản phẩm mới – đột phá thiết kế, nâng tầm trải nghiệm!'
        />
        {products.length > 0 && <Slider products={products} />}
      </div>

      <Title
        title='Bộ sưu tập POLO'
        content='"Sang trọng từng chi tiết, mạnh mẽ trong phong cách"'
        linkTo='/products'
      />
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4  px-5 mb-2 mt-2 xl:mt-5 lg:mt-12  md:mt-12 xl:mb-5  lg:mb-5  md:mb-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-8 xl:gap-12 justify-between'>
          {randomPolo.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>

      <Title
        title='Sản phẩm bán chạy nhất'
        content='"Sang trọng từng chi tiết, mạnh mẽ trong phong cách"'
        linkTo='/products'
      />
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4  px-5 mb-2 mt-2 xl:mt-5 lg:mt-12  md:mt-12 xl:mb-5  lg:mb-5  md:mb-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-8 xl:gap-12 justify-between'>
          {bestSeller.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>

      <Title
        title='Dành cho bạn'
        content='Khám phá những dòng sản phẩm phù hợp với bản thân bạn!'
      />
      <SliderImage images={shuffledProducts} />

      <Footer />
    </div>
  );
}

export default HomePage;
