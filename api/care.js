import fetch from './fetch';

export default {
    // 获取列表 1我关注的人   2 关注我的人
    getAll(params) {
        return fetch.json(`/care/getAll/${params.type}`,"GET", params);
    },
    //添加关注
    add(id){
        return fetch.json(`/care/${id}`,"POST",{});
    },
    edit(params){
        return fetch.json("/authority/"+params._id,"PUT",params);
    }
}
