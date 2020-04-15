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
            this.List--;
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

    insert(element,offset){
        var insertPosition = this.find(offset);
        if(insertPosition>-1){
            this.dataStore.splice(insertPosition+1,0,element);
            this.listSize++;
            return true;
        }
        return false;
    }

    clear(){
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.position = 0;
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
}

test();