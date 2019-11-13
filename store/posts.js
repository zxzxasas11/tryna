export const state = () => ({
    postInfo:{
        top:0,
        essence:0,
        collect:0
    }
});

export const mutations = {
    set_loginVisible(state,value){
        state.loginVisible = value;
    },
    set_post(state,value){
        for(let i in value){
            state.postInfo[i]=value[i];
        }
    }
};

export const actions ={
    setLoginVisible({commit},value){
        commit("set_loginVisible",value);
    },
    setPost({commit},value){
        commit("set_post",value);
    }
};
