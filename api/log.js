import fetch from './fetch';

export default {
    // 登录
    getLogList(params){
        return fetch.json("/log/getAll","GET",params);
    }
}
