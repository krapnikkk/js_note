class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

/**
 * 单链表
 */
class SingleLList {
    constructor() {
        this.head = new Node("head");
    }

    find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    remove(item) {
        var preNode = this.findPrevious(item);
        if (!(preNode.next == null)) {
            preNode.next = preNode.next.next;
        }
    }

    display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}

/**
 * 双向链表
 */
class DoubleLList {
    constructor() {
        this.head = new Node("head");
    }

    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    find(item) {
        var node = this.head;
        while (node.element != item) {
            node = node.next;
        }
        return node;
    }

    remove(item) {
        var currNode = this.find(item);
        if (currNode.next != null) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

    findLast() {
        var currNode = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    displayReverse() {
        var currNode = this.head;
        currNode = this.findLast();
        while (currNode.previous != null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }

    display() {
        var currNode = this.head;
        while (currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}

function test() {
    console.log("====SingleLList====");
    var cities = new SingleLList();
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Carlisle", "Russellville");
    cities.insert("Alma", "Carlisle");
    cities.display();
    console.log("=========");
    cities.remove("Carlisle");
    cities.display();
    console.log("====DoubleLList====");
    var cities = new DoubleLList();
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Carlisle", "Russellville");
    cities.insert("Alma", "Carlisle");
    cities.display();
    console.log("=========");
    cities.remove("Carlisle");
    cities.display();
    console.log("=========");
    cities.displayReverse();
}

test();