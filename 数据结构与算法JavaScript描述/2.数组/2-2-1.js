/**
 * 创建数组
 */

var number = [];
console.log(number.length);

var number = [1, 2, 3, 4, 5];
console.log(number.length);

var number = new Array();
console.log(number.length);

var number = new Array(1, 2, 3, 4, 5);
console.log(number, number.length);

var number = new Array(10);
console.log(number.length);

var object = [1, "Jack", true, null];
console.log(object.length);

var number = 3, array = [1, 2, 3];
console.log(Array.isArray(number));
console.log(Array.isArray(array));