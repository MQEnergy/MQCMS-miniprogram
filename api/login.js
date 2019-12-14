import util from '../utils/request'

export function Login(data) {
  return util.request({
    url: 'auth/login',
    method: 'post',
    data: data
  })
}