/**
 * 为数组添加元素
 */

var nums = [1, 2, 3, 4, 5];
console.log(nums);

nums.push(6);
console.log(nums);

var nums = [1, 2, 3, 4, 5];
console.log(nums);

nums[nums.length] = 6;
console.log(nums);

var nums = [2, 3, 4, 5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
    nums[i] = nums[i - 1];
}

nums[0] = newnum;
console.log(nums);

console.log("=========");
var nums = [2, 3, 4, 5];
console.log(nums);
var newnum = 1;
nums.unshift(newnum);
console.log(nums);
nums = [3, 4, 5];
nums.unshift(newnum,2);
console.log(nums);


