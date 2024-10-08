import { IoSearchOutline } from 'react-icons/io5';
function Search({ searchClass = '', inputClass = '', iconPosition = '' }) {
  return (
    <div>
      <div className={searchClass}>
        <IoSearchOutline className={iconPosition} />
        <input
          type='text'
          placeholder='Bạn đang tìm gì! '
          className={inputClass}
        />
      </div>
    </div>
  );
}

export default Search;
