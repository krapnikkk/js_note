class Dictionary{
    constructor(){
        this.datastore = [];
    }

    add(key, value){
        this.datastore[key] = value;
        return this;
    }

    find(key){
        return this.datastore[key];
    }

    remove(key){
        delete this.datastore[key];
    }

    showAll(){
        console.log(this.datastore);
        for(var key in this.datastore.sort){
            console.log(`${key}->${this.datastore[key]}`);
        }
    }

    count(){
        var n = 0;
        for(var key in this.datastore){
            n++;
        }
        return n;
    }

    clear(){
        for(var key in this.datastore){
            delete this.datastore[key];
        }
    }

}

function test(){
    var pbook= new Dictionary();
    pbook.add("Mike","123").add("David","234").add("Cynthia","456");
    console.log(`David's extension: ${pbook.find("David")}`);
    pbook.remove("Mike");
    pbook.clear();
    pbook.showAll();
    console.log(pbook.length);
    console.log(pbook.count());
}

test();