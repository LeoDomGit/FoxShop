import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownVisible, setIsUserDropdownVisible] = useState(false);

  const showUserDropdown = () => setIsUserDropdownVisible(true);
  const hideUserDropdown = () => setIsUserDropdownVisible(false);

  return (
    <header className='text-gray-900 py-4 px-8 md:px-32 bg-white drop-shadow-sm'>
      <div className='container flex justify-between items-center'>
        {/* Logo */}
        <a href='#'>
          <img src={logo} alt='Logo' className='w-14' />
        </a>

        {/* Navbar */}
        <Navbar
          ulClass='hidden xl:flex items-center gap-8 text-gray-500  uppercase text-sm'
          liClass='p-3 cursor-pointer hover:text-[#fe5c17]'
        />

        {/* Search Bar */}
        {/* Search Bar */}
        <Search
          searchClass='relative sm:flex xl:flex md:flex items-center justify-center gap-3 border-b-slate-900'
          inputClass='py-2 md:80 lg:w-60 sm:w-40 pl-10 border text-sm rounded-full focus:bg-none focus:outline-none'
          iconPosition='absolute left-3 top-1/2 transform -translate-y-1/2 sm:left-3 sm:top-auto sm:translate-y-0'
        />

        {/* Icons for Heart, User, Cart */}
        <div className='hidden xl:flex md:flex sm:flex items-center gap-8 text-gray-500 text-xl cursor-pointer'>
          <IoIosHeartEmpty className='hover:text-[#fe5c17]' />

          {/* User Icon with Dropdown */}
          <div
            className='relative'
            onMouseEnter={showUserDropdown}
            onMouseLeave={hideUserDropdown}
          >
            <CiUser className='hover:text-[#fe5c17] cursor-pointer' />

            {/* Dropdown for user (login/register) */}
            {isUserDropdownVisible && (
              <div className='absolute right-0 text-sm mt-2 w-52 bg-white border rounded shadow-lg'>
                <div className='absolute -top-2 left-0 w-full h-2'></div>

                <ul className='p-2 font-light'>
                  <li className='p-2 cursor-pointer'>Đăng nhập</li>
                  <li className='p-2 cursor-pointer'>Tạo tài khoản</li>
                </ul>
              </div>
            )}
          </div>

          <HiOutlineShoppingCart className='hover:text-[#fe5c17]' />
        </div>

        {/* Responsive Menu Button */}
        <CiMenuBurger
          className='xl:hidden block cursor-pointer text-lg text-gray-700'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {/* Mobile Menu (Dropdown) */}
        <div
          className={`absolute text-center xl:hidden top-20 left-0 w-full bg-white border-t transform transition-all ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        >
          <Navbar
            ulClass='p-2 flex flex-col text-center uppercase text-sm text-gray-500'
            liClass='list-none w-full p-2 hover:bg-white hover:text-[#fe5c17] transition-all cursor-pointer'
          />

          {/* Search Bar */}
        </div>
      </div>
    </header>
  );
}

export default Header;
