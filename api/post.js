import fetch from './fetch';

export default {
    /**
     * 获取帖子列表
     * @param params
     * @returns {*|Promise|Promise<unknown>}
     */
    getList(params) {
        return fetch.json('/post/getAll',"GET", params);
    },
    /**
     * 根据id查询详情
     * @param id
     * @returns {*|Promise|Promise<unknown>}
     */
    getOne(id){
        return fetch.json("/post/"+id,"GET",{});
    },
    /**
     * 添加评论
     * @param params
     * @returns {*|Promise|Promise<unknown>}
     */
    addComment(params){
        return fetch.json("/comment/add","POST",params);
    },
    /**
     * 发布新帖
     * @param params
     * @returns {*|Promise|Promise<unknown>}
     */
    addPost(params){
        return fetch.json("/post/add",'POST',params);
    },
    /**
     * zhiding
     */
    setTopOrEssence(postId,params){
        return fetch.json(`/post/topOrEssence/${postId}`,"PUT",params);
    },


}
