var event = {
    clientList: [],
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    },
    remove: function (key, fn) {
        var fns = this.clientList[key];
        if (!fns) {
            return false;
        }
        if (fn) {
            fns && (fns.length = 0);
        }else{
            for(var l = fns.length -1;l>0;l--){
                var _fn = fns[l];
                if(_fn === fn){
                    fns.splice(l,i);
                }
            }
        }
    }
};
//这个函数可以给所有的对象都动态安装发布 — 订阅功能：
var installEvent = function () {
    for (var i in event) {
        obj[i] = event[i];
    }
};

var login = {};
installEvent(login);

$.ajax('http:// xxx.com?login', function (data) { // 登录成功
    login.trigger('loginSucc', data); // 发布登录成功的消息
});


var header = (function () { // header 模块
    login.listen('loginSucc', function (data) {
        header.setAvatar(data.avatar);
    });
    return {
        setAvatar: function (data) {
            console.log('设置 header 模块的头像');
        }
    }
})();
var nav = (function () { // nav 模块
    login.listen('loginSucc', function (data) {
        nav.setAvatar(data.avatar);
    });
    return {
        setAvatar: function (avatar) {
            console.log('设置 nav 模块的头像');
        }
    }
})();

var address = (function () { // nav 模块
    login.listen('loginSucc', function (obj) {
        address.refresh(obj);
    });
    return {
        refresh: function (avatar) {
            console.log('刷新收货地址列表');
        }
    }
})();