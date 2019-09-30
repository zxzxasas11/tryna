import fetch from './fetch';

export default {
    // 登录
    getList(currentPage) {
        return fetch.json(`/spider/getList/${currentPage}`,"GET", {});
    },
    getByName(params){
        return fetch.json("/spider/getByName","POST",params);
    }
}
