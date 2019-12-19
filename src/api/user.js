import request from '@/utils/request'
import user from '../store/modules/user'

const params = {
  clientId: 'app',
  secret: '123456',
  scope: 'all',
  username: '',
  password: ''
}

export function login(data) {
  console.log(data)
  console.log('login request')
  const { username, password } = data
  params.username = username
  params.password = password
  console.log(params)
  return request({
    url: '/sys/login',
    method: 'post',
    params
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
