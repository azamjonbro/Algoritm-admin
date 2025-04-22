// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://iticket-h3jg.onrender.com', 
  timeout: 10000, // Maksimal kutish vaqti (ms)
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer token', // Agar kerak bo'lsa token qo'shing
  }
});
instance.interceptors.request.use(config => {
  // Tokenni localStorage yoki boshqa joydan olib qo'shish mumkin
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Javobga ishlovchi interceptor (ixtiyoriy)
instance.interceptors.response.use(response => {
  return response;
}, error => {
  // Xatolikni log qilish, status kodga qarab muomala qilish mumkin
  console.error('Axios error:', error);
  return Promise.reject(error);
});

export default instance;
