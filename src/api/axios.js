import axios from 'axios';

export default axios.create({
  baseURL: 'https://dashboard.foxshop.one/api',
  // baseURL: 'http://localhost:8000/api',
  withCredentials: true,
});
