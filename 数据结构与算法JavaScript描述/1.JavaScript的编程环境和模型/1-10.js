/**
 * 函数【子程或者void函数】
 */

function curve(arr, amount) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] += amount;
    }
}

var grade = [77, 73, 74, 81, 90];
curve(grade, 5);
console.log(grade);