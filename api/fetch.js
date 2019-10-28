import axios from 'axios';
import {Message} from "element-ui";
import qs from 'qs'
//axios.defaults.timeout = 5000000000000;
const url = process.env.NODE_ENV === 'development'
    // 测试环境api接口
    ? 'http://192.168.31.226:9357'
    // 线上环境api接口
    : 'http://112.51.254.68:7777';
axios.defaults.baseURL = url;
//axios.defaults.withCredentials=true;
export default {
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
