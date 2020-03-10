//三、立即执行函数写法
var module1 = (function () {
    var _count = 1;
    function a1() {
        console.log("I'm module1's function a1");
    };

    function a2() {
        console.log("I'm module1's function a2");
    };

    return {
        a1: a1,
        a2: a2
    }
})();

module1.a1();

//外部代码无法读取内部的_count变量
console.log(module1._count);//undefined
