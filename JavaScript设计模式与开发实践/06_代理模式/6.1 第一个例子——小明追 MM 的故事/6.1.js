//直接赠送
var Flower = function () {
};
var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower();
        target.receiveFlower(flower);
    }
};
var A = {
    receiveFlower: function (flower) {
        console.log('收到花 ' + flower);
    }
};
xiaoming.sendFlower(A);

//代理赠送
var Flower = function () {
};
var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower();
        target.receiveFlower(flower);
    }
};
var B = {
    receiveFlower: function (flower) {
        A.receiveFlower(flower);
    }
};
var A = {
    receiveFlower: function (flower) {
        console.log('收到花 ' + flower);
    }
};
xiaoming.sendFlower(B);

//增加监听的代理模式
var Flower = function () {
};
var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower();
        target.receiveFlower(flower);
    }
};
var B = {
    receiveFlower: function (flower) {
        A.listenGoodMood(function () { // 监听 A 的好心情
            A.receiveFlower(flower);
        });
    }
};
var A = {
    receiveFlower: function (flower) {
        console.log('收到花 ' + flower);
    },
    listenGoodMood: function (fn) {
        setTimeout(function () { // 假设 10 秒之后 A 的心情变好
            fn();
        }, 10000);
    }
};
xiaoming.sendFlower(B);