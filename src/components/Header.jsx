/* eslint-disable */
import logo from '../assets/logo.png';
import VietNam from '../assets/image/VietNam.png';
import England from '../assets/image/England.png';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('vi');

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };
  return (
    <div className='relative'>
      {/* py-4 px-2 lg:px-32 xl:px-32 */}
      <header className='text-black top-0 fixed flex items-center justify-center font-medium z-20  w-full shadow-md bg-white'>
        <div className='container lg:px-10  xl:px-24 md:px-4 px-2 py-4 flex gap-2 justify-between  items-center '>
          {/* Logo */}
          <Link to='/'>
            <img
              src={logo}
              alt='Logo'
              className='w-10 lg:w-14 xl:w-14 md:w-14'
            />
          </Link>

          {/* Navbar */}
          <Navbar
            ulClass='hidden xl:flex items-center gap-4'
            liClass='p-3 cursor-pointer md:flex hover:text-[#fe5c17]'
          />

          {/* Search Bar */}
          <Search
            searchClass='relative sm:flex xl:flex lg:flex md:flex items-center justify-center gap-3 border-b-slate-900'
            inputClass='md:w-80 xl:w-48 lg:w-80 sm:w-60 w-40  lg:py-2 xl:py-2 text-sm md:py-2 p-1 pl-10 border rounded-full focus:bg-none focus:outline-none'
            iconPosition='absolute left-3 top-1/2 transform -translate-y-1/2 sm:left-3 sm:top-auto sm:translate-y-0'
          />

          {/* Icons for Heart, User, Cart */}
          <div className='hidden xl:flex md:flex  items-center gap-10  text-xl cursor-pointer z-10'>
            <Link to='#'>
              <IoIosHeartEmpty className='hover:text-[#fe5c17]' />
            </Link>
            <Link to='#'>
              <HiOutlineShoppingCart className='hover:text-[#fe5c17]' />
            </Link>

            {/* <div className='flex justify-items-center gap-1 items-center'>
              <span className='text-sm'>Tiếng Việt</span>
              <img className='w-4 h-4' src={VietNam} alt='Việt Nam' />
            </div> */}
          </div>

          {/* Login */}
          <div className='p-0'>
            <Link to='/login'>
              <div class='px-2 py-1 lg:py-2 lg:px-6 shadow-sm border hover:bg-slate-50 border-slate-300 xl:text-base lg:text-base md:text-base sm:text-base text-xs rounded-md'>
                Đăng nhập
              </div>
            </Link>
            {/* Avatar */}
            {/* <a href='#' class='rounded-full w-8 lg:w-10 xl:w-10 md:w-10'>
          <img src={logo} alt=''></img>
        </a> */}
          </div>

          {/* Responsive Menu Button */}
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
            {/* Tabs for Menu and Icons */}
            <div className='flex  border-b'>
              <div className=' w-full border-b-2 border-[#fe5c17] text-[#fe5c17]'></div>
            </div>

            {/* Conditional Rendering based on the active tab */}
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
