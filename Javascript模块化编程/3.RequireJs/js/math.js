define(["utils"], function (utils) {
    var add = function (x, y) {
        if (utils.isNumber(x) && utils.isNumber(y)) {
            return x + y;
        } else {
            return 0;
        }

    };
    return {
        add: add
    };
});