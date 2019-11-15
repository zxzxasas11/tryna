import fetch from './fetch';

export default {
    // 获取列表
    getAll(params) {
        return fetch.json('/message/getAll',"GET", params);
    },
}
