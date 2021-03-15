import qs from 'qs'
import axios from 'axios'

// 接口地址
axios.defaults.baseURL = '/'
// 超时时间
axios.defaults.timeout = 15000
// 请求拦截
axios.interceptors.request.use(
  config => {
    config.headers['version'] = 1575026113
    return config
  },
  error => Promise.reject(error)
)
// 相应拦截
axios.interceptors.response.use(
  res => res,
  error => Promise.reject(error)
)

// get
export const get = (url, params = {}, config = {}) => {
  const options = Object.assign({}, { params }, config)
  return axios.get(url, options)
}

// post
export const post = (url, data = {}, config = {}) => {
  config['Content-Type'] = 'application/x-www-form-urlencoded'
  return axios.post(url, qs.stringify(data), config)
}

// postjson
export const postJson = (url, data = {}, config = {}) => {
  config['Content-Type'] = 'application/json;charset=UTF-8'
  return axios.post(url, data, config)
}

export default {
  get,
  post,
  postJson
}
