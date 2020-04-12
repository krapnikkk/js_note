/**
 * 生成新数组的迭代器方法
 */
function curve(grade) {
    return grade += 5;
}
var grades = [71, 23, 76, 85, 34];
var newGrade = grades.map(curve);
console.log(newGrade);

console.log("=========");
function first(word) {
    return word[0];
}

var words = ["for", "you", "information"];
var acronym = words.map(first);
console.log(acronym.join(""));

console.log("=========");
function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}
var nums = [];
for (var i = 0; i < 20; i++) {
    nums[i] = i + 1;
}
var evens = nums.filter(isEven);
console.log(evens);
var odds = nums.filter(isOdd);
console.log(odds);
