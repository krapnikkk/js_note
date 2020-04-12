/**
 * 为数组排序
 */
var nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);

console.log("=========");
var names = ["Mike", "David", "Cynthia", "George", "Jennifer", "Mike", "Clayton"];
names.sort();
console.log(names.toString());

console.log("=========");
var nums = [3, 1, 2, 100, 4, 200];
nums.sort();
console.log(nums.toString());

console.log("=========");
function compare(num1, num2) {
    return num1 - num2;
}
var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
console.log(nums);