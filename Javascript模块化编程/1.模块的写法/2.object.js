//二、对象写法
var module1 = {
    _count: 1,
    a1: function () {
        console.log("I'm module1's function a1");
    },

    a2: function () {
        console.log("I'm module1's function a2");
    }
}

module1.a1();

//内部状态可以被任意串改
module1._count = 5;
console.log(module1._count);
