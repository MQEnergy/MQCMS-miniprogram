import { config } from "../config"

/**
 * 网络请求
 * @param params
 * @returns {Promise<T>}
 */
const request = (params) => {
  const userInfo = uni.getStorageSync(config.usersKey);
  if (!userInfo) {
    delete config.headers.Authorization
  } else {
    config.headers.Authorization = 'Bearer ' + userInfo.token;
  }

  return uni.request({
    url: config.baseUrl + params.url,
    method: params.method || 'GET',
    data: params.data || {},
    header: config.headers,

  }).then(data => {
    var [error, res]  = data;
    if (res && res.statusCode != 200) {
      switch (res.statusCode) {
        case 400: res.data.message = res.data.message; break;
        case 401: res.data.message = '未授权，请登录'; break;
        case 403: res.data.message = '拒绝访问'; break;
        case 404: res.data.message = `请求地址出错`; break;
        case 408: res.data.message = '请求超时'; break;
        case 500: res.data.message = '服务器内部错误'; break;
        case 501: res.data.message = '服务未实现'; break;
        case 502: res.data.message = '网关错误'; break;
        case 503: res.data.message = '服务不可用'; break;
        case 504: res.data.message = '网关超时'; break;
        case 505: res.data.message = 'HTTP版本不受支持'; break;
        default: break;
      }
      failCallBack(res.data);
      return Promise.reject(res.data);
    }
    return Promise.resolve(res.data);
  })
}

/**
 * 错误提醒
 * @param err
 */
const failCallBack = (err) => {
    uni.showToast({
        icon: 'none',
    	title: err.message
    })
}

/**
 * 创建websocket连接
 * @param params
 */
const createWebsocket = (params) => {
    uni.connectSocket({
        url: config.wssUrl + params.url,
    })
    uni.onSocketOpen(params.openCallBack);
    uni.onSocketMessage(params.messageCallBack);
    uni.onSocketError(params.errorCallBack);
    uni.onSocketClose(params.closeCallBack);
}

/**
 * 组装websocket参数
 * @param message
 * @param module_id
 * @param data
 * @returns {string}
 */
const websocketParams = (message, module_id, data) => {
    return JSON.stringify({
        'message': message,
        'module_id': module_id,
        'token': config.weToken,
        'data': data
    });
};

export default {
    request,
    createWebsocket,
    websocketParams
}
