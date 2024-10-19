import React, { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className='container overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className='w-full flex-shrink-0'>
            {slide}
          </div>
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-2'>
        <button
          onClick={prev}
          className='p-2 rounded-full shadow text-gray-600 bg-[#ffffff] hover:bg-[#eeeeee]'
        >
          <GoChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className='p-2 rounded-full shadow text-gray-600 bg-[#ffffff] hover:bg-[#eeeeee]'
        >
          <GoChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
