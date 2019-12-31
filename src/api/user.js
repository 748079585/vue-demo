import request from '@/utils/request'

const params = {
  clientId: 'app',
  secret: '123456',
  scope: 'all',
  username: '',
  password: ''
}

const info = {
  roles: ['admin'],
  introduction: 'I am a super administrator',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'Super Admin'
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
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  console.log(token)
  return {
    data: info
  }
}

export function logout() {
  console.log("logout")
  return request({
    url: '/sys/logout',
    method: 'delete'
  })
}
