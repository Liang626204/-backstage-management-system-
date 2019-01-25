import axios from 'axios'
/* 基准路径 */
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

/* 登录页面 */
export const login = obj => axios.post('login', obj)
