import request from '../../../request'

export function getRecruitList() {
  return request({
    url: '/?m=Index&a=RecruitList',
    method: 'get',
  })
}