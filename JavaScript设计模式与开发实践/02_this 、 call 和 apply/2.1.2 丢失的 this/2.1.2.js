var getId = document.getElementById;
getId('ID');//Uncaught TypeError: Illegal invocation
/*
函数内部的this指向了window，非document
 */

document.getElementById = (function(func){
    return function(){
        return func.apply(document,arguments);//修正作用域
    }
})(document.getElementById);

var getId = document.getElementById;
console.log(getId('ID'));
