import jwt_decode from 'jwt-decode'
import cookies from 'js-cookie'
export default {
    getToken:(state)=> {
        if(process.client){
            if(cookies.get("token")){
                return jwt_decode(cookies.get("token"))
            }else {
                return {username:"",userId:""}
            }
        }else{
            console.log("这次是服务端渲染");
        }
    },
    getT:(state)=> {
        if(process.client){
            if(state.user.token){
                return (state.user.token)
            }
            else {
                /*if(localStorage.getItem("token")){
                    return (localStorage.getItem("token"));
                }*/
                if (cookies.get("token")) {
                    return cookies.get("token")
                }
            }

        }
    },
    getPower:state=>{
        if(process.client){
            if(localStorage.getItem("token")){
                return jwt_decode(localStorage.getItem("token")).power;
            }
            else{
                return "";
            }
        }
    },
    getUserName:state=> {
        if(process.client){
            if(localStorage.getItem("token")){
                return jwt_decode(localStorage.getItem("token")).username;
            }
            else{
                return "";
            }
        }
    },
    getUserId:state=>{
        if(process.client){
            if(localStorage.getItem("token")){
                return jwt_decode(localStorage.getItem("token")).userId;
            }
            else{
                return "";
            }
        }
    },
    getPostInfo:state => state.posts.postInfo,
    getMessage:state =>state.user.message,
    getSocket:state =>state.socket.socket,
    getLoading:state =>state.loading.loading
};
