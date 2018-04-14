import { _fetch, fetch } from './Fetch'
const _apiPost = (uri, obj) => {
  return _fetch({
    url: uri,
    method: 'post',
    data: obj
  })
}
const _apiPut = (uri, id, obj) => {
  return _fetch({
    url: uri + id,
    method: 'put',
    data: obj
  })
}
/* 以下为不需要权限的请求方法 */
const apiPost = (uri, obj) => {
  return fetch({
    url: uri,
    method: 'post',
    data: obj
  })
}
export default { apiPost, _apiPut, _apiPost }