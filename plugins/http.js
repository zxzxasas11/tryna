import axios from 'axios'
import {Message} from "element-ui";
import cookies from 'js-cookie'
export default ({ app, $axios, store, route, redirect }) => {
    // axios 配置
    axios.defaults.timeout = 5000;

    axios.interceptors.request.use((config) => {

        let token =cookies.get("token");
        console.log(token);
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


