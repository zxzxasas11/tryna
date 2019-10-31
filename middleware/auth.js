import cookies from 'js-cookie'
const cookieparser = require('cookieparser');
export default function ({ store, redirect,req},) {
    if(req.headers.cookie){
        const cookie = cookieparser.parse(req.headers.cookie);
        if(cookie.token){
            return store.dispatch("user/setToken",cookie.token);
        }
    }
    else{
        console.log("token不存在");
        return redirect("/login");
    }
}
