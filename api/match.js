import fetch from './fetch';

export default {
    //获取队伍列表
    getTeamList(params) {
        return fetch.json('/team/getAll',"GET", params);
    },
    //创建队伍
    createTeam(params){
        return fetch.json('/team',"POST",params);
    },
    getPlayerList(params){
        return fetch.json("/player/getAll","GET",params);
    }
}
