"use strict"
// 斐波那契数列【前两项都为1，从第三项开始，每一项都等于前两项之和】
function fibonacci(n) { // 递归
    if (n < 1) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciIterative(n) {// 循环
    if (n < 1) { return 0; }
    let fibNMinus1 = 1;
    let fibNMinus2 = 0;
    let fibN = n;
    for (let i = 2; i <= n; i++) {
        fibN = fibNMinus1 + fibNMinus2;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}

function fibonacciMemoization(n) { // 递归 + 储存
    if (n < 1) { return 0; }
    const memo = [0, 1];
    const fibonacciMem = num => {
        if (memo[num] != null) { return memo[num] };
        return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
    }
    return fibonacciMem(n);
}

// fib(n,1,0) fib(n-1,1,1) fib(n-2,2,1) fib(n-3,3,2)
function tailFibonacci(n, fibNMinus1 = 1, fibNMinus2 = 0) { // 尾递归
    if (n < 1) { return 0; }
    if (n === 1) { return fibNMinus1; }
    return tailFibonacci(n - 1, fibNMinus1 + fibNMinus2,fibNMinus1);
}

console.time("fibonacci");
console.log(fibonacci(20));
console.timeEnd("fibonacci");

console.time("fibonacciIterative");
console.log(fibonacciIterative(20));
console.timeEnd("fibonacciIterative");

console.time("fibonacciMemoization");
console.log(fibonacciMemoization(20));
console.timeEnd("fibonacciMemoization");

console.time("tailFibonacci");
console.log(tailFibonacci(20));
console.timeEnd("tailFibonacci");