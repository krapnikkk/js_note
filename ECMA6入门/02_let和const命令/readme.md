# let 和 const 命令

## let 命令

### 基本用法
let命令所声明的变量，只在let命令所在的代码块内有效。
```
{
    let a = 10;
    var b =1;
}
a;//ReferenceError: a is not defined.
b;//1
```

### 不存在变量提升
```
//var 
console.log(foo);//输出undefined
var foo = 2;//变量被提升，声明的变量提升到顶部，但尚未赋值

//let
console.log(bar);//输出ReferenceError
let bar = 2;
```

### 暂时性死区
