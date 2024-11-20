/* eslint-disable */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import RecoverPassword from './pages/RecoverPassword';
import Cart from './pages/Cart';
import Post from './pages/Post';
import BlogDetail from './pages/BlogDetail';
import AboutPage from './pages/AboutPage';
import HelpCenter from './pages/HelpCenter';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import PurchasePolicy from './pages/PurchasePolicy';
import ChatBox from './components/ChatBox';

import { useDispatch } from 'react-redux';
import { loadCartFromLocalStorage } from './stores/cart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);
  return (
    <Router>
      <div>
        <Routes>
          {/* Route trang chủ */}
          <Route path='/' element={<HomePage />} />
          {/* Route trang sản phẩm */}
          <Route path='/products' element={<ProductPage />} />
          {/* Route trang Bài viết */}
          <Route path='/post' element={<Post />} />
          {/* Route chi tiết sản phẩm */}
          <Route path='/products/:slug' element={<ProductDetail />} />
          {/* Route trang Giỏ hàng */}
          <Route path='/cart' element={<Cart />} />
          {/* Route trang Đăng nhập */}
          <Route path='/login' element={<Login />} />
          {/* Route trang Đăng kí */}
          <Route path='/signup' element={<Signup />} />
          {/* Route trang quên mật khẩu */}
          <Route path='/forgot' element={<Forgot />} />
          {/* Route lấy lại mật khẩu */}
          <Route
            path='/recover-password/:token/:email'
            element={<RecoverPassword />}
          />
          {/* Blog chi tiết */}
          <Route path='/blog-detail' element={<BlogDetail />} />
          {/* Trang giới thiệu */}
          <Route path='/about' element={<AboutPage />} />
          {/* Trung tâm trợ giúp */}
          <Route path='/help' element={<HelpCenter />} />
          {/* Chính sách đổi trả */}
          <Route path='/return-policy' element={<ReturnPolicy />} />
          {/* Trang Vận Chuyển */}
          <Route path='/shipping-policy' element={<ShippingPolicy />} />
          {/*  Trang Chính Sách Mua Hàng */}
          <Route path='/purchase-policy' element={<PurchasePolicy />} />
        </Routes>
        <ChatBox />
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </div>
    </Router>
  );
}

export default App;
