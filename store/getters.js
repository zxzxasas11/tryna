import jwt_decode from 'jwt-decode'
export default {
    getToken:state=> {
        if (state.user.token === "") {
            state.user.token = localStorage.getItem("token");
        }
        return jwt_decode(state.user.token);
    },
    getT:state=> {
        return state.user.token;
    },
    visitedViews: state => state.tags.visitedViews,
    activeIndex: state => state.tags.activeIndex,
    getKeepAlive: state => state.tags.keepAlive,
    getTestIp: state => state.user.testIp
};
