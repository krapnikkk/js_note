/**
 * 全局变量
 */

function showScope() {
    scope = "local";
    return scope;
}

scope = "global";
console.log(scope);
console.log(showScope());
console.log(scope);