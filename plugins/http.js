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
import backCode from '../assets/js/code'
import {Message} from "element-ui";
const cookieparser = require('cookieparser');
export default ({ app, $axios, store, route, redirect,req }) => {
    axios.interceptors.request.use((config) => {
        if(process.client){
            if(store.getters.getT){
                config.headers.common['Authorization'] = 'Bearer ' + store.getters.getT;
            }
        }
        else{
            if(req.headers.cookie){
                config.headers.common['Authorization'] = 'Bearer ' + cookieparser.parse(req.headers.cookie).token;
            }
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    });
}


