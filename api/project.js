import fetch from './fetch';

export default {
    // 登录
    getProjectById(params) {
        return fetch.json('/project/getById',"GET", params);
    },
    addProject(params){
        return fetch.json('/project/add',"POST",params);
    },
    //查询项目详情
    getOne(id){
        return fetch.json(`/project/${id}`,"GET",{})
    }
}
