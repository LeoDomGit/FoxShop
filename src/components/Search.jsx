import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Search({ searchClass = '', inputClass = '', iconPosition = '' }) {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && keyword.trim()) {
      navigate(`/search?q=${encodeURIComponent(keyword.trim())}`); // Mã hóa từ khóa để tránh lỗi URL
      console.log(`/search?q=${keyword.trim()}`); // Debug URL
    }
  };

  return (
    <div className={searchClass}>
      <IoSearchOutline className={iconPosition} />
      <input
        type='text'
        placeholder='Bạn đang tìm gì!'
        className={inputClass}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default Search;
