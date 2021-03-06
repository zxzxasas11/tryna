//import userFunction from '~/api/user';
const cookieparser = require('cookieparser');
import cookies from 'js-cookie'
export const state = () => ({
    token:"",
    user:{
        ifM:false
    },
    message:{
        system:0,
        private:0,
        dynamic:0
    },
    dynamic:0,
    loginVisible:false,
});

export const mutations = {
    set_loginVisible(state,value){
        state.loginVisible = value;
    },
    set_token(state,token){
        state.token = token;
        if(token!==undefined){
            cookies.set('token',token,{ expires: 30 });
        }
    },
    del_token(state){
        state.token = '';
        cookies.remove("token");
    },
    set_message(state,value){
        for(let i in value){
            state.message[i]=value[i];
        }
    }
};

export const actions ={
    nuxtServerInit({ commit}, { req }) {
        commit('set_token', process.client?cookies.get("token"):req.headers.cookie);
    },
    setIfM({commit},params){
        commit("set_ifMobile",params);
    },
    setToken({commit},value){
        commit("set_token",value);
    },
    delToken({commit},value){
        commit("del_token",value);
    },
    setLoginVisible({commit},value){
        commit("set_loginVisible",value);
    },
    setMessage({commit},value){
        commit("set_message",value);
    }
};
