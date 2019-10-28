import fetch from './fetch';

export default {
    // 登录
    getCategory(params) {
        return fetch.json('/category/getAll',"GET", params);
    },
}
