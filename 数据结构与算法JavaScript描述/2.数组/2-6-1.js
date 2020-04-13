/**
 * 创建二维数组
 */
var twod = [];
var rows = 5;
for (var i = 0; i < rows; i++) {
    twod[i] = [];
}

console.log(twod);

Array.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; i++) {
        var columns = [];
        for (var j = 0; j < numcols; j++) {
            columns[i] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]);
console.log("=========");
var names = Array.matrix(3, 3, "");
names[1][2] = 'Joe';
console.log(names[1][2]);

console.log("=========");

var grades = [[89,77,78],[76,82,81],[91,94,89]];
console.log(grades[2][2]);
