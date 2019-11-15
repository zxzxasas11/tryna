export const state = () => ({
    postInfo:{
        top:0,
        essence:0,
        collect:0
    }
});

export const mutations = {
    set_post(state,value){
        for(let i in value){
            state.postInfo[i]=value[i];
        }
    }
};

export const actions ={
    setPost({commit},value){
        commit("set_post",value);
    }
};
