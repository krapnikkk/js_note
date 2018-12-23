//1.封装变量
var mult = function(){
    var a = 1;
    for(var i = 0,l = arguments.length;i<l;i++){
        a = a * arguments[i];
    }
    return a;
};

//加入缓存机制
var cache = {};
var mult = function(){
    var args = Array.prototype.join.call(arguments,',');
    console.log(args);
    if(cache[args]){//如果存在缓存中马上返回
        return cache[args];
    }
    var a = 1;
    for(var i =0,l = arguments.length;i<l;i++){
        a = a * arguments[i];
    }
    return cache[args] = a;
};
mult(1,2,3);

//缓存存放在函数内部
var mult = (function(){
    var cache = {};
    return function(){
        var args = Array.prototype.join.call(arguments,',');
        if(cache[args]){
            return cache[args];
        }
        var a = 1;
        for(var i =0,l = arguments.length;i<l;i++){
            a = a * arguments[i];
        }
        return cache[args] = a;
    }
})();

//闭包封装
var mult = (function(){
    var cache = {};
    var calculate = function(){//进一步封装小函数
        var a = 1;
        for(var i =0,l = arguments.length;i<l;i++){
            a = a * arguments[i];
        }
        return a;
    };
    return function(){
        var args = Array.prototype.join.call(arguments,',');
        if(args in cache){
            return cache[args];
        }
        return cache[args] = calculate.apply(null,arguments);
    }
})();


//2.延续局部变量的寿命
var report = function( src ){
    var img = new Image();
    img.src = src;
};
report( 'http://xxx.com/getUserInfo' );

var report = (function(){
    var imgs = [];
    return function( src ){
        var img = new Image();
        img.src = src;
        imgs.push( img );
    }
})();