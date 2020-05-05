class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        console.log(`hash value:${data}->${total}`);
        return total % this.table.length;
    }

    betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        console.log(`hash value:${string}->${total}`);
        return parseInt(total);
    }

    put(data) {
        // var pos = this.simpleHash(data);
        var pos = this.betterHash(data);
        this.table[pos] = data;
    }

    showDistro() {
        var n = 0;
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(`${i}:${this.table[i]}`);
            }
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    genStuData(arr) {
        for (var i = 0; i < arr.length; ++i) {
            var num = "";
            for (var j = 1; j <= 9; ++j) {
                num += Math.floor(Math.random() * 10);
            }
            num += getRandomInt(50, 100);
            arr[i] = num;
        }
    }
}

function test() {
    var someNames = ["David", "Jennifer", "Donnie", "Raymond",
        "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    var hTable = new HashTable();
    for (var i = 0; i < someNames.length; i++) {
        hTable.put(someNames[i]);
    }
    hTable.showDistro();
}

test();