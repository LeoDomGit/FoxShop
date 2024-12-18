import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useSelector } from 'react-redux';

function Navbar({ ulClass = '', liClass = '' }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalProducts = cartItems.length;
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
        <Link to='/about'>Giới thiệu</Link>
      </li>

      <li className='list-none px-8 border-b w-full p-2 hover:bg-white hover:text-[#fe5c17] transition-all cursor-pointer lg:hidden md:hidden xl:hidden '>
        <Link to='/cart'>
          <div className='flex items-center gap-2 hover:text-[#fe5c17] '>
            <HiOutlineShoppingCart className='text-2xl' />
            {totalProducts > 0 && (
              <span className='absolute left-[45px] bottom-[20px] bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {totalProducts}
              </span>
            )}
          </div>
        </Link>
      </li>
    </ul>
  );
}
export default Navbar;
