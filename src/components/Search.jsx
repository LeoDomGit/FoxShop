import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Search({ searchClass = '', inputClass = '', iconPosition = '' }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };

  const handleSearchSubmit = () => {
    if (query) {
      navigate(`/search?q=${query}`); // Điều hướng tới trang tìm kiếm với query
    }
  };

  return (
    <div className={searchClass}>
      <IoSearchOutline className={iconPosition} />
      <input
        type='text'
        placeholder='Bạn đang tìm gì!'
        className={inputClass}
        value={query}
        onChange={handleSearchChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()} // Gửi tìm kiếm khi nhấn Enter
      />
    </div>
  );
}

export default Search;
