event.remove = function (key, fn) {
    var fns = this.clientList[key];
    if (!fns) {//对应的消息没有被订阅则直接返回
        return false;
    }
    if (!fn) {
        fns && (fns.length = 0);// 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
    }else{
        for(var l =fns.length -1;l>0;l--){//反向遍历
            var _fn = fns[l];
            if(_fn === fn){
                fns.splice(l,i);// 删除订阅者的回调函数
            }
        }
    }
};