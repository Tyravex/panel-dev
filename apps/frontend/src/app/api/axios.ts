import axios from 'axios';

// Axios instance used across the app
// withCredentials is REQUIRED for sending httpOnly cookies
export const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // 🔥 ensures cookies are sent with every request
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});