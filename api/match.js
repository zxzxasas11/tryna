import fetch from './fetch';
import player from "../pages/manage/match/player";

export default {
    //获取比赛项目列表
    getRaceItemList(params){
        return fetch.json('/raceItem/getAll',"GET",params);
    },
    //获取队伍列表
    getTeamList(params) {
        return fetch.json('/team/getAll',"GET", params);
    },
    //创建队伍
    createTeam(params){
        return fetch.json('/team',"POST",params);
    },
    //获取选手列表
    getPlayerList(params){
        return fetch.json("/player/getAll","GET",params);
    },
    //获取单个球员信息
    getPlayerInfo(playerId){
        return fetch.json(`/player/${playerId}`,"GET",{});
    },
    //获取球员赛季平均数据
    getPlayerAvgData(playerId,params){
        return fetch.json(`/player/data/${playerId}`,"GET",params);
    },
    //获取球员每一场数据
    getPlayerRaceList(playerId,params){
        return fetch.json(`/player/raceList/${playerId}`,"GET",params);
    },
    //获取赛程列表
    getRaceList(params){
        return fetch.json("/race/getList","GET",params);
    },
    //获取单场比赛数据
    getOneRace(raceId){
        return fetch.json(`/race/${raceId}`,"GET",{});
    },
    //根据teamId获取队伍基本信息
    getTeamInfo(teamId){
        return fetch.json(`/team/${teamId}`,"GET",{});
    }
}
