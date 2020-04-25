/**
 * 数制间的互相转换
 */
const Stack = require('./Stack');

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num / base);
    } while (num > 0);

    var converted = "";
    while (s.length > 0) {
        converted += s.pop();
    }
    return converted;
}

function sysConvert(num, base) {
    var s = new Stack();
    var digits = "01234567890ABCDEF";
    while (num > 0) {
        s.push(num % base);
        num = Math.floor(num / base);
    }
    var converted = "";
    while(s.length > 0) {
        converted += digits[s.pop()];
    }
    return converted;
}

function test() {
    var num = 32;
    var base = 5;
    var newNum = mulBase(num, base);
    console.log(num + " converted to base " + base + " is " + newNum);

    num = 132;
    base = 8;
    newNum = mulBase(num, base);
    console.log(num + " converted to base " + base + " is " + newNum);

    num =1722;
    base =16;
    newNum = sysConvert(num, base);
    console.log(num + " converted to base " + base + " is " + newNum);
}

test();