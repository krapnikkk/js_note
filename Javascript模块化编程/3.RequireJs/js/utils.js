define(function () {
    var isNumber = function (obj) {
        return typeof obj === 'number' && !isNaN(obj)  
    };
    return {
        isNumber: isNumber
    };
});