//1.最初的代码实现
var calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
        return salary * 4;
    }
    if (performanceLevel === 'A') {
        return salary * 3;
    }

    if(performanceLevel === 'B'){
        return salary * 2;
    }
};

calculateBonus('B',20000);

//2.使用组合函数重构代码
var performanceS = function(salary){
    return salary * 4;
};

var performanceA = function(salary){
    return salary * 3;
};

var performanceB = function(salary){
    return salary * 2;
};

var calculateBonus = function(performanceLevel, salary){
    if(performanceLevel === 'S'){
        return performanceS(salary);
    }
    if(performanceLevel === 'A'){
        return performanceA(salary);
    }
    if(performanceLevel === 'B'){
        return performanceB(salary);
    }
};

calculateBonus('A',10000);

//3.使用策略模式重构代码
//策略类
var performanceS = function(){};
performanceS.prototype.calculate = function(salary){
    return salary * 4;
};

var performanceA = function(){};
performanceA.prototype.calculate = function(salary){
    return salary * 3;
};

var performanceB = function(){};
performanceB.prototype.calculate = function(salary){
    return salary * 2;
};
//奖金类
var Bonus = function(){
    this.salary = null;//原始工资
    this.strategy = null;//绩效等级对应的策略对象
};

Bonus.prototype.setSalary = function(salary){
  this.salary = salary;
};

Bonus.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
};

Bonus.prototype.getBonus = function(){
    return this.strategy.calculate(this.salary);
};

var bonus = new Bonus();
bonus.setSalary( 10000 );
bonus.setStrategy( new performanceS() ); // 设置策略对象
console.log( bonus.getBonus() ); // 输出：40000