import Stack from './Stack.js';

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

// console.log(decimalToBinary(233));
// console.log(decimalToBinary(10));
// console.log(decimalToBinary(1000));

function baseConverter(decNumber, base) {
    if (base < 2 || base > 36) {
        return '';
    }
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGJIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(233,2));
console.log(baseConverter(10,8));
console.log(baseConverter(1000,16));