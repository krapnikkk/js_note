//四、放大模式

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

module1 = (function (mod) {
    mod.a3 = function () {
        console.log("I'm module1's function a3");
    };
    return mod;
})(module1);

module1.a3();
