import fetch from './fetch';

export default {
    // 获取列表
    getAll(params) {
        return fetch.json('/role/getAll',"GET", params);
    },
    add(params){
        return fetch.json("/role/add","POST",params);
    },
    edit(id,params){
        return fetch.json(`/role/${id}`,"PUT",params);
    },
    getOneAuth(id){
        return fetch.json(`/role/${id}`,"GET",{});
    }
}
