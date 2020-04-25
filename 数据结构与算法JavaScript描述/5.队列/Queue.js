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
            retStr += this.dataStore[i] + "\n";
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