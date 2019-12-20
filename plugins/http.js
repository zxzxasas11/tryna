import cookies from "js-cookie";
import axios from "axios";
import backCode from '../assets/js/code'
import {Message} from "element-ui";
const cookieparser = require('cookieparser');
export default ({ app, $axios, store, route, redirect,req }) => {
    axios.interceptors.request.use((config) => {
        if(process.client){
            if(store.getters.getT){
                config.headers.common['Authorization'] = 'Bearer ' + store.getters.getT;
            }
        }
        else{
            console.log("这个走的是服务端");
            if(req.headers.cookie){
                config.headers.common['Authorization'] = 'Bearer ' + cookieparser.parse(req.headers.cookie).token;
            }
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    });

    axios.interceptors.response.use((res) => {
        if(process.client){
            for(let i in backCode){
                if(res.data.code===i){
                    //if (document.getElementsByClassName('el-message').length === 0) {
                    Message.error(backCode[i]);
                    //}
                }
            }
            return res
        }
        },
        (error) => {
            if(process.client){
                switch (error.response.status) {
                    case 500:
                        break;
                    case 400:
                        break;
                    case 401:
                        Message.error("登录信息已过期");
                        cookies.remove("token");
                        //redirect("/login");
                        break;
                    default:
                        console.log(`连接错误${error.response.status}`)
                }
                return Promise.reject(error)
            }
        });
}


