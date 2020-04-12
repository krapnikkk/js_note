/**
 * 从数组中删除元素
 */
var nums = [1, 2, 3, 4, 5, 9];
nums.pop();
console.log(nums);

console.log("==========");
var nums = [9, 1, 2, 3, 4, 5];
console.log(nums);
for (var i = 0; i < nums.length; i++) {
    nums[i] = nums[i + 1];
}
console.log(nums);
var nums = [9, 1, 2, 3, 4, 5];
delete nums[5];
console.log(nums);

console.log("==========");
var nums = [9, 1, 2, 3, 4, 5];
nums.shift();
console.log(nums);

console.log("==========");
var nums = [6, 1, 2, 3, 4, 5];
var first = nums.shift();
nums.push(first);
console.log(nums);
