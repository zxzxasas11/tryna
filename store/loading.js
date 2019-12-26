export const state = () => ({
    loading:false
});

export const mutations = {
    set_loading(state,value){
        state.loading = value;
    }
};

export const actions={
    setLoading({commit},value){
        commit("set_loading",value);
    }
};
