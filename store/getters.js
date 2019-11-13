import jwt_decode from 'jwt-decode'
import cookies from 'js-cookie'
export default {
    getToken:(state)=> {
        if(process.client){
            if(cookies.get("token")){
                return jwt_decode(cookies.get("token"))
            }else {
                return undefined
            }
        }
    },
    getT:(state)=> {
        if(process.client){
            if(cookies.get("token")) {
                return cookies.get("token")
            }
        }
    },
    getPower:state=>{
        if(process.client){
            if(cookies.get("token")){
                return jwt_decode(cookies.get("token")).power;
            }
            else{
                return "";
            }
        }
    },
    getUserName:state=> {
        if(process.client){
            if(cookies.get("token")){
                return jwt_decode(cookies.get("token")).username;
            }
            else{
                return "";
            }
        }
    },
    getUserId:state=>{
        if(process.client){
            if(cookies.get("token")){
                return jwt_decode(cookies.get("token")).userId;
            }
            else{
                return "";
            }
        }
    },
    visitedViews: state => state.tags.visitedViews,
    activeIndex: state => state.tags.activeIndex,
    getKeepAlive: state => state.tags.keepAlive,
    getPostInfo:state => state.posts.postInfo
};
