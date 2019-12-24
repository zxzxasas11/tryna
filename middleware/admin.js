import cookies from 'js-cookie'
const cookieparser = require('cookieparser');
import jwt_decode from 'jwt-decode'
export default function ({ store, redirect,req},) {
    let cookie=process.server?cookieparser.parse(req.headers.cookie).token:cookies.get("token");
    if(cookie===undefined){
        redirect("/404");
    }else{
        let json = jwt_decode(cookie);
        if(json.power!==9){
            redirect("/404");
        }
    }
}
