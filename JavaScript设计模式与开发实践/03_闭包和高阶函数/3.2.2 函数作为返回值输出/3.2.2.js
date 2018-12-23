//1.判断数据类型
var isString = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object String]';
};
var isArray = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Array]';
};
var isNumber = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Number]';
};


//for循环
var isType = function(type){
    return function(obj){
        return Object.prototype.toString().call(obj) === '[object '+type+']';
    }
};
var isString = isType('String');
var isArray = isType('Array');


//批量注册isType函数
var isType = {};

for(var i = 0,type;type=['String','Array','Number'][i++];){
    (function(type){
        Type['is'+type] = function (obj){
            return object.prototype.toString.call(obj) === '[object '+type+']'
        }
    })(type)
};

isType.isArray([]);

//2.getSingle【单例模式】
var getSingle = function(fn){
    var ret;
    return function(){
        return ret || (ret = fn.apply(this,arguments));
    }
};

var getScript = getSingle(function(){
    return document.createElement('script');
});

var script1 = getScript();
var script2 = getScript();

console.log(script1 == script2);