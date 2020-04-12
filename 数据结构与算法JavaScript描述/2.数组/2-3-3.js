/**
 * 由已有数组创建新数组
 */
var cisDept = ["Mike", "David", "Cynthia", "George", "Jennifer", "Mike", "Clayton"];
var dmpDept = ["RayMond", "Ruby"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv.toString());
itDiv = dmpDept.concat(cisDept);
console.log(itDiv.toString());

var itDiv =  ["Mike", "David", "Cynthia", "George", "Jennifer", "Mike", "Clayton"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;

console.log(dmpDept.toString());
console.log(cisDept.toString());
console.log(itDiv.toString());