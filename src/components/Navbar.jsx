import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { IoIosHeartEmpty } from 'react-icons/io';
function Navbar({ ulClass = '', liClass = '' }) {
  return (
    <ul className={ulClass}>
      <li className={liClass}>
        <Link to='/'>Trang chủ</Link>
      </li>
      <li className={liClass}>
        <Link to='/post'>Bài viết</Link>
      </li>
      <li className={liClass}>
        <Link to='/products'>Sản phẩm</Link>
      </li>

      <li className={liClass}>
        <Link to='#'>Liên hệ</Link>
      </li>

      <li className={liClass}>
        <Link to='/about'>Giới thiệu</Link>
      </li>

      <li className='list-none px-8 border-b w-full p-2 hover:bg-white hover:text-[#fe5c17] transition-all cursor-pointer lg:hidden md:hidden xl:hidden '>
        <Link to='/cart'>
          <div className='flex items-center gap-2'>
            <span>Giỏ hàng</span>
            <HiOutlineShoppingCart />
          </div>
        </Link>
      </li>
      <li className='list-none px-8 border-b w-full p-2 hover:bg-white hover:text-[#fe5c17] transition-all cursor-pointer lg:hidden md:hidden xl:hidden '>
        <div className='flex items-center gap-2'>
          <span>Yêu thích</span>
          <IoIosHeartEmpty />
        </div>
      </li>
    </ul>
  );
}
export default Navbar;
