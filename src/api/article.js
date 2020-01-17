import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api-o/permissions',
    method: 'get',
    params: query
  })
}

export function deletePermission(id) {
  return request({
    url: '/api-o/permissions/' + id,
    method: 'delete'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/api-o/permissions',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/api-o/permissions',
    method: 'put',
    data
  })
}
