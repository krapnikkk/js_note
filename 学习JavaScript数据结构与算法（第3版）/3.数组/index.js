// 创造和初始化数组
let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"]; // let dayOfWeek = new Array();

// 访问元素和迭代数组

for (let i = 0; i < dayOfWeek.length; i++) {
    console.log(dayOfWeek[i]);
}

//斐波那契数列
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

// 添加元素
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;

// 在数组末尾插入元素
// push
numbers.push(11);
numbers.push(12, 13);

// 在数组开头插入元素
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}

numbers.insertFirstPosition(-1);
console.log(numbers);

// unshift
console.log("unshift")
numbers.unshift(-2);
numbers.unshift(-4,-3);
console.log(numbers);

// 删除元素
// 从数组末尾删除元素
numbers.pop();
console.log(numbers);

// 从数组开头删除元素
Array.prototype.reIndex = function(myArray){
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}
Array.prototype.removeFirstPosition = function(){
    for(let i = 0;i<this.length;i++){
        this[i]=this[i+1];
    }
    return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();
console.log(numbers);

// shift
console.log("shift");
numbers.shift();
console.log(numbers);

// 在任意位置添加或删除元素
// splice
numbers.splice(5,3);
console.log(numbers);

numbers.splice(5,0,3,4,5);
console.log(numbers);

