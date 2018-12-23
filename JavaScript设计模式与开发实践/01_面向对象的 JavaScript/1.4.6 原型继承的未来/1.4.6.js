//ES6语法
class Animal{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        return "woof";
    }
}

var dog = new Dog('pop');
console.log(dog.getName()+'says'+dog.speak());