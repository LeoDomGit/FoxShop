function Navbar({ ulClass = '', liClass = '' }) {
  return (
    <ul className={ulClass}>
      {/* p-3 cursor-pointer hover:text-[#fe5c17] */}
      <li className={liClass}>Hàng mới</li>
      <li className={liClass}>Giá tốt</li>
      <li className={liClass}>Áo</li>
      <li className={liClass}>Quần</li>
      <li className={liClass}>Phụ kiện</li>
      <li className={liClass}>Cửa hàng</li>
    </ul>
  );
}
export default Navbar;
