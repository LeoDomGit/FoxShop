import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaRulerCombined, FaTshirt, FaUserCheck } from 'react-icons/fa';

function SizeConsultingPage() {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-gray-50 pt-40 py-20'>
        <div className='container mx-auto px-5 lg:px-20'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>
              Tư Vấn Kích Thước
            </h1>
            <p className='text-lg text-gray-600'>
              Chúng tôi cung cấp hướng dẫn chi tiết để giúp bạn chọn kích thước
              phù hợp với cơ thể.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Tính năng 1 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaRulerCombined className='text-4xl text-blue-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Hướng Dẫn Đo
              </h2>
              <p className='text-gray-600'>
                Hướng dẫn cách đo các vùng trên cơ thể như vai, ngực, eo và hông
                để tìm kích thước phù hợp.
              </p>
            </div>
            {/* Tính năng 2 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaTshirt className='text-4xl text-green-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Bảng Quy Đổi Kích Thước
              </h2>
              <p className='text-gray-600'>
                Tra cứu bảng quy đổi kích thước theo tiêu chuẩn quốc tế như Mỹ,
                Châu Âu, và Châu Á.
              </p>
            </div>
            {/* Tính năng 3 */}
            <div className='p-8 bg-white shadow rounded-lg text-center'>
              <FaUserCheck className='text-4xl text-purple-500 mx-auto mb-4' />
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                Tư Vấn Cá Nhân
              </h2>
              <p className='text-gray-600'>
                Liên hệ đội ngũ chuyên gia của chúng tôi để nhận tư vấn chi tiết
                và nhanh chóng.
              </p>
            </div>
          </div>

          {/* Phần bảng kích thước */}
          <div className='mt-12'>
            <h2 className='text-3xl font-semibold text-gray-800 text-center mb-8'>
              Bảng Kích Thước Quần Áo
            </h2>
            <div className='overflow-x-auto bg-white p-8 shadow-md rounded-lg'>
              <table className='min-w-full table-auto'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th className='px-6 py-4 text-left text-gray-800 font-bold text-base'>
                      Kích Cỡ
                    </th>
                    <th className='px-6 py-4 text-left text-gray-800 font-bold text-base'>
                      Chiều Cao (cm)
                    </th>
                    <th className='px-6 py-4 text-left text-gray-800 font-bold text-base'>
                      Cân Nặng (kg)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      S
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      150-160
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      45-55
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      M
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      160-170
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      55-65
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      L
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      170-180
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      65-75
                    </td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      XL
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      180-190
                    </td>
                    <td className='px-6 py-4 text-gray-700 font-semibold text-lg font-mono'>
                      75-85
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SizeConsultingPage;
