import fetch from './fetch';

export default {
    // 登录
    del(id) {
        return fetch.json(`/api/${id}`,"delete", {});
    },
}
