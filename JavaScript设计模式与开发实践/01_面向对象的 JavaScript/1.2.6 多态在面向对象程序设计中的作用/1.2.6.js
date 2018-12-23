var googleMap = {
    show:function(){
        console.log('googleMap show!');
    }
};

var baiduMap = {
    show:function(){
        console.log('baiduMap show!');
    }
};

var renderMap = function(type){
    if(type == 'google'){
        googleMap.show();
    }else if(type == 'baidu'){
        baiduMap.show();
    }
};

renderMap('google');
renderMap('baidu');

var renderMapNew = function(map){
    if(map.show instanceof  Function){
        map.show();
    }
};
renderMapNew(baiduMap);
renderMapNew(googleMap);
var sosoMap = {
    show:function(){
        console.log('soso show!');
    }
};
renderMapNew(sosoMap);
