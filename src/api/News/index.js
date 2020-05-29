import request from '../../../request'

export function getNews() {
  return request({
    url: '/?m=Index&a=NEWS',
    method: 'get',
  })
}

export function getNewsContent(data) {
  return request({
    url: '/?m=Index&a=NewsContent',
    method: 'post',
    data
  })
}