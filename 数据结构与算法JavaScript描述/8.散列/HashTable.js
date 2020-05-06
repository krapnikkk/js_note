class HashTable {
    constructor(count) {
        this.table = new Array(count);
        this.values = [];
        this.type = 1;//1:simpleHash 2:betterHash 3:chains 4:linear
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

    put(data, key = 0) {
        var pos;
        if (this.type == 1) {
            pos = this.simpleHash(data);
        } else if (this.type == 2) {
            pos = this.betterHash(data);
        } else if (this.type == 3) {
            pos = this.betterHash(key);
            var index = 0;
            if (this.table[pos][index] == undefined) {
                this.table[pos][index + 1] = data;
                ++index;
            } else {
                while (this.table[pos][index] != undefined) {
                    ++index;
                }
                this.table[pos][index + 1] = data;
            }
        } else if (this.type == 4) {
            pos = this.betterHash(data);
            if (this.table[pos] == undefined) {
                this.table[pos] = key;
                this.values[pos] = data;
            }
            else {
                while (this.table[pos] != undefined) {
                    pos++;
                }
                this.table[pos] = key;
                this.values[pos] = data;
            }
        }
        this.table[pos] = data;
    }

    get(key) {
        if (this.type == 2) {
            return this.table[this.betterHash(key)];
        } else if (this.type == 3) {
            var index = 0;
            var hash = this.betterHash(key);
            if (this.table[pos][index] = key) {
                return this.table[pos][index + 1];
            } else {
                index += 2;
                while (this.table[pos][index] != key) {
                    index += 2;
                }
                return this.table[pos][index + 1];
            }
            return undefined;
        }

    }

    showDistro() {
        var n = 0;
        for (var i = 0; i < this.table.length; i++) {
            if (this.type == 3) {
                if (this.table[i][0] != undefined) {
                    console.log(`${i}:${this.table[i]}`);
                }
            } else {
                if (this.table[i] != undefined) {
                    console.log(`${i}:${this.table[i]}`);
                }
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

    buildChains() {
        for (var i = 0; i < this.table.length; ++i) {
            this.table[i] = [];
        }
    }
}

function test() {
    var someNames = ["David", "Jennifer", "Donnie", "Raymond",
        "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    var hTable = new HashTable(137);
    for (var i = 0; i < someNames.length; i++) {
        hTable.put(someNames[i]);
    }
    hTable.showDistro();
}

test();