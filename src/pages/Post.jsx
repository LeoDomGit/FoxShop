import React, { useEffect } from 'react';
import PostItem from '../components/PostItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Post() {
  useEffect(() => {
    document.title = 'Bài viết';
  }, []);
  return (
    <div>
      <Header />
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mt-[140px] lg:mt-[140px] sm:mt-[140px] md:mt-[140px] xl:mb-5 lg:mb-5 md:mb-5 flex flex-col gap-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Post;
