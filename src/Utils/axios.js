import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://iticket-h3jg.onrender.com', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
});
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
  console.error('Axios error:', error);
  return Promise.reject(error);
});

export default instance;
