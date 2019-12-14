import util from '../utils/request'

export function PostIndex(data) {
  return util.request({
    url: 'post/index',
    method: 'get',
    data: data
  })
}

export function PostStore(data) {
  return util.request({
    url: 'post/store',
    method: 'post',
    data: data
  })
}

export function PostUpdate(data) {
  return util.request({
    url: 'post/update',
    method: 'post',
    data: data
  })
}

export function PostDelete(data) {
  return util.request({
    url: 'post/delete',
    method: 'post',
    data: data
  })
}

export function PostShow(data) {
  return util.request({
    url: 'post/show',
    method: 'post',
    data: data
  })
}