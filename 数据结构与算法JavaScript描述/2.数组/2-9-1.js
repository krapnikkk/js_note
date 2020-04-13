function Student() {
    this.grades = [];
    this.add = add;
    this.average = average;
}

function add(grades) {
    this.grades.push(grades);
    return this;
}

function average() {
    var total = 0;
    for (var i = 0; i < this.grades.length; i++) {
        total += this.grades[i];
    }

    return (total / this.grades.length).toFixed(2);
}

var student = new Student();
student.add(76).add(98).add(91);
console.log(student.average());