import qs from 'qs'
import axios from 'axios';
//import router from '../router'
import {Message} from "element-ui";

const url = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? 'http://192.168.31.226:7777/api/v1'
  // 线上环境api接口
  : 'http://112.51.254.68:7777/api/v1';
axios.defaults.baseURL=url;
axios.interceptors.request.use(config => {
  /**
   * 在这里做loading ...
   * @type {string}
   */
  let token = localStorage.getItem("token");
  if(token){
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");
  }

  return config

}, error => {
  return Promise.reject(error)

});

axios.interceptors.response.use(response => {

  /**
   * 在这里做loading 关闭
   */

    // 如果后端有新的token则重新缓存
  let newToken = response.headers['newToken'];

  if (newToken) {
    localStorage.setItem("token",newToken);
  }

  return response;

}, error => {
  let res = error.response;
  let {code} = res.data;

  switch (code) {
    case 401:
      // 处理401错误
      //localStorage.removeItem("token");
        Message.error("登录过期，请重新登录,稍后跳转至登录页面");
        localStorage.removeItem("token");
        setTimeout(function(){
          //router.replace("/Login");
        },3000);
      break;

    case 404:
      alert("404不存在");
      break;

    case 412:
      alert(code);
      break;

    case 422:
      let errors = "";
      if (res.data.errors) {
        let arr = [];
        for (let key in res.data.errors) {
          res.data.errors[key].forEach((item) => {
            arr.push(item)
          })
        }
        errors = arr.length > 0 ? arr.join('，') : arr;
      }
      alert(errors);
      break;

    case 500:
      alert(code);
      break;
    case 600:
      alert("您没有该权限");
      return;
    default:
      alert(code);
  }

  // 关闭loading
  //closeLoading()
  return Promise.reject(res)

});

export default {
  /**
   * 处理application/json
   * @param url
   * @param method
   * @param params
   * @returns {Promise<any>}
   */
  json(url,method, params = {}) {
    return new Promise((resolve,reject) => {
      axios({
        url:url,
        data:params,
        method:method,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
      }})
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
    })
  },
  /**
   * 封装上传方法
   * @param url
   * @param data
   * @returns {Promise<any>}
   */
  upload(url,data){
    return new Promise((resolve,reject) => {
      axios.post(url,data,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
    })
  },
  /**
   * 封装delete方法
   * @param url
   * @param params
   * @returns {*|{getAllResponseHeaders, abort, setRequestHeader, readyState, getResponseHeader, overrideMimeType, statusCode}}
   */
  delete(url, params = {}) {
    let {isLoading = true} = params;
    return axios({
      method: 'delete',
      url: url,
      params,
      isLoading
    })
  },
  /**
   * 封装put方法
   * @param url
   * @param params
   * @returns {AxiosPromise}
   */
  put(url, params = {}) {
    return axios({
      method: 'put',
      url: url,
      data: qs.stringify(params),
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}

