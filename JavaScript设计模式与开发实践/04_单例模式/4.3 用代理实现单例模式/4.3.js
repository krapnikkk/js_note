var CreateDiv = function(html){
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
};

//代理类
var ProxySingletionCreateDiv = (function(){
    var instance;
    return function(html){
        if(!instance){
            instance = new CreateDiv(html);//代理缓存
        }
        return instance;
    }
})();

var a = new ProxySingletonCreateDiv( 'sven1' );
var b = new ProxySingletonCreateDiv( 'sven2' );
console.log ( a === b );