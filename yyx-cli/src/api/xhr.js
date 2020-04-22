import axios from 'axios';

var baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://47.91.225.63/v1'
}
else {
  baseURL = 'http://47.91.225.63/v1'
}
const xhr = axios.create({
  baseURL,
  timeout: 100000
})

// post请求,needHeader参数用于判断是否需要认证
export const post = (url, data, needHeader) => {
  if(needHeader){
    var headers = {};
  }
  return new Promise((resolve, reject) => {
    xhr({ url, data, headers, method: 'post' })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => reject(err))
  })
}

// get请求,needHeader参数用于判断是否需要认证
export const get = (url, params, needHeader) => {
  if(needHeader){
    var headers = {};
  }
  return new Promise((resolve, reject) => {
    xhr({ url, params, headers })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}