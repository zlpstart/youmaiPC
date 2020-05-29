import request from '../../../request'

export function RecruitDuty(data) {
  return request({
    url: '/?m=Index&a=RecruitDuty',
    method: 'post',
    data
  })
}