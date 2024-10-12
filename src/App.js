/* eslint-disable */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
function App() {
  return (
    <div>
      <Router>
        <div>
          {/* Các tuyến đường (route) của ứng dụng */}
          <Routes>
            {/* Tuyến đường cho trang chủ */}
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
