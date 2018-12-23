var makeSound = function(animal){
    animal.sound();
};

var Duck = function(){}

Duck.prototype.sound = function(){
    console.log('gagaga');
};

var Chicken = function(){}

Chicken.prototype.sound = function(){
    console.log('gegege');
};

makeSound(new Duck());
makeSound(new Chicken());

var Dog = function(){}

Dog.prototype.sound = function(){
    console.log('wongwongwong');
};

makeSound(new Dog());