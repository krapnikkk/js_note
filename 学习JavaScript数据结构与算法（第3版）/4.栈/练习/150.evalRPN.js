import Stack from "../Stack.js";

const SIGN = {
    "+":(a,b)=>a+b,
    "-":(a,b)=>b-a,
    "*":(a,b)=>a*b,
    "/":(a,b)=>b/a|0
}

var evalRPN = (tokens)=>{
    const stack = new Stack();
    tokens.forEach((item)=>{
        if(item in SIGN){
            let a = stack.pop();
            let b = stack.pop();
            let res = SIGN[item](a,b);
            stack.push(res);
        }else{
            stack.push(+item);
        }
    })
    return stack.pop();
}

let tokens = ["4","13","5","/","+"];
console.log(evalRPN(tokens));