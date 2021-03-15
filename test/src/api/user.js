import http from '@/utils/http'

// 用户登录
export const login = params => {
  return http.post('/adminapi/sys/login', params)
}
