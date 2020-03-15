define("log", function () {
    var warn = function (msg) {
        console.warn(msg);
    }

    return {
        warn: warn
    }
})