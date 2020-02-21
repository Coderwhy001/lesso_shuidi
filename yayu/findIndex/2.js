'use strict';
// predicate 用户自定义函数
// 返回合条件的元素下标 如果没找到返回-1
function findIndex(array,predicate,context){
    for(var i=0;i<array.length;i++){
        // 函数运行的时候要考虑上下文环境
        if(predicate(array[i],i)){
            return i;
        }
    }
    return -1;
}
// 函数作为参数 JS里函数是一等对象
console.log(findIndex([1,2,3,4],function(item,i){
    console.log(this);
    if(item == 3) return true;
},[1,2,3,4]));