if (typeof define === "function" && define.cmd) {
    define(function (require, exports, module) {
        exports.warn = function (msg) {
            console.warn(msg);
        }
    })
}