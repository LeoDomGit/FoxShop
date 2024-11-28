import axios from 'axios';

export default axios.create({
  baseURL: 'https://dashboard.foxshop.one/api',
  withCredentials: true,
});
