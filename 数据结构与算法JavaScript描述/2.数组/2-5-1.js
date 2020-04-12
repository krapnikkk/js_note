/**
 * 不生成新数组的迭代器方法
 */
function square(num) {
    console.log(num, Math.pow(num, 2));
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(square);

console.log("================");
function isEven(num) {
    return num % 2 == 0;
}
var nums = [2, 4, 6, 8, 10];
var even = nums.every(isEven);
if (even) {
    console.log("all numbers in nums are even");
} else {
    console.log("not all numbers in nums are even");
}


console.log("================");
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var someEven = nums.some(isEven);
if (someEven) {
    console.log("some numbers in nums are even");
} else {
    console.log("no numbers in nums are even");
}

console.log("================");
function add(runningTotal, currentValue) {
    console.log(runningTotal, currentValue)
    return runningTotal + currentValue;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
var sum = nums.reduce(add);
console.log(sum);

console.log("================");
function concat(accumulatedString,item){
    return accumulatedString + item;
}

var words = ["the","quick","brown","fox"];
var sentence = words.reduce(concat);
console.log(sentence);

var sentence = words.join("");
console.log(sentence);

var sentence =  words.reduceRight(concat);
console.log(sentence);



