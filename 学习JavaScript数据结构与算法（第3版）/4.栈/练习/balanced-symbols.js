import Stack from "../Stack.js";
function parenthesesChecker(symbols) {
    const stack = new Stack();
    const opens = '({[';
    const closers = ')}]';
    let balanced = true;
    let index = 0;
    let symbol;
    let top;

    while (index < symbols.length && balanced) {
        symbol = symbols[index];
        if (opens.indexOf(symbol) >= 0) {
            stack.push(symbol);
        } else if (stack.isEmpty()) { //未存储目标元素
            balanced = false;
        } else {
            top = stack.pop();
            if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                balanced = false;
            }
        }
        index++;
    }
    return balanced && stack.isEmpty();
}

let a = "()()";
console.log(parenthesesChecker(a));
a = "()|()";
console.log(parenthesesChecker(a));