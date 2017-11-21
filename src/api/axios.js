import axios from 'axios'
import NProgress from 'nprogress' // 全局请求的进度条
import 'nprogress/nprogress.css'// 全局请求的进度条样式

let qs = require('qs')
let axiosIns = axios.create({})

if (process.env.NODE_ENV === 'development') {
  axiosIns.defaults.baseURL = 'http://127.0.0.1/' // 调试界面的默认请求
} else if (process.env.NODE_ENV === 'debug') {
  axiosIns.defaults.baseURL = 'http://zdyh.inm.cc/'
} else if (process.env.NODE_ENV === 'production') {
  axiosIns.defaults.baseURL = 'http://zdyh.inm.cc/' // 生产环境的默认请求地址
}
axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'
axiosIns.defaults.responseType = 'json'
axiosIns.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}
]
axiosIns.defaults.validateStatus = function (status) {
  return true
}
axiosIns.interceptors.request.use(function (config) {
  config.headers.Accept = 'application/json'
  config.timeout = 1000 * 3
  // config.headers.System = 'vue';
  // let token = Vue.localStorage.get('token');
  // if(token){
  //     config.headers.Token = token;
  // }
  return config
})
axiosIns.interceptors.response.use(function (response) {
  // let data = response.data
  let status = response.status
  if (status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
})
let ajaxMethod = ['get', 'post']
let api = {}
ajaxMethod.forEach((method) => {
  api[method] = function (uri, data, config) {
    NProgress.start()
    return new Promise(function (resolve, reject) {
      NProgress.done()
      axiosIns[method](uri, data, config).then((response) => {
        console.log(response)
      }).catch((response) => {
        NProgress.done()
      })
    })
  }
})
export default api
