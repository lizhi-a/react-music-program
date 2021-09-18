import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

//添加拦截
instance.interceptors.request.use(config => {
  console.log('请求被拦截')
  return config
}, error => {

})

instance.interceptors.response.use(res => {
  return res.data
}, error => {
  return error;
})


export default instance;
