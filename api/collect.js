import fetch from './fetch';

export default {
    add(postId){
        return fetch.json(`/collect/${postId}`,"POST",{});
    },
    check(postId){
        return fetch.json(`/collect/check/${postId}`,"GET",{});
    }
}
