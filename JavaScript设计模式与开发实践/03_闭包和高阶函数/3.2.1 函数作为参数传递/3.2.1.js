//1.回调函数
var getUserInfo = function( userId, callback ){
    $.ajax( 'http://xxx.com/getUserInfo?' + userId, function( data ){
        if ( typeof callback === 'function' ){
            callback( data );
        }
    });
};
getUserInfo( 13157, function( data ){
    alert ( data.userName );
});

//函数委托
var appendDiv = function(callback){
    for(var i = 0;i<100;i++){
        var div = document.createElement('div');
        div.innerHTML = i;
        document.body.appendChild(div);
        if(typeof callback == 'function'){
            callback(div);
        }
    }
};

var hideDom = function(node){
    node.style.display = 'none';
};

appendDiv(hideDom);


//Array.prototype.sort
[1,4,5,2].sort(function(a,b){
    return a-b;
});