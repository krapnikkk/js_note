if (typeof define === "function" && define.cmd) {
    define(function (require, exports, module) {
        exports.isNumber = function (obj) {
            return typeof obj === 'number' && !isNaN(obj)  
        };
    });
}
