class Stack {
    constructor() {
        this.top = 0;
        this.dataStore = [];
    }


    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    get length() {
        return this.top;
    }

    clear() {
        this.top = 0;
    }
}

function test(){
    var s = new Stack();
    s.push("Jack");
    s.push("John");
    s.push("Bryan");
    s.push("Raymond");
    console.log("length:"+s.length);
    console.log(s.peek());
    var popped = s.pop();
    console.log("The popped element is:" + popped);
    console.log(s.peek());
    s.push("Cynthia");
    s.clear();
    console.log("length:"+s.length);
    console.log(s.peek());
    s.push("Amy");
    console.log(s.peek());
}

// test();

module.exports = Stack;