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
    }
}
