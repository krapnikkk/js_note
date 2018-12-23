var func = function(){
  var a = 1;
  return function(){//返回一个匿名函数
      a++;
      console.log(a);
  }
};

var f = func();
f();//2;
f();//3;
f();//4;
f();//5;

var Type = {},typeArr = ['String','Array','Number'],type;
for(var i = 0,len = typeArr.length;i<len;i++){
    type = typeArr[i];
    (function(type){
        Type['is'+type] = function(obj){
            return Object.prototype.toString.call(obj) === '[object'+type+']';
        }
    })(type)
}
Type.isArray([]);//true
Type.isString('str');//true


var Type = {};
for ( var i = 0, type; type = [ 'String', 'Array', 'Number' ][ i++ ]; ){
    (function( type ){
        Type[ 'is' + type ] = function( obj ){
            return Object.prototype.toString.call( obj ) === '[object '+ type +']';
        }
    })( type )
};
Type.isArray( [] ); // 输出：true
Type.isString( "str" ); // 输出：true