/*
1.作为对象的方法调用
2.作为普通函数调用
3.构造函数调用
4.Function.prototype.call或Function.prototype.apply调用
 */

//1.作为对象的调用
var obj = {
    a:1,
    getA:function(){
        console.log(this===obj);//true
        console.log(this.a);//1
    }
};
obj.getA();//true 1

//2.作为普通函数的调用
window.name = 'globalName';
var getName = function(){
    return this.name;
};
console.log(getName());//globalName

var myObject = {
    name:'krapnik',
    getName:function(){
        return this.name;
    }
};
var getName =  myObject.getName;
console.log(getName());//globalName
console.log(myObject.getName());


//3.构造器调用
//new构造器将this指向构造的对象
var myClass = function(){
    this.name = 'krapnik';
    return {
        name:'krap'
    }
};
var boy = new myClass();
console.log(boy.name);//krap

var otherClass = function(){
    this.name = 'krapnik';
    return 'krap';
};

var man = new otherClass();
console.log(man.name);//krapnik

//4.Function.prototype.call或Function.prototype.apply调用
var obj1 = {
  name:'krapnik',
  getName:function(){
      return this.name;
  }
};

var obj2 = {
    name:'krap'
};

console.log(obj1.getName());//krapnik
/*
obj1的作用域被更改为obj2
 */
console.log(obj1.getName.call(obj2));//krap