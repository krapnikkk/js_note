class List {
    constructor() {
        this.listSize = 0;
        this.position = 0;
        this.dataStore = [];
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
        return this;
    }

    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    }

    get length() {
        return this.listSize;
    }

    toString() {
        return this.dataStore;
    }

    insert(element, offset) {
        var insertPosition = this.find(offset);
        if (insertPosition > -1) {
            this.dataStore.splice(insertPosition + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.position = 0;
    }

    contains(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    front() {
        this.position = 0;
    }

    end() {
        this.position = this.listSize - 1;
    }

    prev() {
        // if (this.position > 0) {
        --this.position;
        // }
        return this;
    }

    next() {
        // if (this.position < this.listSize - 1) {
        ++this.position;
        // }
        return this;
    }

    currentPosition() {
        return this.position;
    }

    moveTo(position) {
        this.position = position;
    }

    getElement() {
        return this.dataStore[this.position];
    }

    insertWord(word) {
        if (this.dataStore.every((value) => {
            // if(typeof word === 'number' && isFinite(word)){//number
            return word > value;
            // }else{//letter

            // }
        })) {
            this.append(word);
        }
    }
}

function test() {
    var names = new List();
    names.append("Jack");
    names.append("Krapnik");
    names.append("John").append("Tom");
    console.log(names.toString());

    names.remove("John");
    console.log(names.toString());

    names.front();
    console.log(names.getElement());
    names.next();
    console.log(names.getElement());
    names.next().next().prev();
    console.log(names.getElement());

    console.log("=========");

    //迭代器
    for (names.front(); names.currentPosition() < names.length; names.next()) {
        console.log(names.getElement());
    }

    for (names.end(); names.currentPosition() >= 0; names.prev()) {
        console.log(names.getElement());
    }
}

// test();

module.exports = List;