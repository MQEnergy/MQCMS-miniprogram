import util from '../utils/request'

export function UserIndex(data) {
  return util.request({
    url: 'user/index',
    method: 'get',
    data: data
  })
}

export function UserStore(data) {
  return util.request({
    url: 'user/store',
    method: 'post',
    data: data
  })
}

export function UserUpdate(data) {
  return util.request({
    url: 'user/update',
    method: 'post',
    data: data
  })
}

export function UserDelete(data) {
  return util.request({
    url: 'user/delete',
    method: 'post',
    data: data
  })
}

export function UserShow(data) {
  return util.request({
    url: 'user/show',
    method: 'post',
    data: data
  })
}