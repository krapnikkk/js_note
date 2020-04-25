/** 
 * 判断给定字符串是否回文
*/
const Stack = require("./Stack");
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length > 0) {
        rword += s.pop();
    }

    if (rword == word) {
        return true;
    } else {
        return false;
    }
}

function test() {
    var word = "hello";
    if (isPalindrome(word)) {
        console.log(word + " is a palindrome.");
    }
    else {
        console.log(word + " is not a palindrome.");
    }
    word = "racecar"
    if (isPalindrome(word)) {
        console.log(word + " is a palindrome.");
    }
    else {
        console.log(word + " is not a palindrome.");
    }
}

test();