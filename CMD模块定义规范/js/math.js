//判定当前页面是否有 CMD 模块加载器
if (typeof define === "function" && define.cmd) {
    define(function (require, exports, module) {
        var utils = require("./utils"); //注意此时的引用路径区别
        module.exports = {
            add: function (x, y) {
                if (utils.isNumber(x) && utils.isNumber(y)) {
                    return x + y;
                } else {
                    return 0;
                }
            }
        }
    });
}