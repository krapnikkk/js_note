/**
 * 读写数组
 */
var nums = [];
for (var i = 0; i < 100; i++) {
    nums[i] = i + 1;
}
console.log(nums);

var numbers = [1,2,3,4,5];
var sum = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];
console.log(sum);

var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

function getSum(total, num) {
    return total + num;
}
console.log(numbers.reduce(getSum));