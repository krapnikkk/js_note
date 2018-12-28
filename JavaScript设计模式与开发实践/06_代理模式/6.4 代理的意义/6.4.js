//不用代理的预加载图片函数
var MyImage = (function(){
    var imgNode = document.createElement( 'img' );
    document.body.appendChild( imgNode );
    var img = new Image;
    img.onload = function(){
        imgNode.src = img.src;
    };
    return {
        setSrc: function( src ){
            imgNode.src = 'file:// /C:/Users/svenzeng/Desktop/loading.gif';
            img.src = src;
        }
    }
})();
MyImage.setSrc( 'http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg' );

//面向对象设计的原则——单一职责原则
