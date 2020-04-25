/**
 * 优先队列
 */
const Queue = require("./Queue");
function Patient(name,code){
    this.name = name;
    this.code = code;
}

var ed = new Queue();
var p = new Patient("Smith",5);
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());

var seen = ed.dequeueByPriority("code");
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

var seen = ed.dequeueByPriority("code");
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

var seen = ed.dequeueByPriority("code");
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
