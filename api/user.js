import fetch from './fetch';

export default {
    // 登录
    login(params) {
        return fetch.json('/user/login',"POST", params);
    },
    register(params){
        return fetch.json('/user/add',"POST",params);
    },
    getUserList(params){
        return fetch.json("/user/getAll","GET",params);
    },
    edit(id,params){
        return fetch.json(`/user/${id}`,"PUT",params);
    }
}
