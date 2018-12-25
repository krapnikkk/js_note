//1.使用命名空间
var nameSpace = {
    a:function(){
        console.log(1);
    },
    b:function(){
        console.log(2);
    }
};

//动态创建命名空间

var MyApp = {};
MyApp.namespace = function(name){
    var parts = name.split('.');//拆分并回传数组
    var current = MyApp;
    for(var i in parts){
        if(!current[parts[i]]){
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
};

MyApp.namespace('event');
MyApp.namespace('dom.style');
console.dir(MyApp);

// MyApp = {
//     event: {},
//     dom: {
//         style: {}
//     }
// };

var createNameSpace = (function (){
    return function(obj,name){
        if(Object.prototype.toString.call(obj)!=='[object Object]'){
            return;
        }
        var parts = name.split('.');
        var current = obj;
        for(var i in parts){
            if(!current[parts[i]]){
                current[parts[i]] = {};
            }
            current = current[parts[i]];
        }
    }
})();

createNameSpace(MyApp,'name');


//2.使用闭包封装私有变量
var user = (function(){
    var __name = 'sven',
        __age = 29;
    return {
        getUserInfo: function(){
            return __name + '-' + __age;
        }
    }
})();


