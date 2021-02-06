"use strict"; // tail
// 阶乘
function factorialIterative(number) { // 循环
    if (number < 0) {
        return undefined;
    }
    let total = 1;
    for (let n = number; n > 1; n--) {
        total *= n;
    }
    return total;
}

function factorial(n) { // 递归
    if (n < 0) {
        return undefined;
    }
    if (n === 1 || n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

function tailFactoral(n, total = 1) { // 尾递归
    if (n < 0) { return undefined; }
    if (n === 1 || n === 0) { return total };
    return tailFactoral(n - 1, n * total);
}

// currying
function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    }
}

console.time("factorialIterative");
console.log(factorialIterative(20));
console.timeEnd("factorialIterative");

console.time("factorial");
console.log(factorial(20));
console.timeEnd("factorial");

console.time("tailFactoral");
console.log(tailFactoral(20));
console.timeEnd("tailFactoral");