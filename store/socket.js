export const state = () => ({
    socket:""
});

export const mutations = {
    set_socket(state,params){
        state.socket = params;
    }
};

export const actions ={
    setSocket({commit},params){
        commit("set_socket",params);
    },
};
