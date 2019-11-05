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
        return redirect("/login");
    }
}
