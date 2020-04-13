/**
 * 对象中的数组
 */

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
    return this;
}

function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; i++) {
        total += this.dataStore[i];
    }
    return (total / this.dataStore.length).toFixed(2);
}

var Week = new weekTemps();
Week.add(52).add(55).add(61).add(55).add(50).add(52).add(49);
console.log(Week.average());