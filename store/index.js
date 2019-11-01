import cookies from "js-cookie";
const cookieparser = require('cookieparser');
export const state = () => ({
    token:""
});

export const mutations = {
    set_token(state,token){
        state.token = token;
        cookies.set('token',token);
    },
};

export const actions={
    /*nuxtClientInit({ commit}, { req }) {
        commit('set_token', cookies.get("token"));
    },*/
}
