import cookies from 'js-cookie'
const cookieparser = require('cookieparser');
/**
 * 前台权限中间件  区分是否需要登录
 * @param store
 * @param redirect
 * @param req
 * @returns {*}
 */
export default function ({ store, redirect,req},) {
    const token = process.client?localStorage.getItem("token"):cookieparser.parse(req.headers.cookie).token;
    if(token){
        return store.dispatch("user/setToken",token);
    }
    else{
        return redirect("/login");
    }
}
