// import request from '@/utils/request'

const NameList = []
const count = 100

for (let i = 0; i < count; i++) {
  NameList.push(
    { name: 'name' + i }
  )
}
NameList.push({ name: 'mock-Pan' })

export function searchUser(name) {
  // return request({
  //   url: '/search/user',
  //   method: 'get',
  //   params: { name }
  // })
  const mockNameList = NameList.filter(item => {
    const lowerCaseName = item.name.toLowerCase()
    return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
  })
  return {
    code: 20000,
    data: { items: mockNameList }
  }
}

export function transactionList(query) {
  // return request({
  //   url: '/transaction/list',
  //   method: 'get',
  //   params: query
  // })
  return {
    code: 20000,
    data: {
      total: 20,
      'items|20': [{
        order_no: '@guid()',
        timestamp: '111111111',
        username: '@name()',
        price: '@float(1000, 15000, 0, 2)',
        'status|1': ['success', 'pending']
      }]
    }
  }
}
