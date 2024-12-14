import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
export default axios.create({
  // baseURL: baseURL,
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
});
