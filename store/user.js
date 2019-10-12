//import userFunction from '~/api/user';
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
    set_ifMobile(state,value){
        state.user.ifM = value;
        localStorage.setItem("u",JSON.stringify(state.user));
    },
    set_token(state,token){
        state.token = token;
        console.log(token);
        localStorage.setItem("token",token);
    },
    del_token(state){
        state.token = '';
        localStorage.removeItem("token");
    },
    user_login(state,token){
        state.token = token;
        localStorage.setItem("token",token);
    }
};

export const actions ={
    userLogin({commit},params){
        /*userFunction.login(params).then(res=>{
            commit("user_login",res.data.token);

        });*/
    },
    setIfM({commit},params){
        commit("set_ifMobile",params);
    },
    setToken({commit},value){
        console.log(value);
        commit("set_token",value);
    },
    setLoginVisible({commit},value){
        commit("set_loginVisible",value);
    }
};
