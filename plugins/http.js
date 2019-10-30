import  axios from 'axios'
let options = {};
options.baseURL = "http://192.168.31.226:9357";
export default axios.create(options)
