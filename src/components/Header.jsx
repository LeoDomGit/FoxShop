/* eslint-disable */
import logo from '../assets/logo.png';
import VietNam from '../assets/image/VietNam.png';
import England from '../assets/image/England.png';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { Link, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { clearCartLogout } from '../stores/cart';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('vi');
  const [showMenu, setShowMenu] = useState(false);
  const avatar = localStorage.getItem('avatar');
  const cartItems = useSelector((state) => state.cart.items);
  const totalProducts = cartItems.length;

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('avatar');
    localStorage.removeItem('phone');
    dispatch(clearCartLogout());
    navigate('/');
  };

  return (
    <div className='relative'>
      <header className='text-black top-0 fixed flex items-center justify-center font-medium z-20 w-full shadow-md bg-white'>
        <div className='container lg:px-10 xl:px-24 md:px-4 px-2 py-4 flex gap-2 justify-between items-center'>
          <Link to='/'>
            <img
              src={logo}
              alt='Logo'
              className='w-10 lg:w-14 xl:w-14 md:w-14'
            />
          </Link>

          <Navbar
            ulClass='hidden xl:flex items-center gap-4'
            liClass='p-3 cursor-pointer md:flex hover:text-[#fe5c17]'
          />

          <Search
            searchClass='relative sm:flex xl:flex lg:flex md:flex items-center justify-center gap-3 border-b-slate-900'
            inputClass='md:w-80 xl:w-48 lg:w-80 sm:w-60 w-40 lg:py-2 xl:py-2 text-sm md:py-2 p-1 pl-10 border rounded-full focus:bg-none focus:outline-none'
            iconPosition='absolute left-3 top-1/2 transform -translate-y-1/2 sm:left-3 sm:top-auto sm:translate-y-0'
          />

          <div className='hidden xl:flex md:flex items-center gap-10 text-xl cursor-pointer z-10'>
            <Link to='#'>
              <IoIosHeartEmpty className='hover:text-[#fe5c17]' />
            </Link>
            <Link to='/cart'>
              <div className='relative'>
                <HiOutlineShoppingCart className='hover:text-[#fe5c17] text-2xl' />
                {totalProducts > 0 && (
                  <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                    {totalProducts}
                  </span>
                )}
              </div>
            </Link>
          </div>

          <div className='relative'>
            <div
              className='p-0'
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              {avatar ? (
                <img
                  src={`${avatar}`}
                  alt='User Avatar'
                  className='rounded-full w-10 h-10 cursor-pointer'
                />
              ) : (
                <Link to='/login'>
                  <div className='px-2 py-1 lg:py-2 lg:px-6 shadow-sm border hover:bg-slate-50 border-slate-300 xl:text-base lg:text-base md:text-base sm:text-base text-xs rounded-md'>
                    Đăng nhập
                  </div>
                </Link>
              )}
            </div>

            {showMenu && avatar && (
              <div
                className='absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-50'
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <div className='absolute -top-2 right-4 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-300'></div>

                <Link
                  to='/profile'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Tài khoản của tôi
                </Link>
                <Link
                  to='/orders'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Đơn mua
                </Link>
                <button
                  onClick={handleLogout}
                  className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>

          <CiMenuBurger
            className='xl:hidden block cursor-pointer text-lg'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <div
            className={`absolute text-center xl:hidden top-[70px] left-0 drop-shadow-sm w-full bg-white border-t transform transition-all ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
          >
            <div className='flex border-b'>
              <div className='w-full border-b-2 border-[#fe5c17] text-[#fe5c17]'></div>
            </div>

            <div>
              <Navbar
                ulClass='flex flex-col text-start'
                liClass='list-none px-8 border-b w-full p-2 hover:bg-white hover:text-[#fe5c17] transition-all cursor-pointer'
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
