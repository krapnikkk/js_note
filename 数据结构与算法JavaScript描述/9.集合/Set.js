class Set {
    constructor() {
        this.dataStore = [];
    }

    size() {
        return this.dataStore.length;
    }

    add(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }

    remove(data) {
        var pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    show() {
        return this.dataStore;
    }

    contains(item) {
        return this.dataStore.indexOf(item)>-1;
    }

    union(set){
        var tempSet = new Set();
        for (var i = 0; i <this.dataStore.length; i++){
            tempSet.add(this.dataStore[i]);
        }

        for(var i = 0; i <set.dataStore.length; i++){
            if(!tempSet.contains(set.dataStore[i])){
                tempSet.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }

    intersect(set){
        var tempSet = new Set();
        for (var i = 0; i <this.dataStore.length;i++){
            if (set.contains(this.dataStore[i])) {
               tempSet.add(this.dataStore[i]); 
            }
        }
        return tempSet;
    }

    
}

function test() {
    var names = new Set();
    names.add("David");
    names.add("Jennifer");
    names.add("Cynthia");
    names.add("Mike");
    names.add("Raymond");
    if (names.add("Mike")) {
        console.log("Mike added")
    }else {
        console.log("Can't add Mike, must already be in set");
    }
    console.log(names.show());
    var removed = "Mike";
    if (names.remove(removed)) {
        console.log(removed + " removed.");
    }else {
        console.log(removed + " not removed.");
    }
    names.add("Clayton");
    console.log(names.show());
    removed = "Alisa";
    if (names.remove("Alisa")) {
        console.log(removed + " removed.");
    }else {
        console.log(removed + " not removed.");
    }
}

test();