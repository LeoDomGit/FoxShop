/* eslint-disable */
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='text-gray-900 py-4 px-2 lg:px-32 xl:px-32 md:px-8 bg-white drop-shadow-sm'>
      <div className='container flex gap-2 justify-between items-center'>
        {/* Logo */}
        <a href='#'>
          <img src={logo} alt='Logo' className='w-10 lg:w-14 xl:w-14 md:w-14' />
        </a>

        {/* Navbar */}
        <Navbar
          ulClass='hidden xl:flex items-center gap-8 text-gray-500  uppercase text-sm'
          liClass='p-3 cursor-pointer hover:text-[#fe5c17]'
        />

        {/* Search Bar */}
        <Search
          searchClass='relative sm:flex xl:flex lg:flex md:flex items-center justify-center gap-3 border-b-slate-900'
          inputClass='lg:py-2 xl:py-2 md:py-2 p-1 md:w-80 xl:w-40 lg:w-80 w-40 pl-10 border text-sm rounded-full focus:bg-none focus:outline-none'
          iconPosition='absolute left-3 top-1/2 transform -translate-y-1/2 sm:left-3 sm:top-auto sm:translate-y-0'
        />

        {/* Icons for Heart, User, Cart */}
        <div className='hidden xl:flex md:flex  items-center gap-10 text-gray-500 text-xl cursor-pointer z-10'>
          <IoIosHeartEmpty className='hover:text-[#fe5c17]' />

          <HiOutlineShoppingCart className='hover:text-[#fe5c17]' />
        </div>

        {/* Login */}
        <div>
          <a
            href='#'
            class='px-3 py-1 lg:py-2 lg:px-6 shadow-sm hover:bg-orange-500 border border-slate-300 font-light text-gray-600 xl:text-base lg:text-base md:text-base  text-xs rounded-md'
          >
            Đăng nhập
          </a>
          {/* Avatar */}
          {/* <a href='#' class='rounded-full w-8 lg:w-10 xl:w-10 md:w-10'>
          <img src={logo} alt=''></img>
        </a> */}
        </div>

        {/* Responsive Menu Button */}
        <CiMenuBurger
          className='xl:hidden block cursor-pointer text-lg text-gray-700'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div
          className={`absolute text-center xl:hidden  text-sm font-light top-3/4 left-0 w-full bg-white border-t transform transition-all ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        >
          {/* Tabs for Menu and Icons */}
          <div className='flex  border-b'>
            <div className=' w-full border-b-2 border-[#fe5c17] text-[#fe5c17]'></div>
          </div>

          {/* Conditional Rendering based on the active tab */}
          <div>
            <Navbar
              ulClass='flex flex-col text-start uppercase text-sm text-gray-500'
              liClass='list-none px-8 border-b w-full p-2 hover:bg-white hover:text-[#fe5c17] transition-all cursor-pointer'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
