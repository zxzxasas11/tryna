
import axios from 'axios';
import marked from 'marked'
const moment = require("moment");
export  default {
    //list转成父子结构
    listToTree(list,pid,pidName,idName) {
        let ret = [];//一个存放结果的临时数组
        for(let i in list) {
            if(list[i][pidName] === pid) {//如果当前项的父id等于要查找的父id，进行递归
                list[i].children = this.listToTree(list, list[i][idName],pidName,idName);
                ret.push(list[i]);//把当前项保存到临时数组中
            }
        }
        return ret;//递归结束后返回结果
    },
    //格式化后台传过来的秒数 转化为年月日
    formatDate1(str){
        return moment(str).format("YYYY-MM-DD")
    },
    //数组转换为string
    arrayToString(arr){
        return arr.join(",").toString();
    },
    stringToArray(str){
        return str.split(",");
    },
    letter:["A","B","C","D","E","F","G","J","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    markHtml(res){
        return marked(res);
    }
}
