// import request from '@/utils/request'

export function tree(data) {
  return request({
    url: '/posts',
    method: 'get',
    // data
  })
}