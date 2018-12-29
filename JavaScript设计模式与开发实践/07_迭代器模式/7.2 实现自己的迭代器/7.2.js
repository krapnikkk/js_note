var each = function (ary, callback) {
    for (var i = 0, l = ary.length; i < l; i++) {
        callback.call(arr[i], i, ary[i]);
    }
};

each([1, 2, 3], function (i, n) {
    console.log('当前下标：' + i, '当前值' + n);
});