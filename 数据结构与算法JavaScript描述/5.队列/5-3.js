/**
 * 方块舞的舞伴分配问题
 */
const Queue = require("./Queue");
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}
var males = new Queue(), females = new Queue();

var dancers = `F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Williams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney`;

function getDancers(males, females, dancers) {
    var names = dancers.split("\n");
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }
    for (var i = 0; i < names.length; i++) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex === "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are:\n");
    while (!males.isEmpty() && !females.isEmpty()) {
        var person = females.dequeue();
        console.log("Female dancer is" + person.name);
        person = males.dequeue();
        console.log("and the male dancer is" + person.name);
    }
}

getDancers(males, females, dancers);
dance(males, females);

if (males.length > 0) {
    console.log("There are " + males.length +
        " male dancers waiting to dance.");
}
if (females.length > 0) {
    console.log("There are " + females.length +
        " female dancers waiting to dance.");
}
if (!females.isEmpty()) {
    console.log(females.front().name + " is waiting to dance.");
}

if (!males.isEmpty()) {
    console.log(males.front().name + " is waiting to dance.");
}