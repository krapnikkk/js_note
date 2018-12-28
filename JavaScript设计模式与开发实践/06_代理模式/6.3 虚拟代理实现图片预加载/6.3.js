var myImage = (function(){
    var imgNode = document.createElement( 'img' );
    document.body.appendChild( imgNode );
    return {
        setSrc: function( src ){
            imgNode.src = src;
        }
    }
})();
myImage.setSrc( 'http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg' );


var proxyImage = (function(){
    var img = new Image;
    img.onload = function(){//监听代理启动
        myImage.setSrc( this.src );
    };
    return {
        setSrc: function( src ){
            myImage.setSrc( 'file:// /C:/Users/svenzeng/Desktop/loading.gif' );
            img.src = src;//触发onload事件
        }
    }
})();

proxyImage.setSrc( 'http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg' );