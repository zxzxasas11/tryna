import fetch from './fetch';

export default {
    // 登录
    getList(params) {
        return fetch.json('/post/getAll',"GET", params);
    },
    getOne(id){
        return fetch.json("/post/"+id,"GET",{});
    },
    addComment(params){
        return fetch.json("/comment/add","POST",params);
    },
    addPost(params){
        return fetch.json("/post/add",'POST',params);
    }
}
