/*
1.currying【部分求值】
一个 currying 的函数首先会接受一些参数，接受了这些参数之后，
该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保
存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。
 */

var monthlyCost = 0;
var cost = function(money){
    monthlyCost += money;
};

//==========
var cost = (function(){
    var args = [];

    return function(){
        if(arguments.length == 0){
            var money = 0;
            for(var i = 0,l =args.length;i<l;i++){
                money += args[i];
            }
            console.log('总金额：'+money);
            return money;
        }else{
            [].push.apply(args,arguments);
        }
    }
})();


//function currying(){}
var currying = function(fn){
    var args = [];

    return function(){
        if(arguments.length == 0){
            return fn.apply(this,args);
        }else{
            [].push.apply(args,arguments);
            return arguments.callee;
        }
    }
};

var cost = (function(){
    var money = 0;
    return function(){
        for(var i = 0,l = arguments.length;i<l;i++){
            money += arguments[i];
        }
        return money;
    }
})();

var cost = currying(cost);//转换成currying函数


/*
2.uncurrying 去柯里化
 */
//让对象去借用一个原本不属于它的方法
(function(){
    Array.prototype.push.call(arguments,4);
    console.log(arguments);//[1,2,3,4]
})(1,2,3);

Function.prototype.uncurrying = function(){
  var self = this;
  return function(){
      var obj = Array.prototype.shift.call(arguments);
      return self.apply(obj,arguments);
  }
};

var push = Array.prototype.push.uncurrying();
(function(){
    push(arguments,4);
    console.log(arguments);
})(1,2,3);

for(var i = 0,fn,arr=['push','shift','forEach'];fn = arr[i++];){
    Array[fn] = Array.prototype[fn].uncurrying();
};

var obj = {
    length:3,
    "0":1,
    "1":2,
    "2":3
};

Array.push( obj, 4 ); // 向对象中添加一个元素
console.log( obj.length ); // 输出：4
var first = Array.shift( obj ); // 截取第一个元素
console.log( first ); // 输出：1
console.log( obj ); // 输出：{0: 2, 1: 3, 2: 4, length: 3}
Array.forEach( obj, function( i, n ){
    console.log( n ); // 分别输出：0, 1, 2
});
// uncurrying 的另外一种实现方式
Function.prototype.uncurrying = function(){
    var self = this;
    return function(){
        return Function.prototype.call.apply( self, arguments );
    }
};

/*
3.函数节流throttle
 */
/**
 * 节流函数 throttle
 * @param fn
 * @param interval
 * @returns {Function}
 */
var throttle = function(fn,interval){
    var _self = fn,//保存需要被延迟执行的函数引用
        timer,//定时器
        firstTime = true;//是否第一次调用

    return function(){
        var args = arguments,
            _me = this;
        if(firstTime){//首次调用无须延迟执行
            _self.apply(_me,args);
            return firstTime = false;
        }

        if(timer){//如果定时器还存在，说明前一次延迟执行还没有完成
            return false;
        }

        timer = setTimeout(function(){//延迟一段时间再执行
            clearInterval(timer);
            timer = null;
            _self.apply(_me,args);
        },interval||500);
    }
};

window.onresize = throttle(function(){
    console.log( 1 );
}, 500 );

/*
4.分时函数
 */

var ary = [];
for ( var i = 1; i <= 1000; i++ ){
    ary.push( i ); // 假设 ary 装载了 1000 个好友的数据
};
var renderFriendList = function( data ){
    for ( var i = 0, l = data.length; i < l; i++ ){
        var div = document.createElement( 'div' );
        div.innerHTML = i;
        document.body.appendChild( div );
    }
};
renderFriendList( ary );

/**
 * 分时函数 timeChunk
 * @param ary   数组
 * @param fn    回调函数
 * @param count 分时规格
 * @returns {Function}
 */
var timeChunk = function(ary,fn,count,interval){
    var obj,t;
    var len = ary.length;
    var start = function(){
        for(var i = 0;i<Math.min(count||1,len);i++){
            obj = ary.shift();//将时间分发
            fn(obj);
        }
    };

    return function(){
        t = setInterval(function(){
            if(ary.length === 0){
                return clearInterval(t);
            }
            start();
        },interval||200); //分批执行的间隔
    };
};

//创建1000个dom节点
var ary = [];
for(var i = 1; i<= 1000;i++){
    ary.push(i);
}

var createDom = function(n){
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
};

var renderDomList = timeChunk(ary,createDom,8,300);

renderDomList();

/*
5.惰性加载函数
 */
var addEvent = function(elem,type,handler){
    if(window.addEventListener){
        return elem.addEventListener(type,handler,false);
    }
    if(window.attachEvent){
        return elem.attachEvent('on'+type,handler);
    }
};

var addEvent = (function(){
    if(window.addEventListener){
        return function(elem,type,handler){
            elem.addEventListener(type,handler,false);
        }
    }
    if(window.attachEvent){
        return function(elem,type,handler){
            elem.attachEvent('on'+type,handler);
        }
    }
})();

var addEvent = function( elem, type, handler ){
    if ( window.addEventListener ){
        addEvent = function( elem, type, handler ){
            elem.addEventListener( type, handler, false );
        }
    }else if ( window.attachEvent ){
        addEvent = function( elem, type, handler ){
            elem.attachEvent( 'on' + type, handler );
        }
    }
    addEvent( elem, type, handler );
};