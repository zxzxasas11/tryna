//import userFunction from '~/api/user';
const cookieparser = require('cookieparser');
import cookies from 'js-cookie'
export const state = () => ({
    token:"",
    user:{
        ifM:false
    },
    loginVisible:false,
});

export const mutations = {
    set_loginVisible(state,value){
        state.loginVisible = value;
    },
    set_token(state,token){
        state.token = token;
        console.log("------------++++++++");
        console.log(token);
        if(token!==undefined){
            cookies.set('token',token);
        }

    },
    del_token(state){
        state.token = '';
        cookies.remove("token");
    },
    user_login(state,token){
        state.token = token;
        localStorage.setItem("token",token);
    }
};

export const actions ={
    nuxtServerInit({ commit}, { req }) {
        commit('set_token', process.client?cookies.get("token"):req.headers.cookie);
    },
    userLogin({commit},params){
        /*userFunction.login(params).then(res=>{
            commit("user_login",res.data.token);

        });*/
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
    }
};
