import jwt_decode from 'jwt-decode'
import cookies from 'js-cookie'
export default {
    getToken:state=> {
        if (state.user.token === "") {
            console.log(cookies.get("token"));
            state.user.token = cookies.get("token");
        }
        return state.user.token
        //return jwt_decode(state.user.token);
    },
    getT:state=> {
        return state.user.token;
    },
    visitedViews: state => state.tags.visitedViews,
    activeIndex: state => state.tags.activeIndex,
    getKeepAlive: state => state.tags.keepAlive,
    getTestIp: state => state.user.testIp,
    getIfMobile:state=>state.user.user.ifM,
    getProject:state=>state.project.project
};
