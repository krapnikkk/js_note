//1.递增和递减操作符
//前置型
var age = 29;
++age;

var age = 29;
age = age + 1;

var age = 29;
--age;

//执行前置递增和递减操作时，变量的值都是在语句被求值以前改变的。（在计算机科学领域，这种情况通常被称作副效应）
var age = 29;
var anontherAge = --age + 2;
console.log(gae); //28;
console.log(anontherAge); //30;

var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2; //21
var num4 = num1 + num2; //21


//后置型