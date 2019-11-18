import fetch from './fetch';

export default {
    // 获取系统信息
    getAll(params) {
        return fetch.json('/message/getAll',"GET", params);
    },
    //清空消息
    clear(params){
        return fetch.json('/message/clear',"POST",params);
    },
    //获取私信列表
    getPrivate(params){
        return fetch.json("/message/private","GET",params);
    },
    //获取别人发的私信
    getChat(userId){
        return fetch.json(`/message/chat/${userId}`,"GET",{});
    },
    add(params){
        return fetch.json("/message/add","POST",params);
    },
    //修改私信状态
    editPrivateMessage(userId){
        return fetch.json(`/message/editPrivateMessage/${userId}`,"PUT",{});
    },
    //获取动态列表
    getDynamicList(){
        return fetch.json("/message/getDynamic","GET",{});
    }
}
