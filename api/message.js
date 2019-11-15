import fetch from './fetch';

export default {
    // 获取系统信息
    getAll(params) {
        return fetch.json('/message/getAll',"GET", params);
    },
    clear(params){
        return fetch.json('/message/clear',"POST",params);
    },
    getPrivate(params){
        return fetch.json("/message/private","GET",params);
    },
    getChat(userId){
        return fetch.json(`/message/chat/${userId}`,"GET",{});
    },
    add(params){
        return fetch.json("/message/add","POST",params);
    }
}
