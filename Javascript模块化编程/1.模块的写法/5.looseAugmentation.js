//五、宽放大模式（Loose augmentation）
var module1;

module1 = (function (mod) {
    mod.a4 = function () {
        console.log("I'm module1's function a4");
    };
    return mod;
})(module1 || {});

module1.a4();