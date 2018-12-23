
var func = function (a,b,c){
    console.log([a,b,c]);
};
/*
apply 接受两个参数，
第一个参数指定了函数体内 this 对象的指向， null时this指向默认宿主对象，浏览器中为window
第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数：
 */
func.apply(null,[1,2,3]);//[1,2,3]


func.call(null,1,2,3);


Math.max.apply( null, [ 1, 2, 5, 3, 4 ] ); // 输出：5