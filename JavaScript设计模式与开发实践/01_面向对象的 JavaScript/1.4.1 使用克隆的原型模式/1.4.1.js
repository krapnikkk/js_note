var Plane = function(){
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
plane.attckLevel = 10;
plane.defenseLevel = 7;

var clonePlane = Object.create(plane);

console.log(clonePlane);//Object{blood:500,attackLevel:10,defenseLevel:7}

//不支持object.create方法的浏览器
Object.create = Object.create||function(obj){
    var F = function () {
        F.prototype = obj;
        return new F();
    }
}