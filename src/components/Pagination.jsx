// import React from 'react';
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoIosArrowForward } from 'react-icons/io';

// function Pagination({ currentPage, totalPages }) {
//   // Create an array for page numbers for the demo (e.g., [1, 2, 3, 4, 5])
//   const pageNumbers = [1, 2, 3, 4, 5];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className='flex justify-center space-x-1 mt-8'>
//       {/* Previous Button */}
//       <button
//         className={`px-2 py-2 ${
//           currentPage === 1
//             ? 'bg-gray-200 cursor-not-allowed'
//             : 'bg-gray-100 hover:bg-gray-200'
//         }`}
//         disabled={currentPage === 1}
//       >
//         <IoIosArrowBack />
//       </button>

//       {pageNumbers.map((page) => (
//         <button
//           key={page}
//           className={`px-2 py-2 ${
//             currentPage === page
//               ? 'bg-[#fe5c17] text-white'
//               : 'bg-gray-100 hover:bg-gray-200'
//           }`}
//         >
//           {page}
//         </button>
//       ))}

//       {/* Next Button */}
//       <button
//         className={`px-2 py-2 ${
//           currentPage === totalPages
//             ? 'bg-gray-200 cursor-not-allowed'
//             : 'bg-gray-100 hover:bg-gray-200'
//         }`}
//         disabled={currentPage === totalPages}
//       >
//         <IoIosArrowForward />
//       </button>
//     </div>
//   );
// }

// export default Pagination;
