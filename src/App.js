/* eslint-disable */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import RecoverPassword from './pages/RecoverPassword';
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            {/* Route trang chủ */}
            <Route path='/' element={<HomePage />} />
          </Routes>
          <Routes>
            {/* Route trang sản phẩm*/}
            <Route path='/products' element={<ProductPage />} />
          </Routes>

          <Routes>
            {/* Route trang sản phẩm*/}
            <Route path='/products/san-pham' element={<ProductDetail />} />
          </Routes>

          <Routes>
            {/* Route trang Đăng nhập*/}
            <Route path='/login' element={<Login />} />
          </Routes>

          <Routes>
            {/* Route trang Đăng kí*/}
            <Route path='/signup' element={<Signup />} />
          </Routes>

          <Routes>
            {/* Route trang quên mk*/}
            <Route path='/forgot' element={<Forgot />} />
          </Routes>

          <Routes>
            {/* Route lấy lại mk*/}
            <Route path='/recover-password' element={<RecoverPassword />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
