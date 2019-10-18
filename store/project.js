//import userFunction from '~/api/user';
export const state = () => ({
    project:{}

});

export const mutations = {
    set_project(state,params){
        state.project = params;
    }
};

export const actions ={
    setProject({commit},params){
        commit("set_project",params);
    },
};
