import React from 'react';
import Header from '../components/Header'; // Ensure path is correct
import Footer from '../components/Footer';
import bannerImage from '../assets/image/banner1.png'; // Ensure path is correct

function BlogDetail() {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col'>
      {/* Header */}
      <Header />

      {/* Content */}
      <div className='flex-grow bg-white p-4 sm:p-6 lg:p-8 overflow-y-auto mt-[80px]'>
        {/* Title */}
        <h1 className='text-3xl font-semibold text-center mb-4'>
          5 Tips to Increase Your Online Sales
        </h1>
        <p className='text-center text-gray-500 text-sm mb-6'>
          By Oliver Barrett in Company / January 18, 2024
        </p>

        {/* Image */}
        <div className='mb-6'>
          <img
            className='w-full h-[350px] sm:h-[400px] lg:h-[450px] object-cover'
            src={bannerImage}
            alt='Blog'
          />
        </div>

        <div className='px-4 sm:px-8 lg:px-[50px]'>
          {/* Subtitle */}
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>
            Tree doesn’t good void, waters without created
          </h2>

          {/* Content */}
          <p className='text-gray-700 leading-relaxed mb-4'>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepth own lesser
            years itself so seed fifth for grass evening fourth shall you’re
            unto that. Had. Female replenish for yielding so all sea on yielding
            grass you’ll air sea it, open waters subdue, hath.
          </p>

          {/* Bullet Points */}
          <ul className='list-disc pl-5 text-gray-700 mb-4'>
            <li>Upon seas hath every years have whose subdue;</li>
            <li>Given they're tree abundantly male our;</li>
            <li>May set creeping evening male void own seasons behold.</li>
          </ul>

          {/* Paragraph */}
          <p className='text-gray-700 leading-relaxed mb-4'>
            Brought second Made be. Under male male, firmament, beast had light
            after fifth forth darkness thing hath sixth rule night multiply life
            give they’re great. Together. Creature. Green. Them evening a and
            light fourth.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BlogDetail;
