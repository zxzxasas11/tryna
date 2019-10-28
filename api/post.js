import fetch from './fetch';

export default {
    // 登录
    getList(params) {
        return fetch.json('/post/getAll',"GET", params);
    },
}
