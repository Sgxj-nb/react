// 在这里需要注意，此axios封装千万不要用于项目中，这里只是简单的实现了一下，很多判断都还没有进行处理
// 需要根据实际生产进行调整，而且还有一些细节也还没处理完

import axios from 'axios'
const instance = axios.create()
const cancleMap = new Map()
axios.defaults.timeout = 6000

//设置状态码
const codeMsg = {
  400: '请求错误',
  401: '登录状态失效，请重新登录',
  403: '拒绝访问',
  404: '请求地址不存在',
  500: '服务器繁忙',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
}

instance.interceptors.request.use(config => {
  if (cancleMap.has(`${config.url}-${config.method}`)) {
    let cancle = cancleMap.get(`${config.url}-${config.method}`)
    cancle.cancel('重复提交的请求')
    cancleMap.delete(`${config.url}-${config.method}`)
  }
  let source = axios.CancelToken.source()
  config.cancelToken = source.token
  cancleMap.set(`${config.url}-${config.method}`, source)

  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    alert('服务器异常,请稍后重试！！！')
    return Promise.reject(res)
  }
  if (res.status === 401) {
    MessageBox.confirm('登录已失效，请重新登录', '提示', {
      showClose: false,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      //在此处应添加跳转到login
    }).catch(() => {
      window.location.reload()
    })
    return Promise.reject(res.data)
  }
  if (res.status !== 200) {
    alert(codeMsg[res.status])
    return Promise.reject(res.data)
  }
  return res
})

export default instance