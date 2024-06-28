import axios from 'axios';
import Cookies from 'js-cookie';
import {API_HOST} from './config'

// 创建 axios 实例
const instance = axios.create({
  baseURL: API_HOST, // 替换成你的后端 API 的基础 URL
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 从 Cookies 中获取 token
    const token = Cookies.get('token');
    if (token) {
      // 如果 token 存在，在请求头中添加 Authorization 字段
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
