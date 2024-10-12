/* eslint-disable */
import React from 'react';
import ProductItem from './ProductItem';
import Title from './Title';

function Product() {
  return (
    <>
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4  px-5 mb-2 mt-2 xl:mt-5 lg:mt-12  md:mt-12 xl:mb-5  lg:mb-5  md:mb-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 sm:gap-8 xl:gap-12 justify-between'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
}

export default Product;
