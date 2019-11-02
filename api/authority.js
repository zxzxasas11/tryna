import fetch from './fetch';

export default {
    // 获取列表
    getAll(params) {
        return fetch.json('/authority/getAll',"GET", params);
    },
}
