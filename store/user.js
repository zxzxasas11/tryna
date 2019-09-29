//import userFunction from '~/api/user';
export const state = () => ({
    token:"",
});

export const mutations = {
    set_token(state,token){
        state.token = token;
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
    }
};
