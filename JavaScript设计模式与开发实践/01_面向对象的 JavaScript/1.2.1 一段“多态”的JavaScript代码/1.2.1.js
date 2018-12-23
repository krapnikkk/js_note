var makeSound = function(animal){
    if(animal instanceof Duck){
        console.log('gagagaga!');
    }else if(animal instanceof Chicken){
        console.log('gegegege!');
    }
};

var Duck = function(){};

var Chicken = function(){};

makeSound(new Duck());
makeSound(new Chicken());