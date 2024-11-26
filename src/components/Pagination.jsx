import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className='flex justify-center space-x-1 mt-8'>
      <button
        className={`px-2 py-2 ${
          currentPage === 1
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        <IoIosArrowBack />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`px-4 py-2 ${
              currentPage === page
                ? 'bg-[#fe5c17] text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className={`px-2 py-2 ${
          currentPage === totalPages
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
