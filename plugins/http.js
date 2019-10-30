/*
import axios from 'axios'
import {Message} from "element-ui";
import cookies from 'js-cookie'
export default ({ app, $axios, store, route, redirect }) => {
    // axios 配置
    axios.defaults.timeout = 5000;

    axios.interceptors.request.use((config) => {
        let token =cookies.get("token");
        if (token) {
            config.headers.common['Authorization'] = 'Bearer ' + token//localStorage.getItem("token");
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    });
// 返回状态判断
    axios.interceptors.response.use((res) => {
        if (res.status === 200) {
            return res
        } else {
            return Promise.reject(res);
        }
    }, (error) => {
        switch (error.response.status) {
            case 500:
                break;
            case 400:
                break;
            case 401:
                Message.error("登录信息已过期");
                cookies.remove("token");
                redirect("/login");
                break;
            default:
                console.log(`连接错误${error.response.status}`)
        }
        return Promise.reject(error)

    });
}


*/
//import  axios from 'axios'
//let options = {};
// The server-side needs a full url to works
// if (process.SERVER_BUILD) {
//   options.baseURL = `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3005}`
// }
//options.baseURL = "http://192.168.31.226:9357";
//export default axios.create(options)

