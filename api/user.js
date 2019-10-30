import fetch from './fetch';

export default {
    // 登录
    login(params) {
        return fetch.json('/user/login',"POST", params);
    },
    getUserList(params){
        return fetch.json("/user/getAll","GET",params);
    }
}
