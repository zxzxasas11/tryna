import fetch from './fetch';

export default {
    // 获取列表
    getAll(params) {
        return fetch.json('/authority/getAll',"GET", params);
    },
    add(params){
        return fetch.json("/authority/add","POST",params);
    },
    edit(params){
        return fetch.json("/authority/"+params._id,"PUT",params);
    }
}
