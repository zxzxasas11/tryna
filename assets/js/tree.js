module.exports = function(obj){
    arr=[];
    return list(obj);
};
let arr;
function list(json){
    for(let i in json){
        if(json[i].children.length===0){
            arr.push(json[i].id);
        }
        else{
            list(json[i].children);
        }
    }
    return arr;
}
