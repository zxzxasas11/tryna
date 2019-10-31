import  axios from 'axios'
import cookies from "js-cookie";
let options = {};
axios.interceptors.request.use((config) => {
    let token =cookies.get("token");
    if (token) {
        config.headers.common['Authorization'] = 'Bearer ' + token//localStorage.getItem("token");
    }
    return config
}, (error) => {
    return Promise.reject(error)
});
options.baseURL = "http://192.168.31.226:9357";
export default axios.create(options)



