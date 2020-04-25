class Queue {
    constructor() {
        this.dataStore = [];
    }
    get length() {
        return this.dataStore.length;
    }

    enqueue(element) {
        this.dataStore.push(element);
        return this;
    }

    dequeue() {
        return this.dataStore.shift();
    }

    dequeueByPriority(code) {
        var priority = this.dataStore[0][code];
        for (var i = 1; i < this.dataStore.length; i++) {
            if (this.dataStore[i][code] < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    isEmpty() {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i].name) {
                retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
            } else {
                retStr += this.dataStore[i] + "\n";
            }

        }
        return retStr;
    }
}

function test() {
    var q = new Queue();
    q.enqueue("John").enqueue("Jane").enqueue("Jennifer").enqueue("May");
    console.log(q.toString());
    q.dequeue();
    console.log(q.toString());
    console.log("Front of queue: " + q.front());
    console.log("Back of queue: " + q.back());
}

// test();
module.exports = Queue;