/*
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
*/
import cookies from "js-cookie";
import axios from "axios";


export default ({ app, $axios, store, route, redirect }) => {
    $axios.interceptors.request.use((config) => {
        if(store.getters.getToken){
            config.headers.common['Authorization'] = 'Bearer ' + store.getters.getToken;
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    });
}


