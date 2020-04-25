/**
 * 基数排序
 */
const Queue = require("./Queue");
/**
 * 
 * @param {*} nums 需要被排序的数字数组
 * @param {*} queues 队列
 * @param {*} n      队列的数目
 * @param {*} digit  个位或十位上的值
 */
function distribute(nums, queues, n, digits) {
    for (var i = 0; i < n; i++) {
        if (digits === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {//十位
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].isEmpty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

var queues = [];
for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
}

var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);

distribute(nums, queues, 10, 1);
for (var i = 0; i < queues.length; i++) {
    console.log("=="+i+"==");
    console.log(queues[i].toString());
    console.log("====");
}
collect(queues, nums);

distribute(nums, queues, 10, 10);
for (var i = 0; i < queues.length; i++) {
    console.log("=="+i+"==");
    console.log(queues[i].toString());
    console.log("====");
}
collect(queues, nums);

console.log("\n\nAfter radix sort: ");
dispArray(nums);