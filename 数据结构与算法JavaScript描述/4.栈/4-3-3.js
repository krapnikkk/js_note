/**
 * 使用栈模拟递归过程
 */

 const Stack = require('./Stack');
 function factorial(n){
     if(n === 0 ){
         return 1;
     }else{
         return n * factorial(n - 1);
     }
 }

 console.log(factorial(5));

 function fact(n){
     var s = new Stack();
     while(n>1){
         s.push(n--);
     }
     var product = 1;
     while(s.length>0){
         product *= s.pop();
     }
     return product;
 }

 console.log(fact(5));