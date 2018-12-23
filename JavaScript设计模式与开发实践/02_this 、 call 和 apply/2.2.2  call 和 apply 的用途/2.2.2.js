//1.改变this指向
var obj1 = {
    name:'krap'
};

var obj2 = {
    name:'krapnik'
};

window.name = 'window';

var getName = function(){
    console.log(this.name);
};

getName();//window
getName.call(obj1);//krap
getName.call(obj2);//krapnik

//2.Function.prototype.bind
Function.prototype.bind = function(context){
    var self = this;
    return function(){
        //执行新的函数的时候，会把context当做函数体内的this
        return self.apply(context,arguments);
    }
};

var obj = {
    name:'krapnik'
};

var func = function(){
    console.log(this.name);
}.bind(obj);

func();

Function.prototype.bind = function(){
    var self = this,//保存原函数
        context = [].shift.call(arguments),//需要绑定的this的上下文
        args = [].slice.call(arguments);//剩余的参数转换为数组
    return function(){
        //执行新的函数的时候，会把之前传入的context当作新函数体内的this
        //并且组合两次分别传入的参数，作为新函数的参数
        self.apply(context,[].concat.call(args,[].slice.call(arguments)));
    }
};

//3. 借用其他对象的方法
var A = function(name){
    this.name = name;
};

var B = function(){
    A.apply(this,arguments);
};

B.prototype.getName = function(){
    return this.name;
};

var b = new B('krapnik');
console.log(b.getName());//krapnik

//往arguments中添加一个新的元素
(function(){
    Array.prototype.push.call(arguments,3);
    console.log(arguments);
})(1,2);

//Array.prototype.push内部实现源码
function ArrayPush(){
    var n = TO_UINT32(this.length);//被push的对象的length
    var m = %_Argumentslength();//push的参数个数
    for (var i = 0;i < m;i++){
        this[i + n] = %_Arguments(i);//复制对象
        this.length = n + m;//修正length属性的值
        return this.length;
    }
}

var a = {};
Array.prototype.push.call(a,'first');
console.log(a.length,a[0]);
