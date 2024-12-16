import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import Cart from './pages/Cart';
import Post from './pages/Post';
import BlogDetail from './pages/BlogDetail';
import AboutPage from './pages/AboutPage';
import HelpCenter from './pages/HelpCenter';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import PurchasePolicy from './pages/PurchasePolicy';
import ChatBox from './components/ChatBox';
import Profile from './pages/Profile';
import ThankYou from './pages/ThankYou';

import WarrantyPage from './pages/WarrantyPage';
import GiftWrapPage from './pages/GiftWrapPage';
import SizeConsultingPage from './pages/SizeConsultingPage';

import { useDispatch } from 'react-redux';
import { loadCartFromLocalStorage } from './stores/cart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './pages/SearchPage';
import Orders from './pages/Orders';
import ProductPageByCategory from './pages/ProductByCatePage';

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
          <Route
            path='/categories/:categorySlug'
            element={<ProductPageByCategory />}
          />
          {/* Route trang Giỏ hàng */}
          <Route path='/cart' element={<Cart />} />
          {/* Route trang Đăng nhập */}
          <Route path='/login' element={<Login />} />
          {/* Route trang Đăng kí */}
          <Route path='/signup' element={<Signup />} />
          {/* Route trang quên mật khẩu */}
          <Route path='/forgot' element={<Forgot />} />
          {/* Route trang quản lý tài khoản */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/thankyou' element={<ThankYou />} />
          {/* Route trang tìm kiếm */}
          <Route path='/search' element={<SearchPage />} />
          <Route path='/orders' element={<Orders />} />
          {/* Blog chi tiết */}
          <Route path='/post/:slug' element={<BlogDetail />} />
          {/* Trang giới thiệu */}
          <Route path='/about' element={<AboutPage />} />
          {/* Trung tâm trợ giúp */}
          <Route path='/help' element={<HelpCenter />} />
          {/* Chính sách đổi trả */}
          <Route path='/return-policy' element={<ReturnPolicy />} />
          {/* Trang Vận Chuyển */}
          <Route path='/shipping-policy' element={<ShippingPolicy />} />
          {/* Trang Chính Sách Mua Hàng */}
          <Route path='/purchase-policy' element={<PurchasePolicy />} />
          {/* Các trang mới */}
          <Route path='/warranty' element={<WarrantyPage />} />
          <Route path='/gift-wrap' element={<GiftWrapPage />} />
          <Route
            path='/size-consulting'
            element={<SizeConsultingPage />}
          />{' '}
        </Routes>
        <ChatBox />
        <ToastContainer
          position='top-right'
          autoClose={1000}
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
