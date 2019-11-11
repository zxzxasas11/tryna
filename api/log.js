import fetch from './fetch';

export default {
    // 登录
    getLogList(params){
        return fetch.json("/log/getAll","GET",params);
    },
    //获取统计指标
    getCount(params){
        return fetch.json("/log/count","GET",params);
    }
}
