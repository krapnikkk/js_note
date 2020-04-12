/**
 * 查找元素
 */
var names = ["Mike", "David", "Cynthia", "George", "Jennifer", "Mike", "Clayton"];
var position = names.indexOf("David");
if (position >= 0) {
    console.log(`David at position ${position}`);
} else {
    console.log("name not found");
}
var firstPos = names.indexOf("Mike"), lastPos = names.lastIndexOf("Mike");
console.log(`firstFound:${firstPos},lastFound:${lastPos}`);


