import fetch from './fetch';

export default {
    // 登录
    getCategory(params) {
        return fetch.json('/category/getAll',"GET", params);
    },
    //获取菜单详情 即进入板块显示
    getOne(params){
        return fetch.json(`/category/${params.id}`,"GET",{})
    },
    add(params){
        return fetch.json("/category/add","POST",params);
    },
    //添加管理员
    addAdmin(params){
        return fetch.json("/category/addAdmin","POST",params);
    },
    //撤销管理员
    delAdmin(categoryId,userId){
        return fetch.json(`/category/${categoryId}/${userId}`,"DELETE",{});
    },
    //添加置顶板块
    addTop(categoryId){
        return fetch.json(`/category/addTop/${categoryId}`,"POST",{});
    },
    //添加置顶帖子
    addTopList(topId,postId){
        return fetch.json(`/category/addTopList/${topId}/${postId}`,"POST",{});
    }
}
