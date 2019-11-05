import jwt_decode from 'jwt-decode'
import cookies from 'js-cookie'
export default {
    getToken:(state)=> {
        return state.token;
    },
    getUserName:state=> {
        if(process.client){
            return jwt_decode(cookies.get("token")).username;
        }
    },
    getUserId:state=>{
        if(process.client){
            return jwt_decode(cookies.get("token")).userId;
        }
    },
    visitedViews: state => state.tags.visitedViews,
    activeIndex: state => state.tags.activeIndex,
    getKeepAlive: state => state.tags.keepAlive,
    getTestIp: state => state.user.testIp,
    getIfMobile:state=>state.user.user.ifM,
    getProject:state=>state.project.project
};
