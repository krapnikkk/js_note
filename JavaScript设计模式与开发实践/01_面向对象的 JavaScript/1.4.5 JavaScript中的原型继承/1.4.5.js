// 1.所有的数据都是对象
var obj1 = new Object();
var obj2 = {};
console.log(Object.getPrototypeOf(obj1)===Object.prototype);
console.log(Object.getPrototypeOf(obj2)===Object.prototype);

// 2.要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
function Person(name){
    this.name = name;
};

Person.prototype.getName = function(){
    return this.name;
};

var a = new Person('krapnik');

console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a)===Person.prototype);

//new 操作符的另一种实现
var objectFactory = function(){
    var obj = new Object(),
        Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;//修正指向
    var ret = Constructor.apply(obj,arguments);
    return typeof ret === 'object'? ret : obj;
};

var b = objectFactory(Person,'karpnik');
console.log(b.name);
console.log(b.getName());
console.log(Object.getPrototypeOf(b)===Person.prototype);

// 3.对象会记住它的原型
var c = new Object();
console.log(c.__proto__===Object.prototype); //true


// 4.如果对象无法响应某个请求，它会把这个请求委托给它的构造器的原型
var obj = {name:'krapnik'};
var A = function(){};
A.prototype = obj;

var d = new A();
console.log(d.name);//krapnik

