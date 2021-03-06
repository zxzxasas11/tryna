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
     * @param params
     * @returns {*|Promise|Promise<unknown>}
     */
    getOne(id,params){
        return fetch.json("/post/"+id,"GET",params);
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
     * 置顶
     */
    setTopOrEssence(postId,params){
        return fetch.json(`/post/topOrEssence/${postId}`,"PUT",params);
    },
    /**
     * 提交投票
     * @param params
     * @returns {Promise | Promise<unknown>}
     */
    postVote(params){
        return fetch.json('/post/vote',"POST",params);
    },
    getVoteResult(params){
        return fetch.json("/post/getVoteResult","GET",params);
    }


}
