import util from '../utils/request'

export function TagIndex(data) {
  return util.request({
    url: 'tag/index',
    method: 'get',
    data: data
  })
}

export function TagStore(data) {
  return util.request({
    url: 'tag/store',
    method: 'post',
    data: data
  })
}

export function TagUpdate(data) {
  return util.request({
    url: 'tag/update',
    method: 'post',
    data: data
  })
}

export function TagDelete(data) {
  return util.request({
    url: 'tag/delete',
    method: 'post',
    data: data
  })
}

export function TagShow(data) {
  return util.request({
    url: 'tag/show',
    method: 'post',
    data: data
  })
}