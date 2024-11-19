import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import { CiHeart } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import Slider from '../components/Slider'; // Import Slider
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const urlImage = process.env.REACT_APP_URL_IMAGE;

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [slides, setSlides] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]); // State để lưu sản phẩm liên quan
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sizeError, setSizeError] = useState(null);
  const [colorError, setColorError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productData } = await axios.get(
          `https://dashboard.trungthanhzone.com/public/api/products/${slug}`
        );
        setProduct(productData);
        setSlides(productData.gallery?.map((image) => image.image) || []);

        const categoryId = productData.categories?.[0]?.id;
        if (categoryId) {
          const { data: relatedProductsData } = await axios.get(
            `https://dashboard.trungthanhzone.com/public/api/products/products-category/${categoryId}`
          );
          setRelatedProducts(relatedProductsData || []);
        }
      } catch (error) {
        console.error('Error loading product', error);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    document.title = product ? product.name : 'Tên sản phẩm';
  }, [product]);

  const handleSizeSelect = (size) => setSelectedSize(size);
  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () =>
    quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);

  const handleAddToCart = () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
      return;
    }

    if (!selectedSize) setSizeError('Vui lòng chọn size.');
    else setSizeError(null);

    if (!selectedColor) setColorError('Vui lòng chọn màu sắc.');
    else setColorError(null);

    if (selectedSize && selectedColor) {
      dispatch(
        addToCart({
          productId: product.id,
          quantity: quantity,
          size: selectedSize,
          color: selectedColor,
        })
      );
      navigate('/cart');
    }
  };

  if (!product) {
    return <p>Đang tải...</p>;
  }

  return (
    <>
      <Header />
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mt-[140px] lg:mt-[140px] sm:mt-[140px] md:mt-[140px] xl:mb-5 lg:mb-5 md:mb-5 flex flex-col gap-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-4'>
          <div>
            <Carousel>
              {slides.length > 0 ? (
                slides.map((s, index) => (
                  <img
                    key={index}
                    src={`${urlImage}${s}`}
                    alt='Sản phẩm'
                    className='h-[400px] sm:h-[500px] md:h-[580px] xl:h-[580px] lg:h-[580px] w-full object-cover'
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            </Carousel>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='font-medium mb-4 flex flex-col'>
              <span className='text-gray-500 text-sm mb-2'>
                {product.categories?.[0]?.name || 'No Category'}
              </span>
              <span className='text-[24px]'>
                {product.name} {product.in_stock <= 0 && '(Hết hàng)'}
              </span>
            </div>
            <div className='text-base leading-relaxed'>
              <div className='font-medium text-sm'>
                Thương hiệu:{' '}
                <span className='font-semibold'>
                  {product.brands?.name || 'No Brand'}
                </span>
              </div>

              <div className='font-medium text-sm mt-4'>
                Màu:
                <div className='flex space-x-2'>
                  {product.attributes
                    ?.filter((attr) => attr.name === 'color')
                    .map((colorAttr, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(colorAttr.type)}
                        className={`w-6 h-6 rounded-full border border-gray-200 ${
                          selectedColor === colorAttr.type
                            ? 'ring-2 ring-offset-2 ring-[#fe5c17]'
                            : ''
                        }`}
                        style={{
                          backgroundColor: colorAttr.type,
                        }}
                      ></button>
                    ))}
                </div>
                {colorError && (
                  <p className='text-red-500 mt-2'>{colorError}</p>
                )}
              </div>
            </div>
            <div className='font-medium mb-4 flex flex-col mt-8'>
              <div className='text-gray-500 mb-2 flex gap-3 items-center'>
                <span className='text-[24px] text-[#fe5c17]'>
                  {(
                    product.price -
                    (product.price * product.discount) / 100
                  ).toLocaleString('vi-VN')}
                  đ
                </span>
                <span className='line-through'>
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
              </div>
            </div>
            <div className='mt-4'>
              <div className='mt-5'>
                <h2 className='text-[16px] font-semibold mb-2'>Chọn size</h2>
                <div className='flex space-x-4'>
                  {product.attributes
                    ?.filter((attr) => attr.name === 'size')
                    .map((attr, index) => (
                      <button
                        key={index}
                        onClick={() => handleSizeSelect(attr.type)}
                        className={`px-3 py-1 border ${
                          selectedSize === attr.type
                            ? 'bg-[#fe5c17] text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {attr.type}
                      </button>
                    ))}
                </div>
                {sizeError && <p className='text-red-500 mt-2'>{sizeError}</p>}
              </div>
            </div>

            <div className='flex items-center space-x-4 mt-12'>
              <button
                onClick={handleDecrease}
                className='px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 '
              >
                <FiMinus />
              </button>
              <input
                type='text'
                className='w-[80px] text-center border border-gray-300 px-6 py-2 outline-none'
                value={quantity}
                readOnly
              />
              <button
                onClick={handleIncrease}
                className='px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 '
              >
                <GoPlus />
              </button>
            </div>
            <div className='flex mt-12 gap-4'>
              <button
                className='py-3 px-6 bg-[#fe5c17] hover:bg-[#fe5517] text-white shadow-md'
                onClick={handleAddToCart}
              >
                Thêm vào giỏ
              </button>
              <button className='py-3 px-5 border-[#fe5c17] border-[1px] text-[#fe5c17] hover:bg-[#fe5517] hover:text-white shadow-sm'>
                <CiHeart className='text-[18px]' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <span className='font-semibold'>Mô tả sản phẩm</span>
          <div
            className='text-gray-700 text-[16px]'
            dangerouslySetInnerHTML={{ __html: product.content || '' }}
          />
        </div>
        {/* Hiển thị sản phẩm liên quan */}
        <span className='font-semibold text-[20px]'>Sản phẩm liên quan</span>
      </div>
      <Slider products={relatedProducts} /> <Comment />
      <Footer />
    </>
  );
}

export default ProductDetail;
