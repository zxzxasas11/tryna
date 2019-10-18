import axios from 'axios';
import {Message} from "element-ui";
import qs from 'qs'
axios.defaults.timeout = 5000000000000;
const url = process.env.NODE_ENV === 'development'
    // 测试环境api接口
    ? 'http://192.168.31.226:7777/api/v1'
    // 线上环境api接口
    : 'http://112.51.254.68:7777/api/v1';
axios.defaults.baseURL = url;
//axios.defaults.withCredentials=true;
export default {
     get(url,params={}){
        return new Promise((resolve,reject) => {
            axios.get(url,{
                params:params
            })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },



    /**
     * 封装post请求
     * @param url
     * @param data
     * @returns {Promise}
     */


    post(url,data){
        return new Promise((resolve,reject) => {
            if(navigator.appName==='Microsoft Internet Explorer'){
                let xhr = new XMLHttpRequest();
                xhr.open("POST",axios.defaults.baseURL+url, true);
                // 添加http头，发送信息至服务器时内容编码类型
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(qs.stringify(data));
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                        resolve(JSON.parse(xhr.responseText))
                    }
                };
            }
            else{
                axios.post(url,qs.stringify(data))
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(err => {
                        reject(err)
                    })
            }
        })
    },



    json(url,method,data){
        return new Promise((resolve,reject) => {
            axios({
                url: url,
                method: method,
                data: data,
                headers: {'Content-Type': 'application/json;charset=UTF-8'}
            })
                .then(response => {
                    if(response.data.code===200){
                        resolve(response.data);
                    }
                },err => {
                    reject(err)
                })
        })
    },

    /**
     * 封装文件上传
     * @param url
     * @param data
     * @param config
     * @returns {Promise}
     */

    upload(url,data,config){
        return new Promise((resolve,reject) => {
            axios.post(url,data,config)
                .then(response => {
                    resolve(response.data);
                },err => {
                    reject(err)
                })
        })
    },
    download(url,data){
        return new Promise((resolve,reject) => {
            axios.post(url,data,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                responseType:'blob'
            })
                .then(response => {
                    resolve(response);
                },err => {
                    reject(err)
                })
        })
    },

    /**
     * 封装patch请求
     * @param url
     * @param data
     * @returns {Promise}
     */

    patch(url,data = {}){
        return new Promise((resolve,reject) => {
            axios.patch(url,data)
                .then(response => {
                    resolve(response.data);
                },err => {
                    reject(err)
                })
        })
    },

    /**
     * 封装put请求
     * @param url
     * @param data
     * @returns {Promise}
     */

    put(url,data = {}){
        return new Promise((resolve,reject) => {
            axios.put(url,data,{
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    resolve(response.data);
                },err => {
                    reject(err)
                })
        })
    }
}
